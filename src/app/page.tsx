import { resumeData } from '@/lib/resume-data';
import { DashboardHeader } from '@/components/dashboard-header';
import { PersonalInfoCard } from '@/components/personal-info-card';
import { EducationCard } from '@/components/education-card';
import { CareerPathCard } from '@/components/career-path-card';
import { SkillsCard } from '@/components/skills-card';
import { ExperienceCard } from '@/components/experience-card';
import { ProjectsCard } from '@/components/projects-card';
import { AchievementsCard } from '@/components/achievements-card';

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-screen-2xl">
        <DashboardHeader name={resumeData.name} />
        <main className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-4 xl:col-span-3">
            <PersonalInfoCard
              contact={resumeData.contact}
              socials={resumeData.socials}
            />
            <EducationCard education={resumeData.education} />
            <CareerPathCard resumeContent={resumeData.fullText} />
          </div>
          <div className="space-y-6 lg:col-span-8 xl:col-span-9">
            <SkillsCard skills={resumeData.skills} />
            <ExperienceCard experience={resumeData.experience} />
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
