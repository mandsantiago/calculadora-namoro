import { useState } from 'react'
import { Calendar, Search, Sparkles, Share2, ChevronDown, ChevronUp, Heart } from 'lucide-react'

/* ─── Seção 1: Introdução Emotiva ─── */
const SecaoIntroducao = () => (
  <section className="py-12 border-t border-pink-100">
    <div className="max-w-3xl mx-auto px-6">
      <div className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 rounded-2xl p-8 md:p-12 overflow-hidden shadow-sm border border-pink-100">
        {/* coração decorativo de fundo */}
        <span
          aria-hidden="true"
          className="absolute -top-4 -right-4 text-[12rem] leading-none text-pink-100 select-none pointer-events-none"
        >
          ♥
        </span>

        <h2 className="font-serif text-2xl md:text-3xl font-bold text-purple-900 mb-3">
          Cada Dia ao Seu Lado Conta
        </h2>
        <div className="flex justify-center gap-2 text-pink-400 text-xl mb-6">
          ♥ ♥ ♥
        </div>

        <p className="text-gray-600 leading-relaxed mb-4 text-[1.05rem]">
          <span className="float-left font-serif text-5xl leading-none mr-2 mt-1 text-pink-400">E</span>
          xiste algo de mágico em olhar para o calendário e perceber: foi exatamente neste dia, há meses ou anos, que tudo começou. Um olhar diferente, uma mensagem enviada com o coração acelerado, um "sim" que mudou a história de duas pessoas para sempre. Celebrar os marcos do seu relacionamento não é apenas uma tradição — é um ato de amor consciente, uma forma de dizer <em>"eu me importo com a nossa história e quero honrá-la"</em>.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4 text-[1.05rem]">
          Pesquisas sobre relacionamentos mostram que casais que celebram suas conquistas juntos — sejam elas grandes ou pequenas — tendem a ter vínculos mais sólidos e uma comunicação mais aberta. Não é preciso esperar o aniversário de um ano ou o casamento para comemorar: o primeiro mês merece champanhe, o centésimo dia merece uma surpresa, e cada semana juntos é uma vitória que vale ser lembrada.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4 text-[1.05rem]">
          Memórias compartilhadas são o cimento do amor. Quando você revisita aquela primeira viagem, aquele jantar especial ou aquela noite que ficaram conversando até amanhecer, você está literalmente fortalecendo o laço emocional entre vocês. Pequenos gestos — uma mensagem de "já faz 6 meses que você é meu/minha", uma foto impressa do dia em que se conheceram, um jantar surpresa na data exata — têm o poder de acender novamente aquela chama que, na correria do dia a dia, às vezes se apaga um pouquinho.
        </p>
        <p className="text-gray-600 leading-relaxed text-[1.05rem]">
          A nossa calculadora de namoro nasceu justamente para ajudar você a não perder nenhum desses momentos. Descubra quantos dias, meses e anos vocês já construíram juntos, encontre a boda correta do seu aniversário de casamento e planeje comemorações que vão ficar para sempre na memória de vocês dois. Afinal, o amor merece ser contado — um dia de cada vez.
        </p>
      </div>
    </div>
  </section>
)

/* ─── Seção 2: Como Usar ─── */
const passos = [
  {
    numero: 1,
    icon: <Calendar size={32} className="text-pink-500" />,
    titulo: 'Informe a data de início',
    descricao: 'Digite o dia, mês e ano em que o relacionamento começou — pode ser o primeiro beijo, o pedido oficial ou a data que vocês escolheram juntos.',
  },
  {
    numero: 2,
    icon: <Search size={32} className="text-purple-500" />,
    titulo: 'Escolha o que calcular',
    descricao: 'Selecione se quer saber o tempo de namoro, o tempo de casamento ou a boda correspondente ao aniversário.',
  },
  {
    numero: 3,
    icon: <Sparkles size={32} className="text-orange-400" />,
    titulo: 'Veja o resultado',
    descricao: 'A calculadora mostra o total em anos, meses e dias — além de revelar qual boda ou marco especial está chegando.',
  },
  {
    numero: 4,
    icon: <Share2 size={32} className="text-pink-400" />,
    titulo: 'Compartilhe ou comemore',
    descricao: 'Copie o resultado, compartilhe com seu amor ou use as nossas sugestões de comemoração para planejar algo especial!',
  },
]

const SecaoComoUsar = () => (
  <section className="py-12 border-t border-pink-100">
    <div className="max-w-3xl mx-auto px-6">
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-purple-900 mb-2">
        Como Usar a Calculadora
      </h2>
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
)

