import { Target, Eye, Gem } from 'lucide-react';

export function About() {
  return (
    <section id="sobre" className="py-24 bg-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-black text-brand-blue uppercase mb-6">
            A Força Por Trás do <span className="text-brand-red">Resgate</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            A Sentrix Resgate nasceu com um propósito claro: levar segurança tática, tranquilidade e atendimento de alto nível para empresas, eventos, órgãos públicos e particulares em Sorocaba e região.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 shadow-md border-t-4 border-brand-blue">
            <div className="w-16 h-16 bg-brand-blue/10 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-brand-blue" />
            </div>
            <h3 className="text-2xl font-bold text-brand-blue uppercase mb-4">Nossa Missão</h3>
            <p className="text-slate-600">
              Prestar serviços de atendimento pré-hospitalar e transporte de pacientes com excelência, rapidez e responsabilidade absoluta, contribuindo ativamente para a preservação da vida e o bem-estar.
            </p>
          </div>

          <div className="bg-white p-8 shadow-md border-t-4 border-brand-red">
            <div className="w-16 h-16 bg-brand-red/10 flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-brand-red" />
            </div>
            <h3 className="text-2xl font-bold text-brand-blue uppercase mb-4">Nossa Visão</h3>
            <p className="text-slate-600">
              Ser a referência indiscutível em serviços de remoção médica, cobertura de eventos e atendimento de urgência, reconhecida pela qualidade técnica, confiança e compromisso irrestrito com a vida.
            </p>
          </div>

          <div className="bg-white p-8 shadow-md border-t-4 border-brand-blue">
            <div className="w-16 h-16 bg-brand-blue/10 flex items-center justify-center mb-6">
              <Gem className="w-8 h-8 text-brand-blue" />
            </div>
            <h3 className="text-2xl font-bold text-brand-blue uppercase mb-4">Nossos Valores</h3>
            <ul className="text-slate-600 space-y-2 font-medium">
              <li>• Ética e Transparência</li>
              <li>• Respeito Sagrado à Vida</li>
              <li>• Comprometimento Total</li>
              <li>• Humanização no Trato</li>
              <li>• Segurança em Primeiro Lugar</li>
              <li>• Excelência Operacional</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}