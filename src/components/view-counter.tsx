'use client';

import {Eye} from 'lucide-react';
import {useEffect, useState} from 'react';
import {Skeleton} from './ui/skeleton';

export function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    // Simulate fetching and incrementing a view count
    const randomBase = Math.floor(Math.random() * (2500 - 1000 + 1) + 1000);
    setViews(randomBase + 1);
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
