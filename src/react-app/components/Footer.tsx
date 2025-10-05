import { Instagram, Heart, Sparkles, MapPin, Phone } from 'lucide-react';
import { useAnalytics } from '@/react-app/hooks/useAnalytics';

export default function Footer() {
  const { trackWhatsAppClick, trackInstagramClick } = useAnalytics();
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative">
        {/* Main footer content */}
        <div className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12 items-center">
              {/* Quote */}
              <div className="space-y-6 text-center md:text-left">
                <div className="relative">
                  <Sparkles size={40} className="mb-4 mx-auto md:mx-0" style={{color: 'rgba(222, 146, 135, 0.95)'}} />
                  <blockquote className="text-xl font-bold text-white leading-relaxed">
                    "Tudo que se olha com{' '}
                    <span className="bg-gradient-to-r from-primary to-rose-400 bg-clip-text text-transparent">
                      amor
                    </span>{' '}
                    cresce e floresce."
                  </blockquote>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start text-gray-300">
                  <Heart size={16} style={{color: 'rgba(222, 146, 135, 0.95)'}} />
                  <span className="text-sm font-medium">Filosofia de vida</span>
                </div>
              </div>

              {/* Brand */}
              <div className="text-center space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative w-24 h-24 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-all duration-300 overflow-hidden">
                    <img 
                      src="https://mocha-cdn.com/0199154b-2c46-7529-88f9-389e8f67c5ca/8.png"
                      alt="Erika Pires Reis Logo"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Erika Pires Reis</h3>
                  <p className="text-primary font-semibold">Psicóloga Clínica</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6 text-center md:text-right">
                <div className="space-y-4">
                  {/* Social Media */}
                  <div className="flex items-center gap-3 justify-center md:justify-end">
                    <span className="text-gray-300 font-medium">Siga-me:</span>
                    <a
                      href="https://www.instagram.com/psierikapires?igsh=MTBkMmRlbjNqc2lnMw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={trackInstagramClick}
                      className="group flex items-center gap-2 bg-gradient-to-r from-primary to-rose-400 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <Instagram size={18} className="group-hover:scale-110 transition-transform duration-300" style={{color: 'white'}} />
                      <span>@psierikapires</span>
                    </a>
                  </div>
                  
                  {/* Contact */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 justify-center md:justify-end">
                      <Phone size={18} style={{color: 'rgba(222, 146, 135, 0.95)'}} />
                      <a
                        href="https://wa.me/553492522850"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={trackWhatsAppClick}
                        className="text-white hover:text-primary transition-colors duration-300 font-medium"
                      >
                        (34) 92522-850
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3 justify-center md:justify-end">
                      <MapPin size={18} style={{color: 'rgba(222, 146, 135, 0.95)'}} />
                      <span className="text-gray-300 font-medium">Atendimento Online</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="text-gray-400 font-medium text-sm">
                  © 2025 Erika Pires Reis. Todos os direitos reservados.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  CRP: Registro profissional conforme legislação vigente
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Disponível para atendimento</span>
                </div>
                
                <a
                  href="https://wa.me/553492522850?text=Olá! Gostaria de agendar uma sessão de terapia."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackWhatsAppClick}
                  className="group bg-primary/20 hover:bg-primary text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 border border-primary/30 hover:border-primary"
                >
                  <span className="group-hover:scale-110 transition-transform duration-300 inline-block">
                    Agendar Sessão
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
