import { MessageCircle, Phone, Instagram, MapPin, Clock, Heart, Sparkles, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-24 relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-rose-50/30">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-rose-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-primary/5 to-rose-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 mb-6">
            <Heart size={16} style={{color: 'rgba(222, 146, 135, 0.95)'}} />
            <span>Vamos Conversar</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-8">
            Que tal iniciarmos juntas esta{' '}
            <span className="bg-gradient-to-r from-primary to-rose-400 bg-clip-text text-transparent">
              jornada de transformação?
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-rose-300 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
            Se surgiu alguma questão ou curiosidade, não hesite em entrar em contato comigo! 
            Estou aqui para acolher suas dúvidas e ajudá-la a dar o primeiro passo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form/Info */}
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100 card-hover">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <MessageCircle size={28} style={{color: 'rgba(222, 146, 135, 0.95)'}} />
                Entre em Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/5 to-rose-50/50 rounded-2xl border border-primary/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-rose-400 rounded-xl flex items-center justify-center">
                    <Phone size={20} style={{color: 'white'}} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">WhatsApp</p>
                    <p className="text-gray-600 font-medium">(34) 92522-850</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/5 to-rose-50/50 rounded-2xl border border-primary/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-rose-400 rounded-xl flex items-center justify-center">
                    <Instagram size={20} style={{color: 'white'}} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Instagram</p>
                    <a 
                      href="https://www.instagram.com/psierikapires?igsh=MTBkMmRlbjNqc2lnMw==" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:text-primary/80 transition-colors"
                    >
                      @psierikapires
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/5 to-rose-50/50 rounded-2xl border border-primary/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-rose-400 rounded-xl flex items-center justify-center">
                    <MapPin size={20} style={{color: 'white'}} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Modalidade</p>
                    <p className="text-gray-600 font-medium">Atendimento Online</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/5 to-rose-50/50 rounded-2xl border border-primary/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-rose-400 rounded-xl flex items-center justify-center">
                    <Clock size={20} style={{color: 'white'}} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Horários</p>
                    <p className="text-gray-600 font-medium">Sessões de 50 minutos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="relative">
            <div className="bg-gradient-to-br from-white via-white to-primary/5 p-12 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden group">
              {/* Background decoration */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500" style={{color: 'rgba(222, 146, 135, 0.95)'}}>
                <Sparkles size={100} />
              </div>
              
              <div className="relative text-center space-y-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-rose-400 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-all duration-300">
                  <Heart size={40} style={{color: 'white'}} />
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Pronta para começar?
                  </h3>
                  <p className="text-lg text-gray-600 font-medium mb-8">
                    Clique no botão abaixo e vamos conversar sobre como posso ajudá-la 
                    em sua jornada de autoconhecimento e transformação.
                  </p>
                </div>
                
                <a
                  href="https://wa.me/553492522850?text=Olá! Gostaria de agendar uma sessão de terapia."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-4 bg-gradient-to-r from-primary to-rose-400 text-white px-12 py-6 text-xl font-bold transition-all duration-300 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transform glow-primary"
                >
                  <MessageCircle size={28} className="transition-transform duration-300 group-hover/btn:scale-110" style={{color: 'white'}} />
                  <span>Fale Comigo no WhatsApp</span>
                  <Send size={24} className="transition-transform duration-300 group-hover/btn:translate-x-1" style={{color: 'white'}} />
                </a>
                
                <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Resposta rápida garantida</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              <span className="text-primary font-semibold">Confidencialidade garantida:</span> Todas as conversas são 
              protegidas pelo sigilo profissional. Sua privacidade e bem-estar são minha prioridade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
