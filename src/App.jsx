import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import LearningCenter from './pages/LearningCenter'
import OriginalSeries from './pages/OriginalSeries'
import Profile from './pages/Profile'
import BackgroundImg from './assets/background.jpg'
import Navbar from './components/Navbar'
import axios from 'axios'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [avatarLetter, setAvatarLetter] = useState("")

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      axios({
        url: 'http://localhost:3000/user',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        if (res.data.success) {
          setAvatarLetter(res.data.data.username.charAt(0).toUpperCase());
          setIsLoggedIn(true)
        }
      })
    }
  }, [])

  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        // overflow: 'hidden',
        color: 'white'
      }}
    >
      <BrowserRouter>
        <Navbar
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          avatarLetter={avatarLetter}
          setAvatarLetter={setAvatarLetter}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/learning-center" element={<LearningCenter />} />
          <Route path="/original-series" element={<OriginalSeries />} />
          <Route
            path="/profile"
            element={
              <Profile
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                avatarLetter={avatarLetter}
                setAvatarLetter={setAvatarLetter}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
