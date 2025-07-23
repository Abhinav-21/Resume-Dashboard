'use client';

import { Eye } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Skeleton } from './ui/skeleton';

const COUNT_API_NAMESPACE = 'resume-insights-dashboard';
const COUNT_API_KEY = 'global-visits';

export function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    async function fetchAndIncrementViews() {
      const sessionViewedKey = 'has-viewed-session';
      const hasViewed = sessionStorage.getItem(sessionViewedKey);
      
      const endpoint = hasViewed 
        ? `https://api.countapi.xyz/get/${COUNT_API_NAMESPACE}/${COUNT_API_KEY}`
        : `https://api.countapi.xyz/hit/${COUNT_API_NAMESPACE}/${COUNT_API_KEY}`;

      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        
        if (data.value !== undefined) {
          setViews(data.value);
        } else {
          // If the key doesn't exist yet, the 'get' call might fail.
          // Let's try to get the initial value from 'hit' if views are null.
          if(views === null) {
            const hitResponse = await fetch(`https://api.countapi.xyz/hit/${COUNT_API_NAMESPACE}/${COUNT_API_KEY}`);
            const hitData = await hitResponse.json();
            setViews(hitData.value);
          }
        }
        
        if (!hasViewed) {
          sessionStorage.setItem(sessionViewedKey, 'true');
        }

      } catch (error) {
        console.error("Failed to fetch view count:", error);
        // Don't show a broken counter, just hide it or show 0.
        setViews(0);
      }
    }

    fetchAndIncrementViews();
  }, [views]);

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
