import React from 'react'
import './App.css'

// Appcircle distribution links
const links = [
  {
    id: 1,
    label: 'UAT - iOS & Android (GMS)',
    url: 'https://testdist.albarakatech.com/Login?profileId=00f043e1-e362-4f1d-a9c2-e20be6a5bc64',
    description: 'Test environment for iOS and Android with Google Mobile Services'
  },
  {
    id: 2,
    label: 'UAT - Android (HMS)',
    url: 'https://testdist.albarakatech.com/Login?profileId=bf3cfd35-4edb-4928-a43e-48260d7940d3',
    description: 'Test environment for Android with Huawei Mobile Services'
  },
  {
    id: 3,
    label: 'PILOT - iOS & Android (GMS)',
    url: 'https://testdist.albarakatech.com/Login?profileId=431d5d76-ebcd-4225-b047-3f51decbc482',
    description: 'Pilot environment for iOS and Android with Google Mobile Services'
  },
  {
    id: 4,
    label: 'PILOT - Android (HMS)',
    url: 'https://testdist.albarakatech.com/Login?profileId=50f35f69-d4ee-43c6-a8f0-43677b2dbffb',
    description: 'Pilot environment for Android with Huawei Mobile Services'
  },
  {
    id: 5,
    label: 'DEVELOPER - iOS & Android (GMS)',
    url: 'https://testdist.albarakatech.com/Login?profileId=eb17ced1-40bb-49ee-bf9d-41a2cc31d343',
    description: 'Development environment for iOS and Android with Google Mobile Services'
  },
  {
    id: 6,
    label: 'DEVELOPER - Android (HMS)',
    url: 'https://testdist.albarakatech.com/Login?profileId=44e332a4-2769-4425-acfa-f3fe749e19a8',
    description: 'Development environment for Android with Huawei Mobile Services'
  }
]

function App() {
  return (
    <div className="app">
      <main className="container">
        {/* Profile Section */}
        <header className="profile-section">

          <h1 className="title">Albaraka Appcircle</h1>
          <p className="subtitle">
            Mobil uygulama dağıtım ortamları. Test, pilot ve geliştirme sürümlerine buradan erişebilirsiniz.
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
          <p>&copy; 2024 Albaraka Teknoloji. Tüm hakları saklıdır.</p>
        </footer>
      </main>
    </div>
  )
}

export default App