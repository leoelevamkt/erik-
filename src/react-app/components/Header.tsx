import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useAnalytics } from '@/react-app/hooks/useAnalytics';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { trackWhatsAppClick, trackSectionView } = useAnalytics();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      trackSectionView(sectionId);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-md z-50 border-b border-white/20" style={{ background: 'linear-gradient(135deg, rgba(222, 146, 135, 0.95) 0%, rgba(222, 146, 135, 0.9) 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-white/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <img 
                src="https://mocha-cdn.com/0199154b-2c46-7529-88f9-389e8f67c5ca/7-Photoroom.png"
                alt="Erika Pires Reis Logo"
                className="w-16 h-16 object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-6">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-white transition-all duration-300 font-medium hover:text-black relative group px-3 py-2 rounded-lg hover:bg-white/10"
            >
              <span className="relative z-10">sobre mim</span>
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-white transition-all duration-300 font-medium hover:text-black relative group px-3 py-2 rounded-lg hover:bg-white/10"
            >
              <span className="relative z-10">serviços</span>
            </button>
            <button 
              onClick={() => scrollToSection('processo')}
              className="text-white transition-all duration-300 font-medium hover:text-black relative group px-3 py-2 rounded-lg hover:bg-white/10"
            >
              <span className="relative z-10">processo</span>
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-white transition-all duration-300 font-medium hover:text-black relative group px-3 py-2 rounded-lg hover:bg-white/10"
            >
              <span className="relative z-10">depoimentos</span>
            </button>
            <button 
              onClick={() => scrollToSection('duvidas')}
              className="text-white transition-all duration-300 font-medium hover:text-black relative group px-3 py-2 rounded-lg hover:bg-white/10"
            >
              <span className="relative z-10">FAQ</span>
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-white transition-all duration-300 font-medium hover:text-black relative group px-3 py-2 rounded-lg hover:bg-white/10"
            >
              <span className="relative z-10">contato</span>
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <a
              href="https://wa.me/553492522850?text=Olá! Gostaria de agendar uma sessão de terapia."
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppClick}
              className="relative group text-white px-6 py-3 text-sm font-bold hover:bg-white border border-white/50 transition-all duration-300 flex items-center gap-2 rounded-xl backdrop-blur-sm hover:shadow-lg hover:shadow-white/20 hover:scale-105 hover:text-black"
              style={{ background: 'rgba(255, 255, 255, 0.1)' }}
            >
              <MessageCircle size={16} className="transition-transform duration-300 group-hover:scale-110" />
              <span>Agendar Sessão</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-white transition-colors font-semibold hover:text-black"
              >
                sobre mim
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left text-white transition-colors font-semibold hover:text-black"
              >
                serviços
              </button>
              <button 
                onClick={() => scrollToSection('processo')}
                className="text-left text-white transition-colors font-semibold hover:text-black"
              >
                processo terapêutico
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="text-left text-white transition-colors font-semibold hover:text-black"
              >
                depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('duvidas')}
                className="text-left text-white transition-colors font-semibold hover:text-black"
              >
                perguntas frequentes
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-white transition-colors font-semibold hover:text-black"
              >
                contato
              </button>
              <a
                href="https://wa.me/553492522850?text=Olá! Gostaria de agendar uma sessão de terapia."
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppClick}
                className="text-white px-6 py-2 text-sm font-bold hover:bg-white hover:text-black border border-white transition-all duration-300 flex items-center gap-2 w-fit rounded-lg"
                style={{ backgroundColor: 'transparent' }}
              >
                <MessageCircle size={16} />
                agendar sessão
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
