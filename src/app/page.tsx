import { resumeData } from '@/lib/resume-data';
import { DashboardHeader } from '@/components/dashboard-header';
import { EducationCard } from '@/components/education-card';
import { CareerPathCard } from '@/components/career-path-card';
import { SkillsCard } from '@/components/skills-card';
import { ExperienceCard } from '@/components/experience-card';
import { ProjectsCard } from '@/components/projects-card';
import { AchievementsCard } from '@/components/achievements-card';
import { AboutCard } from '@/components/about-card';

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-screen-2xl">
        <DashboardHeader
          name={resumeData.name}
          title="Bachelor of Technology, NIT Allahabad"
          contact={resumeData.contact}
          socials={resumeData.socials}
        />
        <main className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-4 xl:col-span-3">
            <AboutCard summary={resumeData.summary} />
            <EducationCard education={resumeData.education} />
            <CareerPathCard resumeContent={resumeData.fullText} />
          </div>
          <div className="space-y-6 lg:col-span-8 xl:col-span-9">
            <ExperienceCard experience={resumeData.experience} />
            <SkillsCard skills={resumeData.skills} />
            <ProjectsCard projects={resumeData.projects} />
            <AchievementsCard
              achievements={resumeData.achievements}
              positions={resumeData.positions}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
