import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Award, Users } from 'lucide-react';

type AchievementsCardProps = {
  achievements: string[];
  positions: string[];
};

export function AchievementsCard({
  achievements,
  positions,
}: AchievementsCardProps) {
  return (
    <Card className="print-card">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">
          Achievements & Responsibilities
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Award className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Achievements</h3>
          </div>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {achievements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <Separator />
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Users className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Positions of Responsibility</h3>
          </div>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {positions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
