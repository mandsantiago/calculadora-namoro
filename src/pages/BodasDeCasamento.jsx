import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Gift, Calculator } from 'lucide-react'
import Seo from '@/components/Seo.jsx'
import Faq from '@/components/Faq.jsx'
import { bodasPrincipais } from '@/data/bodas.js'
import { faqsBodas } from '@/data/faqs.js'

const BodasDeCasamento = () => (
  <div className="max-w-4xl mx-auto px-4 py-8">
    <Seo
      path="/bodas-de-casamento"
      title="Bodas de Casamento: Lista Completa de 1 a 75 Anos | Calculadora de Namoro"
      description="Veja o nome de cada boda de casamento, de 1 a 75 anos: bodas de papel, madeira, prata, ouro e muito mais. Descubra a história e o significado de cada uma."
      faqs={faqsBodas}
    />

    <Card className="bg-white shadow-lg border-orange-200 mb-8">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-orange-800 flex items-center gap-2">
          <Gift className="text-orange-600" />
          <h1 className="text-3xl font-bold text-orange-800">Bodas de Casamento: Tradição e Significado</h1>
        </CardTitle>
      </CardHeader>
      <CardContent className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-4">
          As <strong>bodas de casamento</strong> são uma tradição milenar que celebra cada aniversário de união entre casais. O termo "boda" vem do latim "vota", que significa "promessa", fazendo referência aos votos matrimoniais. Esta bela tradição teve origem na Idade Média, em pequenos povoados da Alemanha, onde os casais que completavam 25 anos de casamento recebiam uma coroa de prata, e aqueles com 50 anos, uma coroa de ouro.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Cada ano de casamento ou namoro é representado por um material específico, que simboliza a evolução e o fortalecimento da relação ao longo do tempo. A escolha dos materiais segue uma lógica interessante: quanto mais tempo de união, mais resistente e precioso é o material escolhido. Isso representa como o amor se torna mais sólido e valioso com o passar dos anos.
        </p>

        <div className="bg-orange-50 p-6 rounded-lg mb-6 not-prose">
          <h2 className="text-xl font-semibold text-orange-800 mb-4">Principais Bodas de Casamento</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            {bodasPrincipais.map(({ ano, nome }) => (
              <div key={ano} className="bg-white rounded-lg px-4 py-2 border border-orange-100">
                <strong>{ano} {ano === 1 ? 'ano' : 'anos'}:</strong> {nome}
              </div>
            ))}
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-2">
          As Bodas de Prata (25 anos) e as Bodas de Ouro (50 anos) são tradicionalmente as mais celebradas, representando marcos significativos na jornada de um casal. No entanto, cada aniversário merece ser comemorado, pois representa mais um ano de amor, companheirismo e dedicação mútua.
        </p>
      </CardContent>
    </Card>

    <div className="text-center mb-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 py-3 px-6 rounded-xl text-white font-semibold no-underline transition-opacity hover:opacity-90"
        style={{ background: 'linear-gradient(90deg, #8B3FBF, #E8642B)' }}
      >
        <Calculator size={18} />
        Descubra qual boda vocês estão comemorando agora
      </Link>
    </div>

    <Faq
      titulo="Perguntas sobre Bodas de Casamento"
      items={faqsBodas}
    />
  </div>
)

export default BodasDeCasamento
