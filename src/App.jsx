import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import CookieBanner from './components/CookieBanner.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import BodasDeCasamento from './pages/BodasDeCasamento.jsx'
import IdeiasPresenteNamoro from './pages/IdeiasPresenteNamoro.jsx'
import DiaDosNamorados from './pages/DiaDosNamorados.jsx'
import PoliticaPrivacidadePage from './pages/PoliticaPrivacidadePage.jsx'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-25 to-orange-50">
      <ScrollToTop />
      <Header />

      <main className="py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bodas-de-casamento" element={<BodasDeCasamento />} />
          <Route path="/ideias-presente-namoro" element={<IdeiasPresenteNamoro />} />
          <Route path="/dia-dos-namorados" element={<DiaDosNamorados />} />
          <Route path="/politica-de-privacidade" element={<PoliticaPrivacidadePage />} />
        </Routes>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  )
}

export default App
