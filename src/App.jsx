import React from 'react'
import './App.css'

// Array of links to display on the page
const links = [
  {
    id: 1,
    label: 'Home',
    url: 'https://example.com',
    description: 'My personal website'
  },
  {
    id: 2,
    label: 'Blog',
    url: 'https://example.com/blog',
    description: 'Latest thoughts and articles'
  },
  {
    id: 3,
    label: 'Projects',
    url: 'https://example.com/projects',
    description: 'Portfolio and work samples'
  },
  {
    id: 4,
    label: 'Resume',
    url: 'https://example.com/resume',
    description: 'Professional experience'
  },
  {
    id: 5,
    label: 'Contact',
    url: 'mailto:you@example.com',
    description: 'Get in touch'
  },
  {
    id: 6,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com',
    description: 'Professional network'
  },
  {
    id: 7,
    label: 'GitHub',
    url: 'https://github.com',
    description: 'Code repositories'
  }
]

function App() {
  return (
    <div className="app">
      <main className="container">
        {/* Profile Section */}
        <header className="profile-section">
          {/* Avatar placeholder - could be replaced with an actual image */}
          <div className="avatar" role="img" aria-label="Profile picture">
            <span className="avatar-text">AF</span>
          </div>
          
          <h1 className="title">Ali Fırat</h1>
          <p className="subtitle">
            Developer, creator, and tech enthusiast. Find all my important links below.
          </p>
        </header>

        {/* Links Section */}
        <section className="links-section">
          <h2 className="visually-hidden">Quick Links</h2>
          <nav className="links-container" role="navigation" aria-label="External links">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.url}
                className="link-item"
                target="_blank"
                rel="noopener noreferrer"
                aria-describedby={`desc-${link.id}`}
              >
                <span className="link-label">{link.label}</span>
                <span 
                  id={`desc-${link.id}`}
                  className="link-description"
                >
                  {link.description}
                </span>
              </a>
            ))}
          </nav>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2024 Ali Fırat. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}

export default App