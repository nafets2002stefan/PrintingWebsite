import React from 'react'
import Products from '../components/Products'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ProductsPage() {
  return (
    <main className='relative min-h-screen overflow-x-hidden'>
        <Navbar/>
        <Products/>
        <Footer/>
    </main>
  )
}

export default ProductsPage