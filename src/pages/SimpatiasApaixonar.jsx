import { Link } from 'react-router-dom'
import { Calculator, Clock, Sparkles } from 'lucide-react'
import Seo from '@/components/Seo.jsx'
import Faq from '@/components/Faq.jsx'
import { introducao, categorias, simpatias, dicas } from '@/data/simpatias.js'
import { faqsSimpatias } from '@/data/faqs.js'
import bannerLingerie from '@/assets/bannerlingerie.webp'
import bannerCinta from '@/assets/bannercinta.webp'

// Numeração contínua (1 a 15) na ordem das categorias, igual à tabela-resumo.
const simpatiasOrdenadas = categorias.flatMap((c) =>
  simpatias.filter((s) => s.categoria === c.id)
)
const numeroDe = (id) => simpatiasOrdenadas.findIndex((s) => s.id === id) + 1

// Os dois banners usam os mesmos links e imagens da Home (src/pages/Home.jsx).
// Se um link mudar, atualize nos dois arquivos.
const Banner = ({ href, src, alt, width, height }) => (
  <section className="max-w-2xl mx-auto px-6 my-10">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:opacity-95"
    >
      <img src={src} alt={alt} className="w-full h-auto block" width={width} height={height} loading="lazy" />
    </a>
  </section>
)

const LinkSimpatia = ({ link }) => {
  const classe = 'text-purple-600 underline hover:text-pink-500 font-semibold'
  return (
    <p className="text-sm text-gray-600 mt-4 bg-pink-50 rounded-xl px-4 py-3">
      👉{' '}
      {link.externo ? (
        <a href={link.url} target="_blank" rel="noopener noreferrer" className={classe}>
          {link.texto}
        </a>
      ) : (
        <Link to={link.url} className={classe}>
          {link.texto}
        </Link>
      )}
    </p>
  )
}

const CartaoSimpatia = ({ s }) => (
  <article id={s.id} className="bg-white border border-pink-100 rounded-2xl p-5 md:p-6 scroll-mt-24">
    <h3 className="font-serif text-xl font-bold text-purple-900 mb-2">
      {numeroDe(s.id)}. {s.nome}
    </h3>
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full border border-purple-200">
        {s.bandeira} {s.origem}
      </span>
      <span className="inline-flex items-center gap-1 bg-pink-50 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full border border-pink-100">
        <Clock size={12} /> {s.tempo}
      </span>
    </div>

    <h4 className="font-semibold text-purple-800 text-sm mb-1">Você vai precisar de:</h4>
    <ul className="list-disc pl-5 text-gray-600 text-sm leading-relaxed mb-4">
      {s.ingredientes.map((i, k) => (
        <li key={k}>{i}</li>
      ))}
    </ul>

    <h4 className="font-semibold text-purple-800 text-sm mb-1">Como fazer:</h4>
    <ol className="list-decimal pl-5 text-gray-600 text-sm leading-relaxed mb-4 space-y-1">
      {s.passos.map((p, k) => (
        <li key={k}>{p}</li>
      ))}
    </ol>

    <p className="text-gray-500 text-sm leading-relaxed italic border-l-4 border-pink-200 pl-3">{s.contexto}</p>

    {s.link && <LinkSimpatia link={s.link} />}
  </article>
)

const SecaoCategoria = ({ c }) => (
  <section className="py-10 border-t border-pink-100">
    <div className="max-w-3xl mx-auto px-6">
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-purple-900 mb-2">{c.titulo}</h2>
      <p className="text-gray-500 mb-6">{c.descricao}</p>
      <div className="flex flex-col gap-5">
        {simpatias
          .filter((s) => s.categoria === c.id)
          .map((s) => (
            <CartaoSimpatia key={s.id} s={s} />
          ))}
      </div>
      {c.id === 'fortalecer' && (
        <p className="text-gray-600 text-sm mt-6">
          Já estão juntos? Descubra{' '}
          <Link to="/" className="text-purple-600 underline hover:text-pink-500 font-semibold">
            há quanto tempo vocês namoram
          </Link>{' '}
          e qual a próxima data especial para comemorar.
        </p>
      )}
    </div>
  </section>
)

const SimpatiasApaixonar = () => {
  const [rapidas, apaixonar, ...resto] = categorias

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Seo
        path="/simpatias-para-ele-se-apaixonar"
        title="Simpatia para Ele se Apaixonar por Mim: 15 Rápidas e Fáceis"
        description="15 simpatias rápidas e fáceis para ele se apaixonar por você, com origem de cada uma: Santo Antônio, ciganas, italianas, mexicanas e mais. Passo a passo simples."
        faqs={faqsSimpatias}
      />

      <div className="bg-white rounded-3xl shadow-sm border border-pink-100 overflow-hidden mb-8">
        {/* Introdução */}
        <section className="py-12">
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-purple-900 mb-6">
              Simpatias para ele se apaixonar por mim (rápidas e fáceis)
            </h1>
            {introducao.map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Tabela-resumo */}
        <section className="pb-12">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-serif text-xl md:text-2xl font-bold text-purple-900 mb-4 flex items-center gap-2">
              <Sparkles size={20} className="text-pink-400" /> Resumo das 15 simpatias
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-pink-100">
              <table className="w-full text-sm text-left">
                <thead className="bg-pink-50 text-purple-800">
                  <tr>
                    <th scope="col" className="px-3 py-2 font-semibold">Simpatia</th>
                    <th scope="col" className="px-3 py-2 font-semibold">Origem</th>
                    <th scope="col" className="px-3 py-2 font-semibold whitespace-nowrap">Tempo</th>
                    <th scope="col" className="px-3 py-2 font-semibold">Ingredientes</th>
                  </tr>
                </thead>
                <tbody>
                  {simpatiasOrdenadas.map((s, i) => (
                    <tr key={s.id} className="border-t border-pink-100 align-top">
                      <td className="px-3 py-2 font-medium">
                        <a href={`#${s.id}`} className="text-purple-700 hover:text-pink-500 underline">
                          {i + 1}. {s.nome}
                        </a>
                      </td>
                      <td className="px-3 py-2 text-gray-600">{s.bandeira} {s.origem}</td>
                      <td className="px-3 py-2 text-gray-600 whitespace-nowrap">{s.tempo}</td>
                      <td className="px-3 py-2 text-gray-600">{s.ingredientes.join(', ')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <SecaoCategoria c={rapidas} />
        <SecaoCategoria c={apaixonar} />

        <Banner
          href="https://meli.la/2T9WNFe"
          src={bannerLingerie}
          alt="Lingerie - Para se sentir linda. Para deixar ele sem palavras."
          width="1100"
          height="1100"
        />

        {resto.map((c) => (
          <SecaoCategoria key={c.id} c={c} />
        ))}

        {/* Dicas */}
        <section className="py-10 border-t border-pink-100">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-purple-900 mb-6">{dicas.titulo}</h2>
            <ul className="flex flex-col gap-3">
              {dicas.itens.map((d, i) => (
                <li key={i} className="text-gray-600 text-sm leading-relaxed">
                  <strong className="text-purple-800">{d.titulo}:</strong> {d.texto}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Banner
          href="https://meli.la/23fTRMm"
          src={bannerCinta}
          alt="Cinta Elastique Feminina Modeladora - Modela sua cintura e valoriza suas curvas"
        />

        <Faq titulo="Perguntas frequentes sobre simpatias de amor" items={faqsSimpatias} />
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
}

export default SimpatiasApaixonar
