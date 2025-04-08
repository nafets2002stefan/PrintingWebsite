import CompanyLogo from '../components/CompanyLogo'
import Hero from '../components/Hero'
import FeaturesSection from '../components/FeaturesSection'

const HomePage = () => {
    return (
        <main className='relative min-h-screen overflow-x-hidden default-bg'>
          <div className='overflow-hidden'>
            <Hero/>
            <CompanyLogo/>
            <FeaturesSection/>
          </div>
        </main>
      )
}

export default HomePage