/* ─── Seção 3: FAQ ─── */
const faqs = [
  {
    pergunta: 'Como calcular os dias de namoro?',
    resposta: 'Para calcular os dias de namoro, basta subtrair a data de início do relacionamento da data de hoje. Nossa calculadora faz isso automaticamente, mostrando o resultado em anos, meses e dias. Se quiser fazer na mão: pegue a data atual, subtraia a data de início e considere os anos bissextos (366 dias) para ter o número exato de dias juntos.',
  },
  {
    pergunta: 'Devo contar desde o primeiro beijo ou desde o pedido oficial?',
    resposta: 'Essa é uma das perguntas mais comuns — e a resposta é: depende de vocês! Muitos casais contam a partir do primeiro beijo, outros do momento em que um pediu o outro oficialmente para namorar, e alguns até da primeira mensagem trocada. O mais importante é que os dois concordem com a data. Converse com seu parceiro(a) e escolham juntos o marco que tem mais significado para a história de vocês.',
  },
  {
    pergunta: 'Como celebrar o aniversário de namoro de forma especial?',
    resposta: 'Existem mil formas de comemorar! Para datas menores (1 a 6 meses), um jantar especial, uma carta escrita à mão ou uma playlist com músicas que marcaram a relação já fazem toda a diferença. Para aniversários maiores (1 ano em diante), considere uma viagem surpresa, um álbum de fotos personalizado, uma experiência nova que vocês nunca fizeram juntos ou uma joia com a data gravada. O segredo está na intenção: mostrar que você lembrou e se planejou vale mais do que o valor gasto.',
  },
  {
    pergunta: 'O que são bodas de casamento?',
    resposta: 'As bodas de casamento são os nomes tradicionais dados a cada aniversário de matrimônio. Cada ano recebe o nome de um material que simboliza a solidez daquela união naquele momento. Por exemplo: 1 ano são as Bodas de Papel, 5 anos as Bodas de Madeira, 25 anos as Bodas de Prata e 50 anos as lendárias Bodas de Ouro. Nossa calculadora identifica automaticamente em qual boda você está!',
  },
  {
    pergunta: 'Quantos meses tem meu namoro?',
    resposta: 'Para calcular os meses de namoro, multiplique os anos completos por 12 e some os meses restantes. Por exemplo: 1 ano e 4 meses = 16 meses. Nossa calculadora já entrega esse número pronto! É comum casais comemorarem o "mesário" — o aniversário mensal — especialmente no início do relacionamento, o que é um hábito muito especial para manter a chama acesa.',
  },
  {
    pergunta: 'Existe diferença entre aniversário de namoro e de casamento?',
    resposta: 'Sim! O aniversário de namoro conta a partir do início do relacionamento (antes do casamento), enquanto o aniversário de casamento conta a partir da data oficial da cerimônia civil ou religiosa. Casais que namoraram antes de se casar costumam comemorar as duas datas, pois ambas têm significado especial. Nossa calculadora permite calcular qualquer uma das duas.',
  },
  {
    pergunta: 'Como saber quantos dias faltam para o próximo aniversário?',
    resposta: 'Basta calcular a diferença entre a data do próximo aniversário (dia e mês de início do relacionamento no próximo ano) e a data de hoje. Com nossa calculadora, você pode inserir a data do futuro aniversário e descobrir o countdown. Planeje-se com antecedência para fazer algo verdadeiramente especial!',
  },
  {
    pergunta: 'O que dar de presente no aniversário de 1 ano de namoro?',
    resposta: 'O primeiro aniversário de 1 ano é um marco muito especial! Algumas ideias: um álbum ou livro personalizado com fotos e memórias do ano; uma viagem — mesmo que curta — para um lugar que sempre quiseram conhecer; uma joia com a data gravada; um jantar no restaurante da primeira vez; ou uma caixa surpresa com 12 itens que representam um momento especial de cada mês. O mais importante é mostrar que você refletiu sobre o que viveram.',
  },
  {
    pergunta: 'Posso usar a calculadora para relacionamentos do passado?',
    resposta: 'Sim! A calculadora funciona para qualquer período — passado, presente ou futuro. Você pode calcular quanto tempo durou um relacionamento anterior inserindo a data de início e a data de término, ou verificar quanto tempo falta para uma data especial no futuro. É uma ferramenta versátil para qualquer tipo de cálculo de datas afetivas.',
  },
  {
    pergunta: 'Relacionamentos à distância também podem usar a calculadora?',
    resposta: 'Com certeza! Casais em relacionamentos à distância (LDR) costumam ser ainda mais atentos às datas especiais, pois cada encontro e cada marco conta dobrado. Use a calculadora para descobrir quantos dias vocês estão juntos mesmo estando longe, e planeje surpresas virtuais: uma videochamada temática, um presente enviado pelos Correios com antecedência ou uma playlist dedicada ao aniversário.',
  },
]

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

const SecaoFAQ = () => (
  <section className="py-12 border-t border-pink-100">
    <div className="max-w-3xl mx-auto px-6">
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-purple-900 mb-2">
        Perguntas Frequentes
      </h2>
      <p className="text-gray-500 mb-8">Tire suas dúvidas sobre datas, cálculos e comemorações de relacionamento.</p>
      <div className="flex flex-col gap-3">
        {faqs.map((f, i) => (
          <ItemFAQ key={i} pergunta={f.pergunta} resposta={f.resposta} />
        ))}
      </div>
    </div>
  </section>
)

