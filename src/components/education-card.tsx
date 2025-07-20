import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import { Separator } from './ui/separator';

type Education = {
  institution: string;
  degree: string;
  duration: string;
  detail: string;
};

type EducationCardProps = {
  education: Education[];
};

export function EducationCard({ education }: EducationCardProps) {
  return (
    <Card className="print-card">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Education</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {education.map((edu, index) => (
          <div key={index}>
            <div className="flex gap-4">
              <div className="mt-1">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-grow">
                <p className="font-semibold">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.degree}</p>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{edu.duration}</span>
                  <span>{edu.detail}</span>
                </div>
              </div>
            </div>
            {index < education.length - 1 && <Separator className="my-4" />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
