import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Globe, Calculator } from 'lucide-react'
import Seo from '@/components/Seo.jsx'
import { celebracoesPeloMundo } from '@/data/datasDoAmor.js'

const DiaDosNamorados = () => (
  <div className="max-w-4xl mx-auto px-4 py-8">
    <Seo
      path="/dia-dos-namorados"
      title="Dia dos Namorados no Brasil e no Mundo: Datas e Origens | Calculadora de Namoro"
      description="Saiba por que o Dia dos Namorados é comemorado em 12 de junho no Brasil, como o Valentine's Day é celebrado em outros países, e a origem histórica dessas datas do amor."
    />

    <Card className="bg-white shadow-lg border-pink-200">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-pink-800 flex items-center gap-2">
          <Globe className="text-pink-600" />
          <h1 className="text-3xl font-bold text-pink-800">Dia dos Namorados: Datas do Amor pelo Mundo</h1>
        </CardTitle>
      </CardHeader>
      <CardContent className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-4">
          O amor é universal, mas as formas de celebrá-lo variam ao redor do mundo. Enquanto no Brasil comemoramos o <strong>Dia dos Namorados em 12 de junho</strong>, a maioria dos países celebra o amor no dia 14 de fevereiro, conhecido como Valentine's Day ou Dia de São Valentim.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          A tradição do Valentine's Day tem suas raízes na antiga Roma, com o festival Lupercalia, realizado em 15 de fevereiro. Este festival envolvia rituais de fertilidade e renovação da terra. Posteriormente, a tradição foi adaptada pela Igreja Cristã, transformando-se no Dia de São Valentim, em homenagem ao santo que realizava casamentos secretos durante o império romano, sendo executado em 14 de fevereiro.
        </p>

        <div className="bg-pink-50 p-6 rounded-lg mb-6 not-prose">
          <h2 className="text-xl font-semibold text-pink-800 mb-4">Celebrações do Amor pelo Mundo</h2>
          <div className="space-y-3 text-sm">
            {celebracoesPeloMundo.map((c) => (
              <div key={c.local}>
                <strong>{c.local}:</strong> {c.texto}
              </div>
            ))}
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-2">
          Independentemente da data escolhida por cada cultura, o importante é que o amor seja celebrado e nutrido constantemente. Use nossa calculadora de namoro para descobrir exatamente há quanto tempo vocês estão juntos antes do próximo Dia dos Namorados, e planeje com antecedência uma comemoração à altura.
        </p>
      </CardContent>
    </Card>

    <div className="text-center my-8">
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

export default DiaDosNamorados
