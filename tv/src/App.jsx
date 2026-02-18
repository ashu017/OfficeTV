import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import './App.css'

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  const [currentImage, setCurrentImage] = useState(() => {
    const saved = localStorage.getItem('currentImage')
    return saved || '/images/image.png'
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextImage = currentImage === '/images/image.png' ? '/images/image2.png' : '/images/image.png'
      localStorage.setItem('currentImage', nextImage)
      window.location.reload()
    }, 10000)
    return () => clearTimeout(timer)
  }, [currentImage])

  return (
    <div className="app">
      <Confetti width={windowSize.width} height={windowSize.height} />
      <div className="floating-emojis">
        <span>🎂</span>
        <span>🚬</span>
        <span>🎉</span>
        <span>🌿</span>
        <span>🎈</span>
        <span>🚬</span>
        <span>🎁</span>
        <span>🍃</span>
        <span>🎊</span>
        <span>🚬</span>
      </div>
      <div className="celebration-container">
        <img
          src={currentImage}
          alt="Celebration"
          className="celebration-image"
        />
        <h1>🎂 Happy Birthday! 🌿</h1>
        <p className="subtitle">Aaj mera janam din hai, mujhe mubaarak baad dijiye!</p>
      </div>
    </div>
  );
}

export default App
