import Hero from '../components/Hero'
import FeaturesSection from '../components/FeaturesSection'
import Carousel from '../components/Carousel'
import slider1Image from '../assets/slider-main/slider1.png'
import slider2Image from '../assets/slider-main/slider2.png'
import slider3Image from '../assets/slider-main/slider3.png'
import slider4Image from '../assets/slider-main/slider4.png'
import slider5Image from '../assets/slider-main/slider5.png'

const slides = [
  {
    image: slider1Image,
    text: "Accesability"
  }, 
  {
    image: slider2Image,

    text: "Fast & Reliable"
  }, 
  {
    image: slider3Image,
    text: "Premium Quality"
  }, 
  {
    image: slider4Image,
    text: "Custom Orders"
  }, {
    image: slider5Image,
    text: "AHA"
  }
]

const HomePage = () => {
    return (
        <main className='relative min-h-screen overflow-x-hidden default-bg'>
          <div className='overflow-hidden'>
            <Hero/>
              <Carousel autoSlide={true}>
                {slides}
              </Carousel>
            <FeaturesSection/>
          </div>
        </main>
      )
}

export default HomePage