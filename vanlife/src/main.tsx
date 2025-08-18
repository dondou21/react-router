
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home.tsx'
import Van from './Van.tsx'
import About  from './About.tsx'
import "../server.js"
import './index.css'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <div className='page-container'>
      <nav>
        <Link className='site-logo' to="/">#VANLIFE</Link>
        <div className='link'>
          <Link className='link-items' to="/about">About</Link>
          <Link className='link-items' to="/van">Vans</Link>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/van' element={<Van />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
      <footer>
        <h2>© 2022 #VANLIFE</h2>
      </footer>
  </div>

    
  </BrowserRouter>
)
