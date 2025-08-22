
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.tsx'
import Van from './Van.tsx'
import VanDetail from './VanDetail.tsx'
import About  from './About.tsx'
import Layout from './components/Layout.tsx'
import HostLayout from './components/HostLayout.tsx'
import Dashboard from './Dashboard.tsx'
import "../server.js"
import './index.css'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <div className='page-container'>
      
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/van' element={<Van />} />
            <Route path='/van/:id' element={<VanDetail />} />
          </Route>

          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />

          </Route>
        </Routes>


  </div>

    
  </BrowserRouter>
)
