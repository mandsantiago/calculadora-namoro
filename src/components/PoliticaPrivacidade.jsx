import React from 'react';

const PoliticaPrivacidade = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 bg-white rounded-xl shadow-sm my-8">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Política de Privacidade</h1>
      
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <section>
          <p>
            A sua privacidade é importante para nós. É política do site <strong>Calculadora de Namoro</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site.
          </p>
          <p className="mt-2">
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-purple-700 mb-3">1. Informações que coletamos</h2>
          <p>
            O nosso site utiliza ferramentas de análise de terceiros, como o <strong>Google Analytics</strong>, para nos ajudar a entender como os visitantes interagem com o site. Essas ferramentas podem coletar informações como o seu endereço IP, tipo de navegador, páginas visitadas e o tempo gasto em cada página. Esses dados são coletados de forma anônima e agregada.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-purple-700 mb-3">2. Uso de Cookies</h2>
          <p>
            Utilizamos cookies para armazenar informações, como as suas preferências pessoais quando visita o nosso site. Isso pode incluir um simples popup ou uma ligação em vários serviços que providenciamos.
          </p>
          <p className="mt-2">
            Você detém o poder de desligar os seus cookies, nas opções do seu navegador, ou efetuando alterações nas ferramentas de programas Anti-Virus. No entanto, isso poderá alterar a forma como interage com o nosso site ou outros sites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-purple-700 mb-3">3. Publicidade (Google AdSense)</h2>
          <p>
            O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Fornecedores de terceiros, incluindo o Google, usam cookies para veicular anúncios com base em visitas anteriores do usuário ao nosso site ou a outros sites.</li>
            <li>O uso de cookies de publicidade pelo Google permite que ele e seus parceiros veiculem anúncios para os usuários com base na visita a nossos sites e/ou a outros sites na Internet.</li>
            <li>Os usuários podem desativar a publicidade personalizada acessando as <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Configurações de anúncios do Google</a>.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-purple-700 mb-3">4. Links para sites de terceiros</h2>
          <p>
            O nosso site pode conter links para sites externos que não são operados por nós (como links de afiliados). Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-purple-700 mb-3">5. Consentimento</h2>
          <p>
            O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.
          </p>
        </section>

        <section className="pt-4 border-t border-gray-200 text-sm text-gray-500">
          <p>Esta política é efetiva a partir de Maio de 2026.</p>
        </section>
      </div>
    </div>
  );
};

export default PoliticaPrivacidade;
