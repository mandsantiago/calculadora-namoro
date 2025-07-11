import Header from './components/Header.jsx'
import CalculadoraNamoro from './components/CalculadoraNamoro.jsx'
import BannerAfiliado from './components/BannerAfiliado.jsx'
import ConteudoSEO from './components/ConteudoSEO.jsx'
import Footer from './components/Footer.jsx'
import { ExternalLink, Heart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card.jsx'
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

        {/* Destaque Numerologia do Casal - ABAIXO da calculadora */}
        <section className="max-w-4xl mx-auto px-6 mb-12">
          <Card className="bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-300 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Heart className="text-purple-600 animate-pulse" size={28} />
                  <h3 className="text-2xl font-bold text-purple-800">
                    Descubra Mais Sobre Vocês!
                  </h3>
                  <Heart className="text-purple-600 animate-pulse" size={28} />
                </div>
                
                <p className="text-purple-700 mb-6 text-lg">
                  Confira tudo sobre a numerologia do casal
                </p>
                
                <a 
                  href="https://www.numerologiadocasal.com.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>Descobrir Numerologia do Casal</span>
                  <ExternalLink size={20} />
                </a>
                
                <p className="text-sm text-purple-600 mt-4 italic">
                  ✨ Entenda a compatibilidade através dos números ✨
                </p>
              </div>
            </CardContent>
          </Card>
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

