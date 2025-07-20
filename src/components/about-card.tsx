import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserCircle } from 'lucide-react';

type AboutCardProps = {
  summary: string;
};

export function AboutCard({ summary }: AboutCardProps) {
  return (
    <Card className="print-card">
      <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center gap-2">
          <UserCircle className="h-6 w-6 text-primary" />
          About Me
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{summary}</p>
      </CardContent>
    </Card>
  );
}
