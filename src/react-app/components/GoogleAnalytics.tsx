import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
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
    window.gtag = function() {
      window.dataLayer.push(arguments);
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

// Hook personalizado para tracking de eventos
export const useAnalytics = () => {
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  const trackPageView = (page_title: string, page_location: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title,
        page_location,
      });
    }
  };

  const trackWhatsAppClick = () => {
    trackEvent('click', 'contact', 'whatsapp_button');
  };

  const trackInstagramClick = () => {
    trackEvent('click', 'social', 'instagram_link');
  };

  const trackSectionView = (sectionName: string) => {
    trackEvent('view', 'section', sectionName);
  };

  const trackFormSubmit = (formName: string) => {
    trackEvent('submit', 'form', formName);
  };

  return {
    trackEvent,
    trackPageView,
    trackWhatsAppClick,
    trackInstagramClick,
    trackSectionView,
    trackFormSubmit,
  };
};
