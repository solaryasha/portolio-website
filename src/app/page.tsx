import IntroductionCard from '@/components/introduction-card'
import WorkIntroductionSection from '@/components/work-introduction-section';

export default function Page() {
  return <div className='max-w-5xl'>
    <div className='w-2xl m-auto'>
      <IntroductionCard />
      <WorkIntroductionSection />
    </div>
  </div>;
}

