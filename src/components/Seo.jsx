import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://datadenamoro.com.br'
const SITE_NAME = 'Calculadora de Namoro'

/**
 * Componente central de SEO por página: título, meta description, canonical
 * e (opcionalmente) dados estruturados JSON-LD de FAQPage, gerados a partir
 * da lista de perguntas/respostas realmente exibida naquela página.
 *
 * path deve começar com "/" (ex: "/", "/bodas-de-casamento").
 */
const Seo = ({ title, description, path = '/', faqs = [] }) => {
  const url = `${SITE_URL}${path === '/' ? '' : path}`

  const faqJsonLd =
    faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.pergunta,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.resposta,
            },
          })),
        }
      : null

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_NAME} />
      {faqJsonLd && (
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      )}
    </Helmet>
  )
}

export default Seo
