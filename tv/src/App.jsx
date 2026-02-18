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
        <span>🔍</span>
        <span>🚬</span>
        <span>🔎</span>
        <span>🌿</span>
        <span>🔍</span>
        <span>💨</span>
        <span>🔎</span>
        <span>🚬</span>
        <span>🔍</span>
        <span>🌿</span>
      </div>
      <div className="celebration-container">
        <img
          src="https://media.licdn.com/dms/image/v2/C5603AQGNbPBNco_mdg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1596957547849?e=1773273600&v=beta&t=nKILSAB4AbTsgbd9Vokx9G-a_G0uNCB059E-5lHZ8aE"
          alt="Celebration"
          className="celebration-image"
        />
        <h1>🔍 Found It! 🚬</h1>
        <p className="subtitle">Searching for Tobacco... Success!</p>
      </div>
    </div>
  );
}

export default App
