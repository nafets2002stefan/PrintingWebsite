import './App.css'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
      </Routes>
    </Router>
  )
}

export default App

