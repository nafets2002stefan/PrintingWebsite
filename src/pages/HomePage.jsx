import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import StatsSection from '../components/StatsSection'
import ProcessTimeline from '../components/ProcessTimeline'
import Testimonial from '../components/Testimonial'
import CTABanner from '../components/CTABanner'

const HomePage = () => {

    return (
        <main className='relative min-h-screen overflow-x-hidden default-bg'>
          <div className='overflow-hidden'>
            <HeroSection />
            <FeaturesSection/>
            <StatsSection />
            <ProcessTimeline />
            <Testimonial/>
            <CTABanner />
          </div>
        </main>
      )
}

export default HomePage