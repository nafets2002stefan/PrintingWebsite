import FeaturesSection from '../components/FeaturesSection'
import Carousel from '../components/Carousel'
import Testimonial from '../components/Testimonial'

const HomePage = () => {

    return (
        <main className='relative min-h-screen overflow-x-hidden default-bg'>
          <div className='overflow-hidden mt-30'>
              <Carousel autoSlide={true}/>
            <FeaturesSection/>
            <Testimonial/>
          </div>
        </main>
      )
}

export default HomePage