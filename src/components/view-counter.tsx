'use client';

import {Eye} from 'lucide-react';
import {useEffect, useState} from 'react';
import {getAndIncrementViewCount} from '@/services/view-counter';
import {Skeleton} from './ui/skeleton';

export function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    getAndIncrementViewCount()
      .then(setViews)
      .catch(err => {
        console.error('Could not fetch views', err);
        setViews(0);
      });
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
