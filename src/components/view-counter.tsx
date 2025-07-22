'use client';

import {Eye} from 'lucide-react';
import {useEffect, useState} from 'react';
import {Skeleton} from './ui/skeleton';

export function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const viewCountKey = 'resume-view-count';
    const hasVisitedKey = 'has-visited-resume';

    // Get current counts from localStorage, or initialize them
    let currentCount = parseInt(localStorage.getItem(viewCountKey) || '0', 10);
    const hasVisited = localStorage.getItem(hasVisitedKey) === 'true';

    if (!hasVisited) {
      currentCount += 1;
      localStorage.setItem(viewCountKey, currentCount.toString());
      localStorage.setItem(hasVisitedKey, 'true');
    }

    setViews(currentCount);
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Eye className="h-4 w-4" />
      {views === null ? (
        <Skeleton className="h-4 w-10" />
      ) : (
        <span>{views.toLocaleString()}</span>
      )}
    </div>
  );
}
