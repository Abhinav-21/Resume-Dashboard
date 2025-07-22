'use client';

import { Eye } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Skeleton } from './ui/skeleton';
import { getAndIncrementViewCount, getViewCount } from '@/services/view-counter';

export function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    async function fetchAndIncrementViews() {
      // We only want to increment the count in production
      if (process.env.NODE_ENV === 'production') {
        const sessionViewedKey = 'has-viewed-resume-session';
        const hasViewed = sessionStorage.getItem(sessionViewedKey);

        if (!hasViewed) {
          try {
            const fetchedViews = await getAndIncrementViewCount();
            setViews(fetchedViews);
            sessionStorage.setItem(sessionViewedKey, 'true');
          } catch (error) {
             setViews(0);
          }
        } else {
           // If they've already viewed in this session, just get the count without incrementing
           try {
             const currentViews = await getViewCount();
             setViews(currentViews);
           } catch(error) {
             setViews(0);
           }
        }
      } else {
        // In development, we can just show a placeholder
        setViews(12345);
      }
    }

    fetchAndIncrementViews();
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Eye className="h-4 w-4" />
      {views === null ? (
        <Skeleton className="h-4 w-12" />
      ) : (
        <span>{views.toLocaleString()}</span>
      )}
    </div>
  );
}
