import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-purple-100 py-8 mt-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 text-purple-800 font-medium mb-4">
          <span>Feito com</span>
          <Heart className="text-red-500 fill-current" size={16} />
          <span>para todos os apaixonados</span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-purple-600 mb-6">
          <Link to="/" className="hover:text-purple-800 transition-colors">
            Calculadora
          </Link>
          <span>•</span>
          <Link to="/bodas-de-casamento" className="hover:text-purple-800 transition-colors">
            Bodas de Casamento
          </Link>
          <span>•</span>
          <Link to="/ideias-presente-namoro" className="hover:text-purple-800 transition-colors">
            Ideias de Presente
          </Link>
          <span>•</span>
          <Link to="/dia-dos-namorados" className="hover:text-purple-800 transition-colors">
            Dia dos Namorados
          </Link>
          <span>•</span>
          <Link to="/politica-de-privacidade" className="hover:text-purple-800 transition-colors">
            Política de Privacidade
          </Link>
        </div>

        <div className="mb-6">
          <p className="text-sm font-semibold text-purple-700 mb-3">Confira meus outros sites:</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a
              href="https://meutipodepele.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800 hover:underline transition-colors"
            >
              Descubra seu tipo de pele
            </a>
            <span className="text-purple-300">•</span>
            <a
              href="https://semanasdegravidez.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800 hover:underline transition-colors"
            >
              Calculadora gestacional
            </a>
            <span className="text-purple-300">•</span>
            <a
              href="https://rituaisdebanho.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800 hover:underline transition-colors"
            >
              Dicas de rotina de banho
            </a>
          </div>
        </div>

        <p className="text-sm text-purple-500">
          © {new Date().getFullYear()} Calculadora de Namoro. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
