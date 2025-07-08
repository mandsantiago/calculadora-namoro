import { Heart, Calendar, Sparkles } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 to-orange-600 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="text-red-300" size={24} />
            <span className="text-xl font-semibold">Calculadora de Namoro</span>
            <Heart className="text-red-300" size={24} />
          </div>
          <p className="text-purple-200 mb-4">
            Celebre cada momento especial do seu relacionamento
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-purple-300">
            <div className="flex items-center space-x-1">
              <Calendar size={16} />
              <span>Data de Namoro</span>
            </div>
            <div className="flex items-center space-x-1">
              <Sparkles size={16} />
              <span>Bodas de Casamento</span>
            </div>
            <div className="flex items-center space-x-1">
              <Heart size={16} />
              <span>Amor Verdadeiro</span>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-purple-400 text-purple-300 text-sm">
            © 2025 Calculadora de Namoro. Feito com ❤️ para casais apaixonados.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

