import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-NZ', {
    timeZone: "Pacific/Auckland",
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-page border-b border-navbar-line px-8 py-4 flex justify-center md:justify-between items-center">
      <Link to="/" className="hidden md:block text-lastname font-script text-2xl">emma te miha.</Link>

      <ul className="flex gap-4 md:gap-8 justify-center items-center">
        <li><Link to="/" className="text-navbar-text hover:text-firstname transition-colors duration-200 text-md">home</Link></li>
        <li><Link to="/projects" className="text-navbar-text hover:text-firstname transition-colors duration-200 text-md">projects</Link></li>
        <li><Link to="/experience" className="text-navbar-text hover:text-firstname transition-colors duration-200 text-md">experience</Link></li>
        <li><a href="/emma-cv.pdf" target="_blank" rel="noopener noreferrer" className="text-navbar-text hover:text-firstname transition-colors duration-200 text-md">cv</a></li>
      </ul>

      <div className="text-roles text-right text-sm hidden md:block">
        NZT {formattedTime}
      </div>
    </nav>
  )
}