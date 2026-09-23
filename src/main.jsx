import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

// As páginas são pré-renderizadas em build (veja scripts/prerender-seo.mjs):
// cada rota já sai do servidor com o <title>, meta description, canonical,
// Open Graph e JSON-LD corretos no HTML puro, para que ferramentas que não
// executam JavaScript (crawlers de SEO, por exemplo) vejam a informação certa
// mesmo sem rodar nada. Uma vez que o JavaScript roda, porém, o
// react-helmet-async assume essas mesmas tags para atualizá-las conforme a
// pessoa navega pelo site sem recarregar a página. Sem esta limpeza, as tags
// estáticas ficariam para sempre presas no <head> e o título da aba do
// navegador nunca acompanharia a navegação entre páginas — por isso removemos
// as versões estáticas ANTES do React montar, para que o Helmet comece de um
// <head> limpo e seja a única fonte a partir daqui.
function limparTagsPreRenderizadas() {
  const seletores = [
    'title',
    'meta[name="description"]',
    'link[rel="canonical"]',
    'meta[property^="og:"]',
    'script[type="application/ld+json"]',
  ]
  document.head.querySelectorAll(seletores.join(', ')).forEach((el) => el.remove())
}
limparTagsPreRenderizadas()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
