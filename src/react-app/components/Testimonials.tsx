import { useState, useEffect, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      initials: "B. T.",
      text: "Já fazem quase dois anos que caminho ao lado da Érika, e hoje não consigo me imaginar sem esse acompanhamento. Quando olho para trás, percebo o quanto evoluí desde que escolhi trilhar esse processo com ela. Com ela aprendo não só a buscar respostas, mas a solucionar as questões que me atravessam. Durante as sessões, me movimentar e pensar junto dela para mim, é muito gratificante. É um acompanhamento que desejo levar para a vida. Cada encontro é um passo de evolução, autoconhecimento e transformação. Sinto muito orgulho de quem me tornei."
    },
    {
      initials: "G. S.",
      text: "O meu processo terapêutico com a psicóloga Érika vem sendo desde a pandemia até hoje, acredito que vem sendo essencial para mim, esse apoio e esse lugar de escuta é muito importante pra mim! Me sinto acolhida, escutada e compreendida por ela. Acredito muito no trabalho de psicóloga da Érika e agradeço a você por isso."
    },
    {
      initials: "R. F.",
      text: "Meu processo de terapia com a melhor de Uberlândia e não estou exagerando! Conheci a Érika em um dos momentos mais difíceis da minha vida: eu estava no fundo do poço. Sem autoestima, sem autocuidado, sem confiança, sem amor-próprio… e presa em um relacionamento abusivo, com uma dependência emocional enorme. Logo na primeira sessão, me identifiquei com ela. Chorei do início ao fim, mas pela primeira vez me senti acolhida de verdade. A Érika não apenas ouviu minhas dores, ela as abraçou com calma, paciência, amor e respeito. Hoje sou uma nova Rafaela. Ela mudou a minha vida e com certeza, para melhor. Aprendi a reconhecer os meus limites, a entender o que aceito e o que não aceito. Redescobri meu amor-próprio e a confiança em mim mesma."
    },
    {
      initials: "M. R.",
      text: "Conheci a Érika em 2021 quando ela era psicóloga escolar, mas somente em 2025 tive a oportunidade de fazer acompanhamento clínico com ela. A Érika com seu olhar crítico e ao mesmo tempo carinhoso trouxe o cuidado que eu precisava, a orientação necessária e o acalento nos dias mais difíceis. A terapia ofertada por ela vai além de uma simples conversa, a compreensão das dores é parte fundamental, e isso eu só encontrei em nossas sessões, gratidão eterna por tudo que ela já fez e faz por mim."
    },
    {
      initials: "L. R.",
      text: "Meu processo de terapia com a Erika já completou ininterruptos 4 anos (e contando rs), entre choros, angústias, risadas, alegrias, comemorações e todos os tipos de sentimentos... A terapia me ajudou a sair de situações que já não me cabiam mais, a ter coragem de romper com padrões que eu não me identificava, a sempre me questionar e entender que minhas emoções são importantes, a acreditar que sou capaz e consigo além do que eu imagino. O processo em terapia demanda tempo, comprometimento e confiança, coisas que só sei hoje por todo o tempo que já passei com a Erika."
    },
    {
      initials: "J. M.",
      text: "Essa profissional única me acompanha desde o início da minha transição da escola para a vida adulta e me ensinou ferramentas para lidar com as novas situações, relações e atritos que encontrei na jornada, sempre com uma abordagem respeitosa e empática. Sou eternamente grata pelo carinho e aprendizados que a Érika me transmite!"
    },
    {
      initials: "A. L.",
      text: "Eu adoro fazer terapia com a Érika, de verdade! Me sinto super à vontade pra falar de tudo e sempre saio das sessões me sentindo melhor. Ela é incrível, super atenciosa e explica as coisas de um jeito que faz sentido. Acho que todo mundo deveria experimentar terapia, porque faz muita diferença no dia a dia e nos ajuda naquilo que nem sabíamos que precisávamos de ajuda."
    },
    {
      initials: "E. R.",
      text: "Para mim, falar sobre como a terapia me ajudou é muito simples… e pensar que nem sempre foi assim ou que tive essa visão é muito gratificante. A terapia para mim é um processo intenso, por vezes doloroso por tocar em feridas que muitas vezes não são visíveis ao outro. A liberdade que tenho hoje na minha vida para tomar decisões com confiança e autoestima é libertador. Acredito que a terapia para mim seja isso: liberdade. Você cativa seus pacientes e isso é lindo e com certeza é seu diferencial."
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            depoimentos
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 font-medium leading-relaxed mb-6">
              Os relatos apresentados neste espaço foram gentilmente compartilhados por pacientes que 
              aceitaram registrar sua experiência com o processo terapêutico.
            </p>
            <p className="text-sm text-gray-500 font-medium">
              Em respeito ao Código de Ética Profissional do Psicólogo (Resolução CFP nº 10/2005), que 
              garante o sigilo e a proteção da identidade de todos os atendidos, os nomes e informações 
              que possam identificar os pacientes foram preservados.
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 border border-gray-200"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 border border-gray-200"
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={20} />
          </button>

          {/* Testimonial Card */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0"
                >
                  <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 mx-2">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                        <Quote size={20} style={{color: 'rgba(222, 146, 135, 0.95)'}} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-black">
                          {testimonial.initials}
                        </h3>
                      </div>
                    </div>
                    
                    <blockquote className="text-gray-600 font-medium leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-gray-600 mb-6">
            Pronta para iniciar sua jornada de transformação?
          </p>
          <a
            href="https://wa.me/553492522850?text=Olá! Gostaria de agendar uma sessão de terapia."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 text-lg font-bold hover:bg-black transition-all duration-300 rounded-lg"
          >
            agende seu horário
          </a>
        </div>
      </div>
    </section>
  );
}
