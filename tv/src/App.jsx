import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import './App.css'

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
      <div className="floating-words">
        <span>such PARTY!</span>
        <span>such YOLO</span>
        <span>such LIT 🔥</span>
        <span>such LEGEND</span>
        <span>such VIBES</span>
        <span>such SLAY</span>
        <span>such EPIC</span>
        <span>such BOSS</span>
      </div>
      <div className="chase-container">
        <img
          src="/images/image.png"
          alt="Running away"
          className="running-image"
        />
        <div className="speech-bubble runner-bubble">Ho kaun aap?!</div>
        <img
          src="/images/image2.png"
          alt="Chasing"
          className="chasing-image"
        />
        <div className="speech-bubble chaser-bubble">Mujhe v US citizenship dila de?</div>
      </div>
      <h1>🎂 Happy Birthday! 🌿</h1>
      <p className="subtitle">Aaj mera janam din hai, mujhe mubaarak baad dijiye!</p>
    </div>
  );
}

export default App
