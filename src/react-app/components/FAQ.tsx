import { useState } from 'react';
import { Plus, Minus, HelpCircle, Sparkles, CheckCircle } from 'lucide-react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Como funciona a terapia? O que esperar da terapia?",
      answer: "A terapia é um espaço pensado para você, onde pode trazer suas histórias, sentimentos e experiências sem julgamentos. Mais do que buscar respostas prontas, é um processo de construção conjunta: vamos explorar os sentidos, criar novas perspectivas e ampliar possibilidades de escolha diante da sua vida. Não existe um caminho único ou linear, cada encontro é uma oportunidade de descoberta. Algumas vezes pode ser leve e trazer alívio imediato, outras pode mexer em questões mais profundas. O importante é que você não estará sozinho nesse percurso: caminharemos juntos, no seu tempo, respeitando suas necessidades. Acolho cada pessoa em sua singularidade, acreditando que é no diálogo e na relação que mudanças e novas compreensões podem acontecer."
    },
    {
      question: "Preciso ter um \"problema grave\" para começar terapia?",
      answer: "Não. A terapia pode ser procurada em diferentes momentos: para lidar com dificuldades específicas, crises emocionais, ou simplesmente para se conhecer melhor e ampliar possibilidades de vida."
    },
    {
      question: "Em quanto tempo vou perceber resultados?",
      answer: "Não existe um prazo único. Algumas pessoas sentem mudanças logo nas primeiras sessões, outras percebem transformações mais sutis ao longo do processo. O importante é respeitar seu tempo e caminhar junto nessa construção."
    },
    {
      question: "O que eu preciso falar na sessão?",
      answer: "O que for importante para você. Pode ser algo que aconteceu na semana, uma lembrança, um incômodo ou até mesmo o silêncio — tudo isso tem espaço e sentido dentro da terapia."
    }
  ];

  return (
    <section id="duvidas" className="py-24 relative overflow-hidden bg-gradient-to-br from-white via-slate-50/30 to-gray-50">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/3 to-rose-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 mb-6">
            <HelpCircle size={16} style={{color: 'rgba(222, 146, 135, 0.95)'}} />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-8">
            dúvidas frequentes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-rose-300 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
            Aqui estão as respostas para as perguntas mais comuns sobre o processo terapêutico. 
            Se tiver outras dúvidas, não hesite em entrar em contato!
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            
            return (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-primary/5 hover:to-rose-50/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 flex-1 pr-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-rose-100/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <HelpCircle size={20} style={{color: 'rgba(222, 146, 135, 0.95)'}} />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen 
                        ? 'bg-primary text-white scale-110' 
                        : 'bg-gray-100 text-primary hover:bg-primary/10'
                    }`}>
                      {isOpen ? (
                        <Minus size={20} />
                      ) : (
                        <Plus size={20} />
                      )}
                    </div>
                  </div>
                </button>
                
                <div className={`transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-8 pb-8">
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex gap-4">
                        <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{color: 'rgba(222, 146, 135, 0.95)'}} />
                        <p className="font-medium leading-relaxed text-gray-700">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-rose-50/50 to-primary/10 p-12 rounded-3xl border border-primary/20 shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles size={32} style={{color: 'rgba(222, 146, 135, 0.95)'}} />
              <h3 className="text-3xl font-bold text-gray-900">Ainda tem dúvidas?</h3>
              <Sparkles size={32} style={{color: 'rgba(222, 146, 135, 0.95)'}} />
            </div>
            <p className="text-xl text-gray-600 font-medium mb-8 max-w-2xl mx-auto">
              Cada pessoa é única, e suas dúvidas também podem ser. 
              Estou aqui para esclarecer qualquer questão que você tenha.
            </p>
            <a
              href="https://wa.me/553492522850?text=Olá! Tenho algumas dúvidas sobre a terapia."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-rose-400 text-white px-10 py-5 text-xl font-bold transition-all duration-300 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <HelpCircle size={24} style={{color: 'white'}} />
              <span>Fale Comigo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
