import React, { useState, useEffect } from 'react'

const links = ['about', 'experience', 'projects', 'contact']

export default function Navbar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-NZ', {
    timeZone: "Pacific/Auckland",
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-page border-b border-navbar-line px-8 py-4 flex justify-center md:justify-between items-center">
      <div className="text-lastname font-script text-2xl hidden md:block">emma.</div>
      <ul className="flex gap-8 text-navbar-text flex justify-center items-center">
        {links.map(link => (
          <li key={link}>
            <a
              href={`#${link}`}
              onClick={(e) => handleClick(e, link)}
              className="text-navbar-text hover:text-firstname transition-colors duration-200"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div className="text-roles text-right text-sm hidden md:block">
        NZT {formattedTime}
      </div>
    </nav>
  )
}