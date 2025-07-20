'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Sparkles } from 'lucide-react';
import { summarizeProject } from '@/ai/flows/summarize-project';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from './ui/skeleton';

type Project = {
  title: string;
  github: string | null;
  technologies: string[];
  description: string;
  points: string[];
};

type ProjectsCardProps = {
  projects: Project[];
};

export function ProjectsCard({ projects }: ProjectsCardProps) {
  const [summaries, setSummaries] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  const { toast } = useToast();

  const handleSummarize = async (project: Project, index: number) => {
    const projectKey = `project-${index}`;
    if (summaries[projectKey]) return; // Don't re-generate

    setLoading(prev => ({ ...prev, [projectKey]: true }));
    try {
      const result = await summarizeProject(project);
      setSummaries(prev => ({ ...prev, [projectKey]: result.summary }));
    } catch (error) {
      console.error('Error summarizing project:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to generate project summary. Please try again.',
      });
    } finally {
      setLoading(prev => ({ ...prev, [projectKey]: false }));
    }
  };

  return (
    <Card className="print-card">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {projects.map((project, index) => {
            const projectKey = `project-${index}`;
            const isLoading = loading[projectKey];
            const summary = summaries[projectKey];

            return (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex w-full items-center justify-between pr-4">
                    <span className="text-left font-semibold">
                      {project.title}
                    </span>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="ml-4 text-muted-foreground hover:text-foreground"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleSummarize(project, index)}
                      disabled={isLoading}
                      className="print-hidden shrink-0"
                    >
                      <Sparkles className="mr-2 h-4 w-4" />
                      {isLoading ? 'Summarizing...' : 'Summarize'}
                    </Button>
                  </div>
                  {isLoading && <Skeleton className="h-16 w-full" />}
                  {summary && (
                    <div className="mt-2 rounded-md border bg-accent/50 p-3 text-sm">
                      <p className="font-medium text-accent-foreground">
                        AI Summary
                      </p>
                      <p className="text-accent-foreground/80">{summary}</p>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIndex) => (
                      <Badge key={tIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    {project.points.map((point, pIndex) => (
                      <li key={pIndex}>{point}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </CardContent>
    </Card>
  );
}
