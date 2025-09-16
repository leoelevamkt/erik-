import { GraduationCap, Heart, BookOpen, Award, Sparkles, Quote } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-gradient-to-br from-white via-rose-50/30 to-slate-50">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-rose-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/3 to-rose-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 mb-6">
            <Heart size={16} style={{color: 'rgba(222, 146, 135, 0.95)'}} />
            <span>Conheça Minha História</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            sobre mim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-rose-300 rounded-full mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Photo */}
          <div className="order-2 lg:order-1 relative group">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/10 to-rose-100/20 rounded-3xl blur-2xl group-hover:blur-xl transition-all duration-500"></div>
              
              {/* Main photo container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <img 
                  src="https://mocha-cdn.com/0199154b-2c46-7529-88f9-389e8f67c5ca/WhatsApp-Image-2025-08-22-at-09.14.09.jpeg"
                  alt="Erika em seu consultório"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
              
              {/* Floating quote */}
              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-gray-100 max-w-xs animate-float">
                <Quote size={20} className="mb-2" style={{color: 'rgba(222, 146, 135, 0.95)'}} />
                <p className="text-sm font-medium text-gray-700">
                  "Vamos usar este espaço para dialogar e pensar em conjunto?"
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed font-medium text-gray-700">
                Olá! Sou a <span className="text-primary font-bold">Erika</span>, 
                <strong className="text-gray-900"> Psicóloga</strong> graduada pela Universidade Federal de Uberlândia com 
                especialização em atendimento clínico online.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-600">
                Além da minha identidade profissional, sou também corredora nas horas vagas, admiradora da música da Taylor Swift, 
                tutora carinhosa de duas gatinhas (Panda e Coala), e uma{' '}
                <strong className="text-primary">leitora voraz</strong> que encontra na literatura uma fonte constante de inspiração.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-600">
                Minha jornada profissional me levou a mergulhar profundamente em áreas como{' '}
                <strong className="text-primary">educação, desenvolvimento humano e processos de aprendizagem</strong>. 
                Atualmente, minha prática clínica é fundamentada no{' '}
                <strong className="text-primary">Construcionismo Social</strong> e outras perspectivas pós-modernas.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-600">
                Em meu trabalho como terapeuta, minha missão é construir junto com você um ambiente de confiança e acolhimento, 
                onde possamos{' '}
                <strong className="text-primary">mergulhar em suas narrativas pessoais</strong> e{' '}
                <strong className="text-primary">ressignificá-las juntos</strong>.
              </p>
            </div>

            {/* Personal traits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-sm card-hover">
                <BookOpen size={20} style={{color: 'rgba(222, 146, 135, 0.95)'}} />
                <span className="text-gray-700 font-medium">Leitora voraz</span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-sm card-hover">
                <Heart size={20} style={{color: 'rgba(222, 146, 135, 0.95)'}} />
                <span className="text-gray-700 font-medium">Tutora de pets</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-16">
          {/* Education Section */}
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm p-10 border border-gray-100 rounded-3xl shadow-xl card-hover">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-rose-100/30 rounded-2xl flex items-center justify-center">
                  <GraduationCap size={32} style={{color: 'rgba(222, 146, 135, 0.95)'}} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Formação</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-rose-300 rounded-full"></div>
                  <div className="pl-8">
                    <div className="flex items-center gap-2 mb-3">
                      <Award size={20} style={{color: 'rgba(222, 146, 135, 0.95)'}} />
                      <h4 className="text-xl font-bold text-gray-900">Bacharelado em Psicologia</h4>
                    </div>
                    <p className="text-gray-600 font-medium mb-2">
                      Universidade Federal de Uberlândia (UFU)
                    </p>
                    <p className="text-primary font-semibold">2014-2021</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-rose-300 rounded-full"></div>
                  <div className="pl-8">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles size={20} style={{color: 'rgba(222, 146, 135, 0.95)'}} />
                      <h4 className="text-xl font-bold text-gray-900">Construcionismo Social</h4>
                    </div>
                    <p className="text-gray-600 font-medium">
                      Especialização em abordagens pós-modernas e práticas narrativas voltadas para 
                      atendimentos individuais com foco em processos educacionais e transições de vida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="relative text-center">
            <div className="bg-gradient-to-r from-primary/10 via-rose-50/50 to-primary/10 p-12 rounded-3xl border border-primary/20 shadow-lg">
              <div className="max-w-4xl mx-auto">
                <Quote size={40} className="mx-auto mb-6" style={{color: 'rgba(222, 146, 135, 0.95)'}} />
                <blockquote className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                  "Estou aqui para acompanhá-la nesta jornada de descoberta e{' '}
                  <span className="text-primary">construção de uma vida mais autêntica e significativa</span>."
                </blockquote>
                <p className="text-xl text-gray-600 font-medium">
                  Será um prazer conhecê-la melhor!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
