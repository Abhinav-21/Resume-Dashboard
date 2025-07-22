'use server';

import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc, increment } from 'firebase/firestore';

const viewCounterDocRef = doc(db, 'analytics', 'viewCounter');

export async function getAndIncrementViewCount(): Promise<number> {
  try {
    const docSnap = await getDoc(viewCounterDocRef);

    if (docSnap.exists()) {
      // Document exists, increment it
      await setDoc(viewCounterDocRef, { count: increment(1) }, { merge: true });
    } else {
      // Document does not exist, create it with count of 1
      await setDoc(viewCounterDocRef, { count: 1 });
    }

    // Get the latest count after update/creation
    const updatedSnap = await getDoc(viewCounterDocRef);
    return updatedSnap.data()?.count || 1;

  } catch (error) {
    console.error('Error with view counter:', error);
    // Return a fallback value in case of error
    return 0;
  }
}

export async function getViewCount(): Promise<number> {
    try {
        const docSnap = await getDoc(viewCounterDocRef);
        if (docSnap.exists()) {
            return docSnap.data()?.count || 0;
        } else {
            // If it doesn't exist, it means the count is 0
            await setDoc(viewCounterDocRef, { count: 0 });
            return 0;
        }
    } catch (error) {
        console.error('Error getting view count:', error);
        return 0;
    }
}
