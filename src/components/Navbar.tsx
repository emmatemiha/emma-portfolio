import React from 'react'

const links = ['home', 'experience', 'projects', 'contact']

export default function Navbar() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream border-b border-burgundy/20 px-8 py-4 flex justify-between items-center">
      <span className="font-semibold text-burgundy tracking-wide"></span> {/*remove*/}
      <ul className="flex gap-8">
        {links.map(link => (
          <li key={link}>
            <a
              href={`#${link}`}
              onClick={(e) => handleClick(e, link)}
              className="capitalize text-dark hover:text-burgundy transition-colors duration-200"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}