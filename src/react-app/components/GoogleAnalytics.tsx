import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

interface GoogleAnalyticsProps {
  measurementId: string;
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  useEffect(() => {
    // Verifica se o measurementId foi fornecido
    if (!measurementId || measurementId === 'YOUR_MEASUREMENT_ID') {
      console.log('Google Analytics: Measurement ID não configurado');
      return;
    }

    // Inicializa o dataLayer se não existir
    window.dataLayer = window.dataLayer || [];
    
    // Função gtag
    window.gtag = function(...args: unknown[]) {
      window.dataLayer.push(args);
    };

    // Configuração inicial
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Carrega o script do Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const existingScript = document.querySelector(`script[src*="${measurementId}"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [measurementId]);

  return null; // Este componente não renderiza nada visível
}
