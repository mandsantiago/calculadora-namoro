// Gera, para cada página, uma versão do dist/index.html com o <title>,
// meta description, canonical, Open Graph e JSON-LD já corretos e presentes
// no HTML puro (sem depender de JavaScript rodar) — assim ferramentas que não
// executam JS (como o Ubersuggest) e crawlers em geral veem a tag certa desde
// a primeira resposta do servidor, e não só depois da página carregar.
//
// Isso NÃO substitui o react-helmet-async: ele continua responsável por
// atualizar essas mesmas tags quando a pessoa navega ENTRE as páginas pelo
// site sem recarregar (cliques nos links do rodapé, por exemplo). Este script
// só cuida do primeiro carregamento de cada URL.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.join(__dirname, '..', 'dist')
const shellPath = path.join(distDir, 'index.html')
const shell = readFileSync(shellPath, 'utf-8')

const SITE_URL = 'https://www.datadenamoro.com.br'
const SITE_NAME = 'Calculadora de Namoro'

const faqPageJsonLd = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.pergunta,
    acceptedAnswer: { '@type': 'Answer', text: f.resposta },
  })),
})

// Mesmos textos usados nos componentes <Seo> de cada página (src/pages/*.jsx)
// e nas listas de FAQ (src/data/faqs.js) — mantidos em sincronia manualmente,
// já que não há acesso direto aos módulos React aqui.
const faqsHome = [
  { pergunta: 'Como calcular os dias de namoro?', resposta: 'Para calcular os dias de namoro, basta subtrair a data de início do relacionamento da data de hoje. Nossa calculadora faz isso automaticamente, mostrando o resultado em anos, meses e dias.' },
  { pergunta: 'Devo contar desde o primeiro beijo ou desde o pedido oficial?', resposta: 'Depende de vocês! Muitos casais contam a partir do primeiro beijo, outros do pedido oficial. O importante é que os dois concordem com a data.' },
  { pergunta: 'Quantos meses tem meu namoro?', resposta: 'Multiplique os anos completos por 12 e some os meses restantes. Nossa calculadora já entrega esse número pronto.' },
  { pergunta: 'Existe diferença entre aniversário de namoro e de casamento?', resposta: 'Sim! O de namoro conta a partir do início do relacionamento, o de casamento a partir da cerimônia oficial.' },
  { pergunta: 'Como saber quantos dias faltam para o próximo aniversário?', resposta: 'Insira a data do próximo aniversário na calculadora e descubra o countdown exato.' },
  { pergunta: 'Posso usar a calculadora para relacionamentos do passado?', resposta: 'Sim! Funciona para qualquer período — passado, presente ou futuro.' },
  { pergunta: 'Relacionamentos à distância também podem usar a calculadora?', resposta: 'Com certeza! Funciona igual para casais em relacionamento à distância.' },
]
const faqsBodas = [
  { pergunta: 'O que são bodas de casamento?', resposta: 'São os nomes tradicionais dados a cada aniversário de matrimônio, cada um representado por um material simbólico.' },
]
const faqsIdeias = [
  { pergunta: 'Como celebrar o aniversário de namoro de forma especial?', resposta: 'Existem mil formas: jantar especial, viagem surpresa, álbum de fotos personalizado — o importante é a intenção.' },
  { pergunta: 'O que dar de presente no aniversário de 1 ano de namoro?', resposta: 'Álbum de fotos, viagem curta, joia com a data gravada ou uma caixa surpresa com 12 memórias do ano.' },
]

const pages = [
  {
    route: '',
    title: 'Calculadora de Namoro - Data de Namoro e Bodas de Casamento',
    description: 'Calculadora de tempo de namoro e casamento. Descubra quantos anos, meses, dias e horas vocês estão juntos, e qual boda de casamento vocês comemoram.',
    faqs: faqsHome,
  },
  {
    route: 'bodas-de-casamento',
    title: 'Bodas de Casamento: Lista Completa de 1 a 75 Anos | Calculadora de Namoro',
    description: 'Veja o nome de cada boda de casamento, de 1 a 75 anos: bodas de papel, madeira, prata, ouro e muito mais. Descubra a história e o significado de cada uma.',
    faqs: faqsBodas,
  },
  {
    route: 'ideias-presente-namoro',
    title: 'Ideias de Presente e Comemoração por Marco de Namoro | Calculadora de Namoro',
    description: 'Ideias de presente e comemoração para cada marco do relacionamento: 1 mês, 6 meses, 1 ano, 5 anos, 25 anos e 50 anos de namoro ou casamento.',
    faqs: faqsIdeias,
  },
  {
    route: 'dia-dos-namorados',
    title: 'Dia dos Namorados no Brasil e no Mundo: Datas e Origens | Calculadora de Namoro',
    description: "Saiba por que o Dia dos Namorados é comemorado em 12 de junho no Brasil, como o Valentine's Day é celebrado em outros países, e a origem histórica dessas datas do amor.",
    faqs: [],
  },
  {
    route: 'politica-de-privacidade',
    title: 'Política de Privacidade | Calculadora de Namoro',
    description: 'Política de privacidade do site Calculadora de Namoro.',
    faqs: [],
    noindex: true,
  },
]

for (const page of pages) {
  const url = `${SITE_URL}/${page.route}`.replace(/\/$/, page.route ? '' : '/')
  const tagsHtml = [
    `<title>${page.title}</title>`,
    `<meta name="description" content="${page.description.replace(/"/g, '&quot;')}" />`,
    `<link rel="canonical" href="${url}" />`,
    page.noindex ? '<meta name="robots" content="noindex, follow" />' : null,
    `<meta property="og:title" content="${page.title.replace(/"/g, '&quot;')}" />`,
    `<meta property="og:description" content="${page.description.replace(/"/g, '&quot;')}" />`,
    '<meta property="og:type" content="website" />',
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    page.faqs.length > 0
      ? `<script type="application/ld+json">${JSON.stringify(faqPageJsonLd(page.faqs))}</script>`
      : null,
  ]
    .filter(Boolean)
    .join('\n    ')

  const html = shell.replace('</head>', `    ${tagsHtml}\n  </head>`)

  const outDir = page.route ? path.join(distDir, page.route) : distDir
  mkdirSync(outDir, { recursive: true })
  writeFileSync(path.join(outDir, 'index.html'), html)
  console.log(`Prerenderizado: /${page.route}  ->  ${path.relative(distDir, outDir)}/index.html`)
}
