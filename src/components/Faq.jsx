import { useState } from 'react'
import { Heart, ChevronDown, ChevronUp } from 'lucide-react'

const ItemFAQ = ({ pergunta, resposta }) => {
  const [aberto, setAberto] = useState(false)
  return (
    <div
      className={`bg-white border rounded-xl overflow-hidden transition-shadow duration-200 ${aberto ? 'border-purple-300 shadow-md' : 'border-pink-100'}`}
    >
      <button
        onClick={() => setAberto(!aberto)}
        className="w-full flex items-center gap-3 px-5 py-4 text-left font-semibold text-gray-800 hover:bg-pink-50 transition-colors"
      >
        <Heart size={14} className="text-pink-400 flex-shrink-0" />
        <span className="flex-1 text-sm md:text-base">{pergunta}</span>
        {aberto ? (
          <ChevronUp size={18} className="text-purple-400 flex-shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-purple-400 flex-shrink-0" />
        )}
      </button>
      {aberto && (
        <div className="px-5 pb-4 pl-10 text-gray-500 text-sm leading-relaxed">
          {resposta}
        </div>
      )}
    </div>
  )
}

/**
 * FAQ reutilizável entre páginas. Cada página passa apenas as perguntas
 * relevantes ao seu próprio tema (ver src/data/faqs.js) — o schema JSON-LD
 * correspondente é gerado à parte, pelo componente <Seo faqs={...} />, usando
 * a mesma lista, para que o texto visível e os dados estruturados nunca
 * fiquem dessincronizados.
 */
const Faq = ({ titulo = 'Perguntas Frequentes', subtitulo, items }) => (
  <section className="py-12 border-t border-pink-100">
    <div className="max-w-3xl mx-auto px-6">
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-purple-900 mb-2">{titulo}</h2>
      {subtitulo && <p className="text-gray-500 mb-8">{subtitulo}</p>}
      <div className="flex flex-col gap-3">
        {items.map((f, i) => (
          <ItemFAQ key={i} pergunta={f.pergunta} resposta={f.resposta} />
        ))}
      </div>
    </div>
  </section>
)

export default Faq
