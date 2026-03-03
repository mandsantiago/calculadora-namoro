import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Heart, Calendar, Gift, Globe } from 'lucide-react'

const ConteudoSEO = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Seção sobre Data de Namoro */}
      <Card className="bg-white shadow-lg border-purple-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-purple-800 flex items-center gap-2">
            <Calendar className="text-purple-600" />
            Data de Namoro: Celebrando o Amor em Cada Aniversário
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            A <strong>data de namoro</strong> representa um marco fundamental na vida de qualquer casal. É o momento em que duas pessoas decidem oficializar seu relacionamento e começar uma jornada juntas. Calcular o tempo de namoro não é apenas uma questão de curiosidade, mas uma forma de celebrar cada conquista, cada momento especial e cada etapa superada em conjunto.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            Nossa <strong>calculadora de namoro</strong> oferece uma maneira precisa e emocionante de descobrir exatamente há quanto tempo vocês estão juntos. Além de mostrar anos, meses e dias, também calculamos informações especiais como quantas primaveras vocês viveram juntos, quantos Dias dos Namorados celebraram e qual boda de casamento vocês estão comemorando.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            O tempo de relacionamento é mais do que números - é uma coleção de memórias, experiências compartilhadas e crescimento mútuo. Cada dia juntos representa uma escolha consciente de amar, apoiar e construir um futuro em comum. Por isso, conhecer exatamente há quanto tempo vocês estão juntos pode ser uma fonte de orgulho e motivação para continuar investindo no relacionamento.
          </p>
        </CardContent>
      </Card>

      {/* Seção sobre Bodas de Casamento */}
      <Card className="bg-white shadow-lg border-orange-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-orange-800 flex items-center gap-2">
            <Gift className="text-orange-600" />
            Bodas de Casamento: Tradição e Significado
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            As <strong>bodas de casamento</strong> são uma tradição milenar que celebra cada aniversário de união entre casais. O termo "boda" vem do latim "vota", que significa "promessa", fazendo referência aos votos matrimoniais. Esta bela tradição teve origem na Idade Média, em pequenos povoados da Alemanha, onde os casais que completavam 25 anos de casamento recebiam uma coroa de prata, e aqueles com 50 anos, uma coroa de ouro.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Cada ano de casamento ou namoro é representado por um material específico, que simboliza a evolução e o fortalecimento da relação ao longo do tempo. A escolha dos materiais segue uma lógica interessante: quanto mais tempo de união, mais resistente e precioso é o material escolhido. Isso representa como o amor se torna mais sólido e valioso com o passar dos anos.
          </p>

          <div className="bg-purple-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Principais Bodas de Casamento:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <p><strong>1 ano:</strong> Bodas de Papel</p>
                <p><strong>2 anos:</strong> Bodas de Algodão</p>
                <p><strong>3 anos:</strong> Bodas de Trigo</p>
                <p><strong>4 anos:</strong> Bodas de Linho</p>
                <p><strong>5 anos:</strong> Bodas de Madeira ou Ferro</p>
                <p><strong>10 anos:</strong> Bodas de Estanho</p>
                <p><strong>15 anos:</strong> Bodas de Cristal</p>
                <p><strong>20 anos:</strong> Bodas de Porcelana</p>
              </div>
              <div className="space-y-2">
                <p><strong>25 anos:</strong> Bodas de Prata</p>
                <p><strong>30 anos:</strong> Bodas de Pérola</p>
                <p><strong>35 anos:</strong> Bodas de Coral</p>
                <p><strong>40 anos:</strong> Bodas de Esmeralda</p>
                <p><strong>45 anos:</strong> Bodas de Rubi</p>
                <p><strong>50 anos:</strong> Bodas de Ouro</p>
                <p><strong>60 anos:</strong> Bodas de Diamante</p>
                <p><strong>75 anos:</strong> Bodas de Brilhante</p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            As Bodas de Prata (25 anos) e as Bodas de Ouro (50 anos) são tradicionalmente as mais celebradas, representando marcos significativos na jornada de um casal. No entanto, cada aniversário merece ser comemorado, pois representa mais um ano de amor, companheirismo e dedicação mútua.
          </p>
        </CardContent>
      </Card>

      {/* Seção sobre Datas do Amor pelo Mundo */}
      <Card className="bg-white shadow-lg border-pink-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-pink-800 flex items-center gap-2">
            <Globe className="text-pink-600" />
            Datas do Amor pelo Mundo: Celebrações Românticas Globais
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            O amor é universal, mas as formas de celebrá-lo variam ao redor do mundo. Enquanto no Brasil comemoramos o <strong>Dia dos Namorados em 12 de junho</strong>, a maioria dos países celebra o amor no dia 14 de fevereiro, conhecido como Valentine's Day ou Dia de São Valentim.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            A tradição do Valentine's Day tem suas raízes na antiga Roma, com o festival Lupercalia, realizado em 15 de fevereiro. Este festival envolvia rituais de fertilidade e renovação da terra. Posteriormente, a tradição foi adaptada pela Igreja Cristã, transformando-se no Dia de São Valentim, em homenagem ao santo que realizava casamentos secretos durante o império romano, sendo executado em 14 de fevereiro.
          </p>

          <div className="bg-pink-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-pink-800 mb-4">Celebrações do Amor pelo Mundo:</h3>
            <div className="space-y-3 text-sm">
              <div>
                <strong>Brasil (12 de junho):</strong> Celebrado um dia antes do Dia de Santo Antônio, conhecido como o santo casamenteiro. A data foi escolhida por motivos comerciais, para movimentar as vendas no meio do ano.
              </div>
              <div>
                <strong>Estados Unidos (14 de fevereiro):</strong> Valentine's Day é uma das datas mais comerciais do ano, com gastos de bilhões de dólares em presentes, flores e chocolates.
              </div>
              <div>
                <strong>Coreia do Sul (14 de fevereiro e 14 de março):</strong> No Valentine's Day, as mulheres dão chocolates aos homens. Em 14 de março, no "Dia Branco", os homens retribuem com presentes.
              </div>
              <div>
                <strong>Finlândia (14 de fevereiro):</strong> Chamado de "Dia dos Amigos", a celebração inclui não apenas casais, mas também amizades.
              </div>
              <div>
                <strong>Reino Unido (14 de fevereiro):</strong> Tradição muito romântica, com jantares à luz de velas e troca de presentes especiais.
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Independentemente da data escolhida por cada cultura, o importante é que o amor seja celebrado e nutrido constantemente. Nossa calculadora de namoro ajuda casais a identificar essas datas especiais e a criar momentos únicos de celebração ao longo de sua jornada juntos.
          </p>
        </CardContent>
      </Card>

      {/* Seção sobre Importância de Calcular o Tempo de Namoro */}
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

          <p className="text-gray-700 leading-relaxed mb-4">
            Conhecer exatamente há quanto tempo vocês estão juntos pode servir como motivação para continuar investindo no relacionamento. É uma lembrança tangível de que vocês escolheram ficar juntos através de diferentes estações da vida, superando desafios e celebrando conquistas.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Além disso, saber qual boda vocês estão comemorando adiciona um elemento especial às celebrações. Cada material representa características que o relacionamento desenvolveu: a flexibilidade do papel no primeiro ano, a resistência do ferro no quinto ano, a preciosidade da prata aos 25 anos.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Nossa calculadora também mostra informações divertidas como quantas primaveras vocês viveram juntos e quantos Dias dos Namorados celebraram, criando uma perspectiva única sobre a duração e a riqueza do relacionamento de vocês.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default ConteudoSEO

