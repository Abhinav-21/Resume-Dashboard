'use server';

import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc, increment } from 'firebase/firestore';

const viewCounterDocRef = doc(db, 'analytics', 'viewCounter');

export async function getAndIncrementViewCount(): Promise<number> {
  try {
    const docSnap = await getDoc(viewCounterDocRef);

    if (docSnap.exists()) {
      await setDoc(viewCounterDocRef, { count: increment(1) }, { merge: true });
      const updatedSnap = await getDoc(viewCounterDocRef);
      return updatedSnap.data()?.count || 1;
    } else {
      // Create the document if it doesn't exist
      await setDoc(viewCounterDocRef, { count: 1 });
      return 1;
    }
  } catch (error) {
    console.error('Error with view counter:', error);
    // Return a fallback value in case of error
    return 0;
  }
}