/* ─── Seção 4: Ideias de Comemoração ─── */
const marcos = [
  {
    emoji: '🌷',
    label: '1 Mês',
    titulo: 'O primeiro mês — a euforia ainda está no ar',
    descricao: 'É cedo, mas é lindo! Um café da manhã surpresa, uma mensagem especial ao acordar ou uma foto emoldurada do primeiro encontro já fazem a memória ficar marcada para sempre.',
    tags: ['☕ Café da manhã surpresa', '💌 Carta escrita à mão', '📷 Foto emoldurada', '🎵 Playlist personalizada'],
  },
  {
    emoji: '🌹',
    label: '6 Meses',
    titulo: 'Meio ano — vocês se conhecem de verdade agora',
    descricao: 'Seis meses é um marco incrível. Vocês já passaram por momentos juntos e construíram uma rotina. Hora de celebrar o que viveram e antecipar o que ainda vem.',
    tags: ['🍽️ Jantar no restaurante favorito', '📔 Diário compartilhado', '🎁 Caixa de memórias dos 6 meses', '🌅 Passeio ao pôr do sol'],
  },
  {
    emoji: '🎉',
    label: '1 Ano',
    titulo: 'Primeiro aniversário — a grande celebração',
    descricao: 'Um ano juntos merece festa! Volte ao lugar do primeiro encontro, surpreenda com uma experiência inédita ou presenteie com algo que vai durar muitos anos — assim como o amor de vocês.',
    tags: ['✈️ Viagem surpresa', '📸 Álbum de fotos do ano', '💍 Joia com a data gravada', '🥂 Jantar especial com champanhe'],
  },
  {
    emoji: '💙',
    label: '2–4 Anos',
    titulo: 'A fase da cumplicidade profunda',
    descricao: 'Os presentes agora podem ser mais significativos e ligados a projetos futuros — uma viagem dos sonhos, um curso que sempre quiseram fazer juntos ou um presente que simboliza o próximo passo da relação.',
    tags: ['⛺ Camping ou ecoturismo', '🎨 Curso juntos (culinária, dança)', '🌍 Viagem internacional', '🖼️ Quadro de arte personalizado'],
  },
  {
    emoji: '🪵',
    label: '5 Anos',
    titulo: 'Bodas de Madeira — sólidos como uma árvore',
    descricao: 'Cinco anos é uma conquista enorme! Assim como a madeira, o amor de vocês ficou mais resistente com o tempo. Presentear com algo feito em madeira é um gesto simbólico e cheio de significado.',
    tags: ['🪵 Presente em madeira personalizado', '🌳 Plantar uma árvore juntos', '🏕️ Experiência de glamping', '📝 Renovação de votos'],
  },
  {
    emoji: '🥈',
    label: '25 Anos',
    titulo: 'Bodas de Prata — um amor que brilha',
    descricao: 'Vinte e cinco anos juntos é uma história inteira. As Bodas de Prata merecem uma festa inesquecível — renove os votos, junte família e amigos e celebre cada capítulo que escreveram juntos.',
    tags: ['💎 Joia em prata com data gravada', '🎊 Festa de renovação de votos', '✈️ Viagem dos sonhos', '📖 Livro da história do casal'],
  },
  {
    emoji: '🥇',
    label: '50 Anos',
    titulo: 'Bodas de Ouro — o amor mais precioso',
    descricao: 'Cinquenta anos juntos é uma raridade preciosa. Um jantar especial com toda a família, renovação de votos emocionante e presentes simbólicos em ouro marcam este dia inesquecível.',
    tags: ['💍 Alianças em ouro renovadas', '👨‍👩‍👧‍👦 Reunião de toda a família', '🎥 Vídeo com mensagens dos filhos', '🌹 50 rosas vermelhas'],
  },
]

const SecaoIdeias = () => (
  <section className="py-12 border-t border-pink-100">
    <div className="max-w-3xl mx-auto px-6">
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-purple-900 mb-2">
        Ideias de Comemoração por Marco
      </h2>
      <p className="text-gray-500 mb-8">Cada fase do relacionamento merece ser celebrada do seu jeito. Veja sugestões para cada momento especial:</p>
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
              <h3 className="font-semibold text-purple-800 mb-1">{m.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-3">{m.descricao}</p>
              <div className="flex flex-wrap gap-2">
                {m.tags.map((t, j) => (
                  <span key={j} className="bg-pink-50 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full border border-pink-100">
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
)

/* ─── Componente principal exportado ─── */
const ConteudoExpandido = () => (
  <div className="bg-white rounded-3xl shadow-sm border border-pink-100 overflow-hidden my-8 max-w-4xl mx-auto">
    <SecaoIntroducao />
    <SecaoComoUsar />
    <SecaoFAQ />
    <SecaoIdeias />
  </div>
)

export default ConteudoExpandido
