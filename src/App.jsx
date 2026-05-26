import Header from './components/Header.jsx'
import CalculadoraNamoro from './components/CalculadoraNamoro.jsx'
import ContadorDiaDosNamorados from './components/ContadorDiaDosNamorados.jsx'
import ConteudoExpandido from './components/ConteudoExpandido.jsx'
import ConteudoSEO from './components/ConteudoSEO.jsx'
import Footer from './components/Footer.jsx'
import CookieBanner from './components/CookieBanner.jsx'
import PoliticaPrivacidade from './components/PoliticaPrivacidade.jsx'
import { useState } from 'react'
import bannerBoticario from './assets/diadosnamoradosboti.png'
import bannerFloresNamo from './assets/bannerfloresnamo.webp'
import './App.css'

function App() {
  const [paginaAtual, setPaginaAtual] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-25 to-orange-50">
      {/* Header removido temporariamente ou não encontrado */}

      <main className="py-8">
        {paginaAtual === 'politica' ? (
          <PoliticaPrivacidade />
        ) : (
          <>
        {/* Banner Giuliana Flores - ACIMA da calculadora */}
        <section className="max-w-2xl mx-auto px-6 mb-8">
          <a
            href="https://www.awin1.com/cread.php?awinmid=109198&awinaffid=1273723&platform=dl&ued=https%3A%2F%2Fwww.giulianaflores.com.br%2Ftipos-de-flores%2Frosas%2Fd1139%2F%3Fsrcb%3DSrosas59"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:opacity-95"
          >
            <img
              src={bannerFloresNamo}
              alt="Rosas - Beleza e afeto em uma escolha especial!"
              className="w-full h-auto block"
            />
          </a>
        </section>

        {/* Calculadora Principal */}
        <section className="mb-8">
          <CalculadoraNamoro />
        </section>

        {/* Banner O Boticário - ABAIXO da calculadora */}
        <section className="max-w-2xl mx-auto px-6 mb-8">
          <a
            href="https://meli.la/1oqucF2"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:opacity-95"
          >
            <img
              src={bannerBoticario}
              alt="Presenteie seu amor com O Boticário"
              className="w-full h-auto block"
            />
          </a>
        </section>

        {/* Contador Dia dos Namorados */}
        <section className="max-w-4xl mx-auto px-6 mb-8">
          <ContadorDiaDosNamorados />
        </section>

        {/* Conteúdo Expandido: Introdução, Como Usar, FAQ e Ideias de Comemoração */}
        <section className="px-4">
          <ConteudoExpandido />
        </section>

        {/* Conteúdo SEO: Datas do Amor e Curiosidades */}
        <section className="max-w-4xl mx-auto px-6 mb-8">
          <ConteudoSEO />
        </section>
          </>
        )}
      </main>

      <Footer setPaginaAtual={setPaginaAtual} />
      <CookieBanner setPaginaAtual={setPaginaAtual} />
    </div>
  )
}

export default App
