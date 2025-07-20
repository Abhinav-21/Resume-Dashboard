'use client';

import { Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';

type DashboardHeaderProps = {
  name: string;
};

export function DashboardHeader({ name }: DashboardHeaderProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="mb-6 flex flex-col items-start justify-between gap-4 border-b border-border pb-4 sm:flex-row sm:items-center print-hidden">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight text-primary">
          Resume Insights Dashboard
        </h1>
        <p className="text-muted-foreground">{name}</p>
      </div>
      <Button onClick={handlePrint} variant="outline" className="shrink-0">
        <Printer className="mr-2 h-4 w-4" />
        Export as PDF
      </Button>
    </header>
  );
}
