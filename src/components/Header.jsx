import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'

// Observação de SEO: este cabeçalho aparece em todas as páginas, então o nome
// do site aqui NÃO é um <h1> — cada página define o seu próprio h1 (o Google
// espera um único h1 por página, descrevendo o assunto daquela página
// especificamente, não a marca do site inteiro).
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white py-6 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <Link to="/" className="flex items-center justify-center space-x-3 no-underline">
          <Heart className="text-red-200 animate-pulse" size={32} />
          <span className="text-3xl md:text-4xl font-bold text-center text-white">
            Calculadora de Namoro
          </span>
          <Heart className="text-red-200 animate-pulse" size={32} />
        </Link>
        <p className="text-center text-purple-100 mt-2 text-lg">
          Descubra há quanto tempo vocês estão juntos e celebrem cada momento especial
        </p>
      </div>
    </header>
  )
}

export default Header

