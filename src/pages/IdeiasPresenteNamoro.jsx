import { Link } from 'react-router-dom'
import { Calculator } from 'lucide-react'
import Seo from '@/components/Seo.jsx'
import Faq from '@/components/Faq.jsx'
import { marcos } from '@/data/ideiasMarcos.js'
import { faqsIdeias } from '@/data/faqs.js'

const IdeiasPresenteNamoro = () => (
  <div className="max-w-4xl mx-auto px-4 py-8">
    <Seo
      path="/ideias-presente-namoro"
      title="Ideias de Presente e Comemoração por Marco de Namoro | Calculadora de Namoro"
      description="Ideias de presente e comemoração para cada marco do relacionamento: 1 mês, 6 meses, 1 ano, 5 anos, 25 anos e 50 anos de namoro ou casamento."
      faqs={faqsIdeias}
    />

    <div className="bg-white rounded-3xl shadow-sm border border-pink-100 overflow-hidden mb-8">
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-purple-900 mb-2">
            Ideias de Comemoração por Marco
          </h1>
          <p className="text-gray-500 mb-8">
            Cada fase do relacionamento merece ser celebrada do seu jeito. Veja sugestões de presentes e comemorações para cada momento especial:
          </p>
          <div className="flex flex-col gap-4">
            {marcos.map((m, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row items-start gap-4 bg-white border border-pink-100 rounded-2xl p-5 hover:translate-x-1 hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 min-w-[80px] text-center bg-pink-50 rounded-xl py-3 px-2">
                  <span className="text-3xl block">{m.emoji}</span>
                  <span className="text-[0.7rem] font-bold text-purple-800 uppercase tracking-wide mt-1 block">{m.label}</span>
                </div>
                <div>
                  <h2 className="font-semibold text-purple-800 mb-1">{m.titulo}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">
                    {m.descricao}
                    {m.linkPerfume && (
                      <>
                        {' '}Que tal presentear com um{' '}
                        <a href={m.linkPerfume} target="_blank" rel="noopener noreferrer" className="text-purple-600 underline hover:text-pink-500 font-semibold">
                          perfume especial
                        </a>
                        ?
                      </>
                    )}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(m.tagLinks || []).map((tl, j) => (
                      <a
                        key={`link-${j}`}
                        href={tl.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full border border-purple-200 hover:bg-purple-200 transition-colors"
                      >
                        {tl.texto}
                      </a>
                    ))}
                    {(m.tags || []).map((t, j) => (
                      <span key={`tag-${j}`} className="bg-pink-50 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full border border-pink-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq
        titulo="Perguntas sobre presentes e comemorações"
        items={faqsIdeias}
      />
    </div>

    <div className="text-center mb-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 py-3 px-6 rounded-xl text-white font-semibold no-underline transition-opacity hover:opacity-90"
        style={{ background: 'linear-gradient(90deg, #8B3FBF, #E8642B)' }}
      >
        <Calculator size={18} />
        Calcule há quanto tempo vocês estão juntos
      </Link>
    </div>
  </div>
)

export default IdeiasPresenteNamoro
