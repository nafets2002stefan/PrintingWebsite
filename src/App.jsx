import './App.css'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import ServicesPage from './pages/ServicesPage'
import Layout from './components/Layout'
import ContactsPage from './pages/ContactsPage'
import FAQPage from './pages/FAQPage'
import SEO from './components/SEO'
import { useEffect } from 'react'

function SEOHandler() {
  const { pathname } = useLocation()

  const getPageName = () => {
    if (pathname === '/') return 'home'
    if (pathname === '/products') return 'products'
    if (pathname === '/services') return 'services'
    if (pathname === '/questions') return 'questions'
    if (pathname === '/contacts') return 'contacts'
    return 'home'
  }

  return <SEO page={getPageName()} />
}

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

function App() {

  return (
    <Router>
      <SEOHandler />
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/products' element={<ProductsPage/>}/>
          <Route path='/services' element={<ServicesPage/>}/>
          <Route path='/questions' element={<FAQPage/>}/>
          <Route path='/contacts' element={<ContactsPage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App

