import { Flame } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card.jsx'
import bannerImage from '../assets/COMPREAQUI.png'

const BannerAfiliado = () => {
  return (
    <Card className="bg-gradient-to-r from-orange-100 to-pink-100 border-2 border-orange-300 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Flame className="text-orange-600" size={28} />
            <h3 className="text-2xl font-bold text-orange-800">
              Para sair da rotina
            </h3>
            <Flame className="text-orange-600" size={28} />
          </div>
          
          <div className="bg-white rounded-lg p-4 border-2 border-orange-300 hover:border-orange-400 transition-colors duration-300">
            <a 
              href="https://s.shopee.com.br/3VZAPHATjV" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:opacity-90 transition-opacity duration-300"
            >
              <img 
                src={bannerImage} 
                alt="Compre Aqui - Para sair da rotina" 
                className="w-full h-auto max-w-md mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </a>
          </div>
          
          <p className="text-sm text-orange-600 mt-3 italic">
            * Clique na imagem para conhecer produtos especiais
          </p>
        </div>
      </CardContent>
    </Card>
   )
}

export default BannerAfiliado
