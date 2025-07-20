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
import { MessageSquareQuote } from 'lucide-react';
import {
  generateRecruiterQuestions,
  type GenerateRecruiterQuestionsOutput,
} from '@/ai/flows/recruiter-qna';
import { Skeleton } from './ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

type RecruiterQnaCardProps = {
  resumeContent: string;
};

export function RecruiterQnaCard({ resumeContent }: RecruiterQnaCardProps) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] =
    useState<GenerateRecruiterQuestionsOutput | null>(null);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setLoading(true);
    setResult(null);
    try {
      const res = await generateRecruiterQuestions({ resumeContent });
      setResult(res);
    } catch (error) {
      console.error('Error generating recruiter Q&A:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description:
          'Failed to generate recruiter Q&A. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="print-card">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">
          Recruiter Q&A
        </CardTitle>
        <CardDescription>
          Generate potential interview questions a recruiter might ask.
        </CardDescription>
      </CardHeader>
      <CardContent className="min-h-[10rem]">
        {loading && (
          <div className="space-y-4">
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
          </div>
        )}
        {result && (
          <Accordion type="single" collapsible className="w-full">
            {result.qna.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-sm">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
              <MessageSquareQuote className="mr-2 h-4 w-4" />
              Generate Questions
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
