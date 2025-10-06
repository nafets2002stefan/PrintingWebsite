import './App.css'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, useParams } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import ServicesPage from './pages/ServicesPage'
import Layout from './components/Layout'
import ContactsPage from './pages/ContactsPage'
import FAQPage from './pages/FAQPage'
import SEO from './components/SEO'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function LanguageWrapper() {
  const { lang } = useParams()
  const { i18n } = useTranslation()

  useEffect(() => {
    if (lang && ['ro', 'en', 'ru'].includes(lang)) {
      i18n.changeLanguage(lang)
      localStorage.setItem('language', lang)
    }
  }, [lang, i18n])

  return null
}

function SEOHandler() {
  const { pathname } = useLocation()

  const getPageName = () => {
    const path = pathname.replace(/^\/(ro|en|ru)/, '')
    if (path === '/' || path === '') return 'home'
    if (path === '/products') return 'products'
    if (path === '/services') return 'services'
    if (path === '/questions') return 'questions'
    if (path === '/contacts') return 'contacts'
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
        {/* Redirect root to /ro (Romanian default) */}
        <Route path='/' element={<Navigate to="/ro" replace />} />

        {/* Language-prefixed routes */}
        <Route path='/:lang' element={<><LanguageWrapper /><Layout /></>}>
          <Route index element={<HomePage/>}/>
          <Route path='products' element={<ProductsPage/>}/>
          <Route path='services' element={<ServicesPage/>}/>
          <Route path='questions' element={<FAQPage/>}/>
          <Route path='contacts' element={<ContactsPage/>}/>
        </Route>

        {/* Fallback redirect */}
        <Route path='*' element={<Navigate to="/ro" replace />} />
      </Routes>
    </Router>
  )
}

export default App

