import IntroductionCard from '@/components/introduction-card'
import ProjectsSection from '@/components/projects-section';
import WorkIntroductionSection from '@/components/work-introduction-section';

export default function Page() {
  return <div className='max-w-5xl'>
    <div className='w-2xl m-auto'>
      <IntroductionCard />
      <WorkIntroductionSection />
      <ProjectsSection />
    </div>
  </div>;
}

