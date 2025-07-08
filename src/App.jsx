import Header from './components/Header.jsx'
import CalculadoraNamoro from './components/CalculadoraNamoro.jsx'
import BannerAfiliado from './components/BannerAfiliado.jsx'
import ConteudoSEO from './components/ConteudoSEO.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-25 to-orange-50">
      <Header />
      
      <main className="py-8">
        {/* Calculadora Principal */}
        <section className="mb-12">
          <CalculadoraNamoro />
        </section>

        {/* Banner de Afiliado */}
        <section className="max-w-4xl mx-auto px-6 mb-12">
          <BannerAfiliado />
        </section>

        {/* Conteúdo SEO */}
        <section>
          <ConteudoSEO />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App

