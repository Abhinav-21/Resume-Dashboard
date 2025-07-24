'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Briefcase, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { summarizeExperience } from '@/ai/flows/summarize-experience';
import { Skeleton } from './ui/skeleton';
import { Separator } from './ui/separator';

type Experience = {
  company: string;
  role: string;
  duration: string;
  location: string;
  points: string[];
};

type ExperienceCardProps = {
  experience: Experience[];
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const [summaries, setSummaries] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  const { toast } = useToast();

  const handleSummarize = async (exp: Experience, index: number) => {
    const expKey = `exp-${index}`;
    if (summaries[expKey]) return; // Don't re-generate

    setLoading((prev) => ({ ...prev, [expKey]: true }));
    try {
      const result = await summarizeExperience({
        company: exp.company,
        role: exp.role,
        points: exp.points,
      });
      setSummaries((prev) => ({ ...prev, [expKey]: result.summary }));
    } catch (error) {
      console.error('Error summarizing experience:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description:
          'Failed to generate experience summary. Please try again.',
      });
    } finally {
      setLoading((prev) => ({ ...prev, [expKey]: false }));
    }
  };

  return (
    <Card className="print-card">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Experience</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {experience.map((exp, index) => {
          const expKey = `exp-${index}`;
          const isLoading = loading[expKey];
          const summary = summaries[expKey];

          return (
            <div key={index}>
              <div className="flex gap-4">
                <div className="mt-1">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col justify-between sm:flex-row">
                    <h3 className="font-semibold">{exp.company}</h3>
                    <p className="text-sm text-muted-foreground">
                      {exp.duration}
                    </p>
                  </div>
                  <p className="text-sm font-medium">{exp.role}</p>
                  <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    {exp.points.map((point, pIndex) => (
                      <li key={pIndex}>{point}</li>
                    ))}
                  </ul>

                  <div className="mt-4 flex items-center gap-4">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleSummarize(exp, index)}
                      disabled={isLoading}
                      className="print-hidden"
                    >
                      <Sparkles className="mr-2 h-4 w-4" />
                      {isLoading ? 'Summarizing...' : 'Summarize'}
                    </Button>
                  </div>

                  {isLoading && <Skeleton className="h-16 w-full mt-2" />}
                  {summary && (
                    <div className="mt-3 rounded-md border bg-accent/50 p-3 text-sm">
                      <p className="font-medium text-accent-foreground">
                        AI Summary
                      </p>
                      <p className="text-accent-foreground/80">{summary}</p>
                    </div>
                  )}
                </div>
              </div>
              {index < experience.length - 1 && (
                <Separator className="my-6" />
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
