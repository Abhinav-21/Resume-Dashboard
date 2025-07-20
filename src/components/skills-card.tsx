import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type Skills = {
  languages: string[];
  technologies: string[];
  tools: string[];
  frameworks: string[];
  cloud: string[];
  softSkills: string[];
};

type SkillsCardProps = {
  skills: Skills;
};

const SkillCategory = ({ title, skills }: { title: string, skills: string[] }) => {
  if (!skills || skills.length === 0) return null;
  
  return (
    <div>
      <h3 className="mb-2 font-semibold">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary" className="text-nowrap">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};


export function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <Card className="print-card">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">
          Technical & Soft Skills
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <SkillCategory title="Languages" skills={skills.languages} />
        <SkillCategory title="Technologies" skills={skills.technologies} />
        <SkillCategory title="Developer & Analytics Tools" skills={skills.tools} />
        <SkillCategory title="Frameworks" skills={skills.frameworks} />
        <SkillCategory title="Cloud/Big Data" skills={skills.cloud} />
        <SkillCategory title="Soft Skills" skills={skills.softSkills} />
      </CardContent>
    </Card>
  );
}
