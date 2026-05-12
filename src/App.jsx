import Header from './components/Header.jsx'
import CalculadoraNamoro from './components/CalculadoraNamoro.jsx'
import BannerAfiliado from './components/BannerAfiliado.jsx'
import ContadorDiaDosNamorados from './components/ContadorDiaDosNamorados.jsx'
import ConteudoExpandido from './components/ConteudoExpandido.jsx'
import ConteudoSEO from './components/ConteudoSEO.jsx'
import Footer from './components/Footer.jsx'
import bannerBoticario from './assets/diadosnamoradosboti.png'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-25 to-orange-50">
      <Header />

      <main className="py-8">
        {/* Banner de Afiliado - ACIMA da calculadora */}
        <section className="max-w-4xl mx-auto px-6 mb-8">
          <BannerAfiliado />
        </section>

        {/* Calculadora Principal */}
        <section className="mb-8">
          <CalculadoraNamoro />
        </section>

        {/* Banner O Boticário - ABAIXO da calculadora */}
        <section className="max-w-2xl mx-auto px-6 mb-8">
          <a
            href="https://meli.la/1m8H4zb"
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

        {/* Conteúdo SEO existente (bodas, datas pelo mundo) */}
        <section>
          <ConteudoSEO />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
