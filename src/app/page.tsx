import IntroductionCard from '@/components/introduction-card'
import ProjectsSection from '@/components/projects-section';
import WorkIntroductionSection from '@/components/work-introduction-section';

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <IntroductionCard />
        <WorkIntroductionSection />
        <ProjectsSection />
      </div>
    </div>
  )
}

