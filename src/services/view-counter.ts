'use server';

import {db} from '@/lib/firebase';
import {doc, getDoc, setDoc, increment} from 'firebase/firestore';

const VIEW_COUNTER_DOC_ID = 'resume-dashboard-views';
const VIEW_COUNTER_COLLECTION_ID = 'view-counts';

export async function getAndIncrementViewCount(): Promise<number> {
  const docRef = doc(db, VIEW_COUNTER_COLLECTION_ID, VIEW_COUNTER_DOC_ID);

  try {
    // In a transaction, get the document and increment the count.
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // Document exists, increment the count
      await setDoc(docRef, {count: increment(1)}, {merge: true});
      const updatedSnap = await getDoc(docRef);
      return updatedSnap.data()?.count || 1;
    } else {
      // Document doesn't exist, create it with count 1
      await setDoc(docRef, {count: 1});
      return 1;
    }
  } catch (error) {
    console.error('Error incrementing view count:', error);
    // If there's an error, try to just get the count without incrementing
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data().count;
      }
    } catch (e) {
      console.error('Error fetching view count after failure:', e);
    }
    // Return a default or error value
    return 0;
  }
}
