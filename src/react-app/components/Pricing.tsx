import { DollarSign, CreditCard, FileText, CheckCircle, Sparkles, Shield, Clock } from 'lucide-react';

export default function Pricing() {
  const paymentFeatures = [
    {
      icon: DollarSign,
      title: "Valores Transparentes",
      description: "R$ 150,00 por sessão de 50 minutos",
      details: "Investimento claro e sem surpresas para o seu processo terapêutico"
    },
    {
      icon: CreditCard,
      title: "Formas de Pagamento",
      description: "Pix, boleto ou link de pagamento",
      details: "Múltiplas opções para sua comodidade e facilidade"
    },
    {
      icon: FileText,
      title: "Nota Fiscal",
      description: "Emissão para todos os atendimentos",
      details: "Para reembolso do seu plano de saúde e organização financeira"
    }
  ];

  return (
    <section id="valores" className="py-24 relative overflow-hidden bg-gradient-to-br from-white via-rose-50/30 to-slate-50">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-emerald-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/3 to-blue-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 mb-6">
            <DollarSign size={16} style={{color: 'rgba(222, 146, 135, 0.95)'}} />
            <span>Valores e Pagamento</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-8">
            transparência em{' '}
            <span className="bg-gradient-to-r from-primary to-rose-400 bg-clip-text text-transparent">
              cada detalhe
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-rose-300 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
            Para garantir a transparência e a organização do nosso processo, é importante que você 
            tenha clareza sobre os detalhes financeiros.
          </p>
        </div>

        {/* Main pricing card */}
        <div className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-100 overflow-hidden card-hover max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary to-rose-400 p-8 text-center">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock size={40} className="text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">Sessão Individual</h3>
              <p className="text-white/90 text-lg font-medium">50 minutos de atendimento personalizado</p>
            </div>
            
            <div className="p-12 text-center">
              <div className="mb-8">
                <div className="text-6xl font-bold text-gray-900 mb-2">R$ 150</div>
                <div className="text-gray-600 text-lg font-medium">por sessão</div>
              </div>
              
              <div className="bg-gradient-to-r from-primary/10 via-rose-50/50 to-primary/10 p-6 rounded-2xl border border-primary/20 mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Shield size={24} style={{color: 'rgba(222, 146, 135, 0.95)'}} />
                  <span className="text-lg font-bold text-gray-900">Pagamento Antecipado</span>
                </div>
                <p className="text-gray-600 font-medium">
                  A confirmação do nosso encontro se dá com o pagamento realizado antes da sessão.
                </p>
              </div>
              
              <a
                href="https://wa.me/553492522850?text=Olá! Gostaria de saber mais sobre os valores e formas de pagamento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-rose-400 text-white px-10 py-5 text-xl font-bold transition-all duration-300 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <span>Agendar Sessão</span>
              </a>
            </div>
          </div>
        </div>

        {/* Payment features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {paymentFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-rose-100/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={32} style={{color: 'rgba(222, 146, 135, 0.95)'}} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-lg font-bold text-primary mb-3">
                  {feature.description}
                </p>
                
                <p className="text-gray-600 font-medium leading-relaxed">
                  {feature.details}
                </p>
              </div>
            );
          })}
        </div>

        

        {/* Note about invoice */}
        <div className="mt-16 text-center">
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FileText size={28} style={{color: 'rgba(222, 146, 135, 0.95)'}} />
              <h4 className="text-2xl font-bold text-gray-900">Nota Fiscal Inclusa</h4>
            </div>
            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              <span className="text-primary font-semibold">Para sua comodidade:</span> Emito nota fiscal para todos os atendimentos, 
              permitindo que você utilize o reembolso do seu plano de saúde e mantenha sua organização financeira em dia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
