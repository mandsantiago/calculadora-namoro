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
import { faqsHome, faqsBodas, faqsIdeias, faqsSimpatias } from '../src/data/faqs.js'

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

// Os FAQs vêm direto de src/data/faqs.js (o mesmo arquivo que as páginas
// usam), para que o JSON-LD do HTML puro seja idêntico ao texto exibido —
// antes eram cópias manuais, que já estavam diferentes das respostas reais.
// Títulos e descriptions continuam duplicados aqui: precisam bater com o
// <Seo> de cada página em src/pages/*.jsx.

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
    route: 'simpatias-para-ele-se-apaixonar',
    title: 'Simpatia para Ele se Apaixonar por Mim: 15 Rápidas e Fáceis',
    description: '15 simpatias rápidas e fáceis para ele se apaixonar por você, com origem de cada uma: Santo Antônio, ciganas, italianas, mexicanas e mais. Passo a passo simples.',
    faqs: faqsSimpatias,
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
