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
