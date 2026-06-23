import React, { useState, useEffect } from 'react'

const links = ['home', 'experience', 'projects', 'contact']

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
    second: '2-digit',
    hour12: true,
  });

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream border-b border-burgundy/20 px-8 py-4 flex justify-between items-center">
      <ul className="flex gap-8 text-burgundy font-semibold">
        {links.map(link => (
          <li key={link}>
            <a
              href={`#${link}`}
              onClick={(e) => handleClick(e, link)}
              className="capitalize text-burgundy-light hover:text-burgundy transition-colors duration-200"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div className="text-burgundy-light font-mono font-semibold">
        🕔 NZT {formattedTime}
      </div>
    </nav>
  )
}