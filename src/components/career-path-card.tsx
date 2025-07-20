'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, Sparkles } from 'lucide-react';
import {
  careerPathRecommendations,
  type CareerPathRecommendationsOutput,
} from '@/ai/flows/career-path-recommendations';
import { Skeleton } from './ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

type CareerPathCardProps = {
  resumeContent: string;
};

export function CareerPathCard({ resumeContent }: CareerPathCardProps) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] =
    useState<CareerPathRecommendationsOutput | null>(null);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setLoading(true);
    setResult(null);
    try {
      const res = await careerPathRecommendations({ resumeContent });
      setResult(res);
    } catch (error) {
      console.error('Error generating career path recommendations:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description:
          'Failed to generate career recommendations. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="print-card">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">
          AI Career Assistant
        </CardTitle>
        <CardDescription>
          Get personalized career path suggestions based on this resume.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {loading && (
          <div className="space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-full" />
            </div>
            <Skeleton className="h-8 w-1/2" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/6" />
            </div>
          </div>
        )}
        {result && (
          <div className="space-y-4">
            <Alert>
              <Sparkles className="h-4 w-4" />
              <AlertTitle className="font-semibold">
                Suggested Career Paths
              </AlertTitle>
              <AlertDescription>
                <ul className="list-disc space-y-1 pl-5 mt-2">
                  {result.suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
            <div>
              <h4 className="font-semibold">Reasoning</h4>
              <p className="text-sm text-muted-foreground">
                {result.reasoning}
              </p>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="print-hidden">
        <Button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full"
        >
          {loading ? (
            'Generating...'
          ) : (
            <>
              <Lightbulb className="mr-2 h-4 w-4" />
              Suggest Career Paths
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
