import { Link } from 'react-router-dom'
import { Calendar, Sparkles, Share2, Heart } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import Seo from '@/components/Seo.jsx'
import CalculadoraNamoro from '@/components/CalculadoraNamoro.jsx'
import Faq from '@/components/Faq.jsx'
import { faqsHome } from '@/data/faqs.js'
import bannerLingerie from '@/assets/bannerlingerie.webp'
import bannerCinta from '@/assets/bannercinta.webp'

const passos = [
  {
    numero: 1,
    icon: <Calendar size={32} className="text-pink-500" />,
    titulo: 'Informe a data de início',
    descricao: 'Digite o dia, mês e ano em que o relacionamento começou — pode ser o primeiro beijo, o pedido oficial ou a data que vocês escolheram juntos.',
  },
  {
    numero: 2,
    icon: <Sparkles size={32} className="text-orange-400" />,
    titulo: 'Veja o resultado',
    descricao: 'A calculadora mostra o total em anos, meses e dias — além de revelar qual boda ou marco especial está chegando.',
  },
  {
    numero: 3,
    icon: <Share2 size={32} className="text-pink-400" />,
    titulo: 'Compartilhe ou comemore',
    descricao: 'Copie o resultado, compartilhe com seu amor ou use as nossas sugestões de comemoração para planejar algo especial!',
  },
]

const Home = () => (
  <>
    <Seo
      path="/"
      title="Calculadora de Namoro - Data de Namoro e Bodas de Casamento"
      description="Calculadora de tempo de namoro e casamento. Descubra quantos anos, meses, dias e horas vocês estão juntos, e qual boda de casamento vocês comemoram."
      faqs={faqsHome}
    />

    {/* Banner Lingerie - ACIMA da calculadora */}
    <section className="max-w-2xl mx-auto px-6 mb-8">
      <a
        href="https://meli.la/2T9WNFe"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:opacity-95"
      >
        <img
          src={bannerLingerie}
          alt="Lingerie - Para se sentir linda. Para deixar ele sem palavras."
          className="w-full h-auto block"
          width="1100"
          height="1100"
        />
      </a>
    </section>

    {/* Calculadora Principal */}
    <section className="mb-8">
      <CalculadoraNamoro />
    </section>

    {/* Banner Cinta Elastique - ABAIXO da calculadora */}
    <section className="max-w-2xl mx-auto px-6 mb-8">
      <a
        href="https://meli.la/23fTRMm"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:opacity-95"
      >
        <img
          src={bannerCinta}
          alt="Cinta Elastique Feminina Modeladora - Modela sua cintura e valoriza suas curvas"
          className="w-full h-auto block"
        />
      </a>
    </section>

    <div className="bg-white rounded-3xl shadow-sm border border-pink-100 overflow-hidden my-8 max-w-4xl mx-auto">
      {/* Introdução emotiva */}
      <section className="py-12 border-t border-pink-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 rounded-2xl p-8 md:p-12 overflow-hidden shadow-sm border border-pink-100">
            <span
              aria-hidden="true"
              className="absolute -top-4 -right-4 text-[12rem] leading-none text-pink-100 select-none pointer-events-none"
            >
              ♥
            </span>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-purple-900 mb-3">
              Cada Dia ao Seu Lado Conta
            </h2>
            <div className="flex justify-center gap-2 text-pink-400 text-xl mb-6">♥ ♥ ♥</div>

            <p className="text-gray-600 leading-relaxed mb-4 text-[1.05rem]">
              <span className="float-left font-serif text-5xl leading-none mr-2 mt-1 text-pink-400">E</span>
              xiste algo de mágico em olhar para o calendário e perceber: foi exatamente neste dia, há meses ou anos, que tudo começou. Um olhar diferente, uma mensagem enviada com o coração acelerado, um "sim" que mudou a história de duas pessoas para sempre. Celebrar os marcos do seu relacionamento não é apenas uma tradição — é um ato de amor consciente, uma forma de dizer <em>"eu me importo com a nossa história e quero honrá-la"</em>.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4 text-[1.05rem]">
              A <strong>data de namoro</strong> representa um marco fundamental na vida de qualquer casal. É o momento em que duas pessoas decidem oficializar seu relacionamento e começar uma jornada juntas. Calcular o tempo de namoro não é apenas uma questão de curiosidade, mas uma forma de celebrar cada conquista, cada momento especial e cada etapa superada em conjunto.
            </p>
            <p className="text-gray-600 leading-relaxed text-[1.05rem]">
              A nossa calculadora de namoro nasceu justamente para ajudar você a não perder nenhum desses momentos. Descubra quantos dias, meses e anos vocês já construíram juntos, encontre a boda correta do seu aniversário de casamento e planeje comemorações que vão ficar para sempre na memória de vocês dois. Afinal, o amor merece ser contado — um dia de cada vez.
            </p>
          </div>
        </div>
      </section>

      {/* Como usar */}
      <section className="py-12 border-t border-pink-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-purple-900 mb-2">Como Usar a Calculadora</h2>
          <p className="text-gray-500 mb-8">É simples, rápido e cheio de amor. Siga o passo a passo abaixo:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {passos.map((p) => (
              <div
                key={p.numero}
                className="bg-white border border-pink-100 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold text-lg flex-shrink-0">
                    {p.numero}
                  </span>
                  {p.icon}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{p.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq
        titulo="Perguntas Frequentes"
        subtitulo="Tire suas dúvidas sobre como calcular o tempo de namoro."
        items={faqsHome}
      />
    </div>

    {/* Por que calcular + links para as páginas de conteúdo */}
    <section className="max-w-4xl mx-auto px-6 mb-8">
      <Card className="bg-white shadow-lg border-purple-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-purple-800 flex items-center gap-2">
            <Heart className="text-red-500" />
            Por Que Calcular o Tempo de Namoro é Importante?
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Calcular o tempo de namoro vai muito além da simples curiosidade matemática. É uma forma de reconhecer e valorizar a jornada que vocês construíram juntos. Cada dia, semana, mês e ano representa investimento emocional, crescimento pessoal e fortalecimento dos laços afetivos.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Saber qual boda vocês estão comemorando adiciona um elemento especial às celebrações — veja o significado de cada uma na nossa página de{' '}
            <Link to="/bodas-de-casamento" className="text-purple-600 underline hover:text-pink-500 font-semibold">
              bodas de casamento
            </Link>
            . E se estiver buscando inspiração para presentear, temos um guia completo de{' '}
            <Link to="/ideias-presente-namoro" className="text-purple-600 underline hover:text-pink-500 font-semibold">
              ideias de comemoração por marco do relacionamento
            </Link>
            .
          </p>
        </CardContent>
      </Card>
    </section>
  </>
)

export default Home
