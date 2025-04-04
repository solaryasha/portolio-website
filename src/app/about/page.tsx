import AboutMeHeader from './about-me-header';
import HowIGotHereSection from './how-i-got-here-section';
import TimelineSection from './timeline-section';

export default function Page() {
  return (
    <div className='w-2xl mx-auto py-10'>
      <AboutMeHeader />
      <hr className='my-6'/>
      <TimelineSection />
      <HowIGotHereSection />
    </div>
  );
}