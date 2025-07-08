import { Heart, Calendar } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white py-6 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-3">
          <Heart className="text-red-200 animate-pulse" size={32} />
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Calculadora de Namoro
          </h1>
          <Heart className="text-red-200 animate-pulse" size={32} />
        </div>
        <p className="text-center text-purple-100 mt-2 text-lg">
          Descubra há quanto tempo vocês estão juntos e celebrem cada momento especial
        </p>
      </div>
    </header>
  )
}

export default Header

