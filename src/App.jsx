import './App.css'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import ServicesPage from './pages/ServicesPage'
import Layout from './components/Layout'
function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/products' element={<ProductsPage/>}/>
          <Route path='/services' element={<ServicesPage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App

