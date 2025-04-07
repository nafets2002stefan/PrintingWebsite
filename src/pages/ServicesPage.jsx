import React from 'react'
import Services from '../components/Services'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ServicesPage() {
  return (
    <main className='relative min-h-screen overflow-x-hidden'>
        <Navbar/>
        <Services/>
        <Footer/>
    </main>
  )
}

export default ServicesPage