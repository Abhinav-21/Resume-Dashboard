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
import { MessageSquareQuote, Send } from 'lucide-react';
import {
  answerRecruiterQuestion,
  type AnswerRecruiterQuestionOutput,
} from '@/ai/flows/recruiter-qna';
import { Skeleton } from './ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from './ui/textarea';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

type RecruiterQnaCardProps = {
  resumeContent: string;
};

export function RecruiterQnaCard({ resumeContent }: RecruiterQnaCardProps) {
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState<AnswerRecruiterQuestionOutput | null>(
    null
  );
  const [lastQuestion, setLastQuestion] = useState('');
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!question.trim()) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Please enter a question.',
      });
      return;
    }

    setLoading(true);
    setResult(null);
    setLastQuestion(question);

    try {
      const res = await answerRecruiterQuestion({ resumeContent, question });
      setResult(res);
    } catch (error) {
      console.error('Error generating recruiter answer:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to generate an answer. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="print-card flex flex-col">
      <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center gap-2">
          <MessageSquareQuote />
          Recruiter Q&A
        </CardTitle>
        <CardDescription>
          Ask a question as a recruiter, and the AI will answer based on the
          resume.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <div className="space-y-2">
          <Textarea
            placeholder="e.g., Tell me about your experience with RAG pipelines."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            disabled={loading}
          />
        </div>
        {loading && (
          <div className="space-y-2">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-10 w-full" />
          </div>
        )}
        {result && (
          <Alert>
            <AlertTitle className="font-semibold">{lastQuestion}</AlertTitle>
            <AlertDescription className="mt-2 text-foreground">
              {result.answer}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter className="print-hidden">
        <Button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full"
        >
          {loading ? (
            'Answering...'
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Ask Question
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
