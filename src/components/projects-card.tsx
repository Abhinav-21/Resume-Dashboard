'use client';

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
import { Github } from 'lucide-react';

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
  return (
    <Card className="print-card">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {projects.map((project, index) => (
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
                      onClick={(e) => e.stopPropagation()}
                      className="ml-4 text-muted-foreground hover:text-foreground"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
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
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
