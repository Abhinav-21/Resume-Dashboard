import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, Github, Linkedin } from 'lucide-react';

type PersonalInfoCardProps = {
  contact: {
    phone: string;
    email: string;
  };
  socials: {
    github: string;
    linkedin: string;
  };
};

export function PersonalInfoCard({ contact, socials }: PersonalInfoCardProps) {
  return (
    <Card className="print-card">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Personal Info</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 shrink-0 text-primary" />
          <a
            href={`tel:${contact.phone}`}
            className="text-muted-foreground hover:text-foreground"
          >
            {contact.phone}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 shrink-0 text-primary" />
          <a
            href={`mailto:${contact.email}`}
            className="text-muted-foreground hover:text-foreground"
          >
            {contact.email}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Linkedin className="h-5 w-5 shrink-0 text-primary" />
          <a
            href={`https://linkedin.com/in/${socials.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            {socials.linkedin}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Github className="h-5 w-5 shrink-0 text-primary" />
          <a
            href={`https://github.com/${socials.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            {socials.github}
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
