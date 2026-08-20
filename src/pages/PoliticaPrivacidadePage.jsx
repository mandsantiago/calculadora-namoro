import { Helmet } from 'react-helmet-async'
import PoliticaPrivacidade from '@/components/PoliticaPrivacidade.jsx'

const PoliticaPrivacidadePage = () => (
  <>
    <Helmet>
      <title>Política de Privacidade | Calculadora de Namoro</title>
      <meta name="robots" content="noindex, follow" />
      <link rel="canonical" href="https://datadenamoro.com.br/politica-de-privacidade" />
    </Helmet>
    <PoliticaPrivacidade />
  </>
)

export default PoliticaPrivacidadePage
