import { BookOpen, Lightbulb, Compass, Quote, Sparkles, ArrowRight } from 'lucide-react';

export default function Process() {
  const processSteps = [
    {
      icon: BookOpen,
      title: "Um espaço para a construção de novas narrativas",
      description: "No processo terapêutico, você encontrará um refúgio seguro para compartilhar suas inquietações, temores e aspirações. Muito além de simplesmente verbalizar, este é um espaço dedicado a reexaminar e reconstituir suas histórias de vida.",
      detail: "A terapia oferece a oportunidade de revisitar suas experiências sob uma nova ótica, descobrindo formas inéditas de interpretá-las e integrá-las. O objetivo não é eliminar o passado, mas sim construir um futuro fundamentado em perspectivas renovadas e mais saudáveis.",
      color: "from-primary to-primary",
      bgColor: "from-rose-50 to-pink-50"
    },
    {
      icon: Lightbulb,
      title: "Um mergulho no seu processo de aprendizado",
      description: "A terapia é um processo de aprendizado contínuo sobre si mesmo. Você vai aprender a identificar padrões de comportamento, a entender a origem de suas emoções e a desenvolver ferramentas para lidar com os desafios.",
      detail: "Se você está em um processo de vestibular ou em busca de um novo rumo na carreira, a terapia pode te ajudar a clarear seus objetivos e a encontrar estratégias para alcançá-los, assim como desenvolver autoconfiança.",
      color: "from-primary to-primary",
      bgColor: "from-rose-50 to-pink-50"
    },
    {
      icon: Compass,
      title: "Um acompanhamento para o autoconhecimento",
      description: "A terapia te oferece um acompanhamento para que você se torne o protagonista da sua própria vida. É um processo de conexão, onde você pode alinhar seus valores, objetivos e sonhos.",
      detail: "Esse é o caminho para um crescimento pessoal mais sólido, para lidar melhor com as suas emoções e para construir uma vida que seja mais fiel a quem você é. A terapia é um convite para essa jornada de autoconhecimento.",
      color: "from-primary to-primary",
      bgColor: "from-rose-50 to-pink-50"
    }
  ];

  return (
    <section id="processo" className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 mb-6">
            <Sparkles size={16} style={{color: 'rgba(222, 146, 135, 0.95)'}} />
            <span>Como Funciona a Terapia</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-8">
            sobre o processo da terapia
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-rose-300 rounded-full mx-auto"></div>
        </div>

        <div className="space-y-8 lg:space-y-12">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}>
                  {/* Icon section */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary to-rose-400 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500 rotate-3 group-hover:rotate-0">
                      <IconComponent size={60} className="text-white" />
                    </div>
                    {/* Floating number */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center border-4 border-primary/20">
                      <span className="text-xl font-bold text-primary">{index + 1}</span>
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="flex-1 relative">
                    <div className={`bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-gray-100 card-hover relative overflow-hidden`}>
                      {/* Background gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.bgColor} opacity-30 group-hover:opacity-50 transition-all duration-500`}></div>
                      
                      <div className="relative">
                        <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                        
                        <p className="text-lg font-medium text-gray-700 leading-relaxed mb-6">
                          {step.description}
                        </p>
                        
                        <div className="relative">
                          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-rose-300 rounded-full"></div>
                          <p className="text-gray-600 font-medium leading-relaxed pl-6">
                            {step.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connection line for next step */}
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center mt-8 lg:mt-12">
                    <div className="flex items-center gap-2 text-primary/60">
                      <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse"></div>
                      <ArrowRight size={24} className="animate-bounce" style={{color: 'rgba(222, 146, 135, 0.95)'}} />
                      <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-rose-50/50 to-primary/10 p-12 rounded-3xl border border-primary/20 shadow-lg">
            <Quote size={40} className="mx-auto mb-6" style={{color: 'rgba(222, 146, 135, 0.95)'}} />
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              A terapia é um convite para essa jornada de{' '}
              <span className="text-primary">autoconhecimento</span>
            </h3>
            <p className="text-2xl text-gray-600 font-medium mb-8">
              E você, está pronta para dar o primeiro passo?
            </p>
            <a
              href="https://wa.me/553492522850?text=Olá! Gostaria de começar minha jornada de autoconhecimento através da terapia."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-rose-400 text-white px-10 py-5 text-xl font-bold transition-all duration-300 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <span>Iniciar Minha Jornada</span>
              <Compass size={24} style={{color: 'white'}} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
