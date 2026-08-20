import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Sites com múltiplas páginas via React Router não voltam pro topo
 * automaticamente ao navegar (diferente de um link normal de HTML puro).
 * Este componente garante que toda troca de página comece no cabeçalho,
 * não na posição de rolagem da página anterior.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
