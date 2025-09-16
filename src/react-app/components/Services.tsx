import { Users, User, Brain, Calendar, Clock, CheckCircle, Sparkles, Heart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Users,
      title: "Atendimento a Adolescentes",
      description: "Suporte especializado para jovens a partir de 12 anos, focado no desenvolvimento emocional e na compreensão de relacionamentos durante esta fase única da vida.",
      features: [
        "Acompanhamento individual personalizado",
        "Reunião mensal com pais/responsáveis",
        "Diálogo com instituições de ensino quando necessário"
      ],
      color: "from-primary to-primary",
      bgColor: "from-rose-50 to-pink-50",
      whatsappText: "Olá! Gostaria de agendar uma sessão para adolescente."
    },
    {
      icon: User,
      title: "Atendimento a Jovens e Adultos",
      description: "Um convite ao autoconhecimento, oferecendo estratégias para os desafios da vida adulta em sessões de 50 minutos dedicadas ao seu crescimento pessoal.",
      features: [
        "Escuta ativa e acolhedora",
        "Construção de recursos internos",
        "Promoção do bem-estar emocional"
      ],
      color: "from-primary to-primary",
      bgColor: "from-rose-50 to-pink-50",
      whatsappText: "Olá! Gostaria de agendar uma sessão de terapia."
    },
    {
      icon: Brain,
      title: "Vestibulandos e Pré-Vestibulandos",
      description: "Suporte especializado para estudantes em momentos de transição, ajudando a navegar ansiedades, medos e incertezas sobre o futuro com estratégias práticas.",
      features: [
        "Acolhimento de angústias do processo seletivo",
        "Auxílio na organização de rotina de estudos",
        "Estratégias para gerenciar pressão pré-prova"
      ],
      color: "from-primary to-primary",
      bgColor: "from-rose-50 to-pink-50",
      whatsappText: "Olá! Gostaria de agendar uma sessão para vestibulando."
    }
  ];

  return (
    <section id="servicos" className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-slate-50">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-emerald-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 mb-6">
            <Sparkles size={16} style={{color: 'rgba(222, 146, 135, 0.95)'}} />
            <span>Modalidades de Atendimento</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-8">
            serviços
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-rose-300 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 font-medium max-w-5xl mx-auto leading-relaxed">
            Meu trabalho terapêutico abrange diferentes modalidades de atendimento, tendo sempre como 
            fundamento a <span className="text-primary font-semibold">escuta atenta</span> e o{' '}
            <span className="text-primary font-semibold">acolhimento genuíno</span> em cada encontro.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 card-hover"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-50 group-hover:opacity-70 transition-all duration-500`}></div>
                
                <div className="relative p-10 lg:p-12">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    {/* Icon and title section */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-rose-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                        <IconComponent size={40} className="text-white" />
                      </div>
                    </div>
                    
                    {/* Content section */}
                    <div className="flex-1 space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-lg font-medium text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      
                      {/* Features list */}
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle size={20} className="flex-shrink-0" style={{color: 'rgba(222, 146, 135, 0.95)'}} />
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Additional info */}
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-200">
                          <Clock size={16} style={{color: 'rgba(222, 146, 135, 0.95)'}} />
                          <span className="text-gray-700 font-medium">50 minutos</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-200">
                          <Calendar size={16} style={{color: 'rgba(222, 146, 135, 0.95)'}} />
                          <span className="text-gray-700 font-medium">Online</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <div className="flex-shrink-0">
                      <a
                        href={`https://wa.me/553492522850?text=${encodeURIComponent(service.whatsappText)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-3 bg-gradient-to-r from-primary to-rose-400 text-white px-8 py-4 font-bold transition-all duration-300 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transform"
                      >
                        <span>Agendar Sessão</span>
                        <Heart size={20} className="transition-transform duration-300 group-hover/btn:scale-110" style={{color: 'white'}} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-rose-50/50 to-primary/10 p-12 rounded-3xl border border-primary/20 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Pronta para começar sua jornada?
            </h3>
            <p className="text-xl text-gray-600 font-medium mb-8">
              Entre em contato e vamos conversar sobre como posso ajudá-la.
            </p>
            <a
              href="https://wa.me/553492522850?text=Olá! Gostaria de conhecer mais sobre os serviços de terapia."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-rose-400 text-white px-10 py-5 text-xl font-bold transition-all duration-300 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <span>Fale Comigo</span>
              <Heart size={24} style={{color: 'white'}} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
