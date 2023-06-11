import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import LearningCenter from './pages/LearningCenter'
import OriginalSeries from './pages/OriginalSeries'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/learning-center" element={<LearningCenter/>} />
          <Route path="/original-series" element={<OriginalSeries/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
