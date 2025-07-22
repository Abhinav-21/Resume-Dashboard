'use client';

import { Printer, Phone, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ViewCounter } from './view-counter';

type DashboardHeaderProps = {
  name: string;
  title: string;
  contact: {
    phone: string;
    email: string;
  };
  socials: {
    github: string;
    linkedin: string;
  };
};

export function DashboardHeader({
  name,
  title,
  contact,
  socials,
}: DashboardHeaderProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="mb-6 flex flex-col items-start justify-between gap-4 border-b border-border pb-6 print-hidden md:flex-row md:items-center">
      <div className="flex-1">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary">
          {name}
        </h1>
        <p className="mt-1 text-lg text-muted-foreground">{title}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a
            href={`tel:${contact.phone}`}
            className="flex items-center gap-2 hover:text-foreground"
          >
            <Phone className="h-4 w-4" />
            {contact.phone}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-2 hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            {contact.email}
          </a>
          <a
            href={`https://linkedin.com/in/${socials.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
            {socials.linkedin}
          </a>
          <a
            href={`https://github.com/${socials.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            {socials.github}
          </a>
        </div>
      </div>
      <div className="flex shrink-0 flex-col items-end gap-3">
        <Button onClick={handlePrint} variant="outline" className="w-full">
          <Printer className="mr-2 h-4 w-4" />
          Export as PDF
        </Button>
        <ViewCounter />
      </div>
    </header>
  );
}
