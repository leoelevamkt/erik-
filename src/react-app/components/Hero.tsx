import { MessageCircle, ArrowDown, Heart, Star, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-rose-50"></div>
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-rose-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 relative z-10">
            

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                  Terapia
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary via-rose-400 to-primary bg-clip-text text-transparent">
                  Transformadora
                </span>
              </h1>
              
              <div className="relative">
                <p className="text-2xl md:text-3xl text-gray-600 font-medium mb-4">
                  Erika Pires Reis
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-primary to-rose-300 rounded-full"></div>
              </div>
              
              <p className="text-xl max-w-2xl font-medium leading-relaxed text-gray-700">
                Oferecendo um espaço seguro e acolhedor para{' '}
                <span className="text-primary font-semibold">explorar suas histórias</span>,{' '}
                <span className="text-primary font-semibold">construir novos significados</span> e descobrir 
                caminhos para uma{' '}
                <span className="text-primary font-semibold">vida mais plena e autêntica</span>.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-100 shadow-sm">
                <Heart size={16} style={{color: 'rgba(222, 146, 135, 0.95)'}} />
                <span className="text-gray-700 font-medium text-sm">Atendimento humanizado</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-100 shadow-sm">
                <Star size={16} style={{color: 'rgba(222, 146, 135, 0.95)'}} />
                <span className="text-gray-700 font-medium text-sm">Abordagem especializada</span>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="https://wa.me/553492522850?text=Olá! Gostaria de agendar uma sessão de terapia."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary to-rose-400 text-white px-8 py-4 text-lg font-bold transition-all duration-300 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-primary/25 hover:scale-105 transform"
              >
                <span>Agende Sua Sessão</span>
                <MessageCircle size={20} className="transition-transform duration-300 group-hover:scale-110" style={{color: 'rgba(222, 146, 135, 0.95)'}} />
              </a>
              
              <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: 'rgba(222, 146, 135, 0.95)'}}></div>
                <span>Especializada em adolescentes, jovens adultos e vestibulandos</span>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:opacity-80 transition-all duration-300 animate-bounce hover:scale-110"
                style={{color: 'rgba(222, 146, 135, 0.95)'}}
              >
                <ArrowDown size={28} />
              </button>
            </div>
          </div>

          {/* Photo Section */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-rose-300/20 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/30 to-rose-300/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-rose-200/40 to-primary/20 rounded-full blur-2xl"></div>
              
              {/* Main photo */}
              <div className="relative z-10">
                <div className="w-96 h-96 relative overflow-hidden rounded-full border-4 border-white shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <img 
                    src="https://mocha-cdn.com/0199154b-2c46-7529-88f9-389e8f67c5ca/WhatsApp-Image-2025-08-22-at-09.14.10-(1).jpeg"
                    alt="Erika Pires Reis - Psicóloga Clínica"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-12 -left-8 w-16 h-16 bg-gradient-to-br from-primary/20 to-rose-300/20 rounded-2xl backdrop-blur-sm border border-white/50 flex items-center justify-center animate-float">
                <Heart size={24} style={{color: 'rgba(222, 146, 135, 0.95)'}} />
              </div>
              <div className="absolute bottom-20 -right-8 w-20 h-20 bg-gradient-to-br from-rose-200/30 to-primary/20 rounded-2xl backdrop-blur-sm border border-white/50 flex items-center justify-center animate-float-delayed">
                <Sparkles size={28} style={{color: 'rgba(222, 146, 135, 0.95)'}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
