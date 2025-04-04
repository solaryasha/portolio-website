import AboutMeHeader from './about-me-header';
import HowIGotHereSection from './how-i-got-here-section';
import TimelineSection from './timeline-section';

export default function Page() {
  return (
    <div className='max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10'>
      <AboutMeHeader />
      <hr className='my-4 sm:my-6' />
      <TimelineSection />
      <HowIGotHereSection />
    </div>
  );
}