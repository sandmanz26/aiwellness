import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import BrandGuidelinePage from './pages/BrandGuidelinePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/brand-guideline" element={<BrandGuidelinePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
