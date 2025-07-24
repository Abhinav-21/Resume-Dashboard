'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
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
  return (
    <Card className="print-card">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Experience</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {experience.map((exp, index) => {
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
