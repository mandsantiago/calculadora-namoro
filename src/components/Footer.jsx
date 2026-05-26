import { Heart } from 'lucide-react'

const Footer = ({ setPaginaAtual }) => {
  return (
    <footer className="bg-white border-t border-purple-100 py-8 mt-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 text-purple-800 font-medium mb-4">
          <span>Feito com</span>
          <Heart className="text-red-500 fill-current" size={16} />
          <span>para todos os apaixonados</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm text-purple-600 mb-4">
          <button 
            onClick={() => setPaginaAtual('home')}
            className="hover:text-purple-800 transition-colors"
          >
            Calculadora
          </button>
          <span>•</span>
          <button 
            onClick={() => setPaginaAtual('politica')}
            className="hover:text-purple-800 transition-colors"
          >
            Política de Privacidade
          </button>
        </div>

        <p className="text-sm text-purple-500">
          © {new Date().getFullYear()} Calculadora de Namoro. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
