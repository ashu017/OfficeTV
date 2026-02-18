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
      <div className="celebration-container">
        <img
          src="https://badgephotos.corp.amazon.com/?fullsizeimage=1&give404ifmissing=1&uid=mtanishq&quot"
          alt="Celebration"
          className="celebration-image"
        />
        <h1>🎉 Celebration! 🎉</h1>
      </div>
    </div>
  );
}

export default App
