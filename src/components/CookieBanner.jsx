import { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já fez uma escolha anteriormente
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (!cookieConsent) {
      // Se não tem escolha salva, mostra o banner
      setIsVisible(true);
    } else if (cookieConsent === 'accepted') {
      // Se já aceitou antes, injeta os scripts
      injectAnalyticsScripts();
    }
  }, []);

  const injectAnalyticsScripts = () => {
    // Evita injetar o script mais de uma vez
    if (window.dataLayer) return;

    // Injeta o script do Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-Z5P117WE7Y';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Z5P117WE7Y');
    `;
    document.head.appendChild(script2);
    
    // Se tiver Pixel do Meta, você pode adicionar a injeção dele aqui também
  };

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    injectAnalyticsScripts();
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
    // Não injeta os scripts
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        <div className="flex-1 text-sm text-gray-600 leading-relaxed">
          <p>
            Utilizamos cookies para melhorar sua experiência no Data de Namoro! Eles nos ajudam a entender como você interage com o site, permitindo exibir conteúdos personalizados, analisar nosso tráfego (como dados demográficos) e otimizar nossas ferramentas. Ao clicar em 'Aceitar Todos', você concorda com o uso de cookies de acordo com a nossa Política de Privacidade.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <button
            onClick={handleReject}
            className="px-6 py-2.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors whitespace-nowrap"
          >
            Rejeitar ou Configurar
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2.5 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors whitespace-nowrap shadow-sm"
          >
            Aceitar Todos
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
