import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Destinations from './components/Destinations/Destinations';
import Search from './components/Search/Search';
import Selects from './components/Selects/Selects';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Ripple effect handler for background
  const handleBgClick = (e) => {
    // Only trigger if clicking directly on the background (not a child)
    if (e.target.id !== 'global-bg') return;
    const x = e.clientX;
    const y = e.clientY;
    const key = Date.now();
    setRipples((prev) => [...prev, { x, y, key }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.key !== key));
    }, 600);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
        <div className="relative flex items-center justify-center mb-6">
          <div className="animate-spin-slow scale-110 shadow-lg rounded-full h-24 w-24 border-8 border-t-transparent border-b-transparent border-l-blue-500 border-r-pink-500 bg-white" style={{ boxShadow: '0 4px 24px 0 rgba(80, 80, 200, 0.15)' }}></div>
          <div className="absolute text-3xl font-bold text-blue-500" style={{ fontFamily: 'Poppins, sans-serif' }}>
            🌴
          </div>
        </div>
        <span className="text-2xl font-semibold text-gray-700 tracking-wide" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Loading your paradise...
        </span>
        <style>{`
          @keyframes spin-slow {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.08); }
            100% { transform: rotate(360deg) scale(1); }
          }
          .animate-spin-slow {
            animation: spin-slow 1.2s linear infinite;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div id="global-bg" className="relative min-h-screen bg-white" onClick={handleBgClick} style={{ minHeight: '100vh' }}>
      {/* Global Ripple Effect */}
      {ripples.map((ripple) => (
        <span
          key={ripple.key}
          className="fixed pointer-events-none ripple-global"
          style={{
            left: ripple.x - 150,
            top: ripple.y - 150,
            width: 300,
            height: 300,
          }}
        />
      ))}
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <Carousel />
      <Footer />
      <style>{`
        .ripple-global {
          background: radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.10) 60%, transparent 100%);
          border-radius: 50%;
          transform: scale(0);
          animation: ripple-global-anim 600ms linear forwards;
          z-index: 40;
        }
        @keyframes ripple-global-anim {
          to {
            transform: scale(2.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
