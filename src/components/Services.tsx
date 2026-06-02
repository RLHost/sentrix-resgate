import { motion } from 'framer-motion';
import { Ambulance, Activity, ShieldCheck, Building2, Stethoscope, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Ambulance className="w-10 h-10" />,
    title: "Remoção de Pacientes",
    description: "Transporte seguro, humanizado e monitorado entre residências, hospitais e clínicas. Realizamos remoções simples, UTI, alta hospitalar e trajetos de longa distância (interestadual).",
    color: "border-brand-red"
  },
  {
    icon: <Activity className="w-10 h-10" />,
    title: "Cobertura de Eventos",
    description: "Blindagem médica completa para shows, rodeios, eventos corporativos e competições esportivas. Estrutura dimensionada segundo exigências dos órgãos fiscalizadores.",
    color: "border-brand-blue"
  },
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    title: "Área Protegida",
    description: "Proteção contínua para empresas, condomínios e escolas. Atendimento emergencial exclusivo no local para mal súbito, acidentes e emergências clínicas.",
    color: "border-brand-red"
  },
  {
    icon: <Building2 className="w-10 h-10" />,
    title: "Atendimento Empresarial",
    description: "Soluções sob medida: cobertura de obras, plantões médicos em indústrias e ambulâncias de prontidão para garantir a segurança dos seus colaboradores.",
    color: "border-brand-blue"
  },
  {
    icon: <Stethoscope className="w-10 h-10" />,
    title: "Atendimento Pré-Hospitalar (APH)",
    description: "Equipes táticas treinadas para resposta imediata em traumas, acidentes de trânsito e emergências cardíacas/respiratórias, estabilizando a vítima até o hospital.",
    color: "border-brand-red"
  }
];

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-red font-bold tracking-widest uppercase mb-2 block">A Cura Para a Sua Insegurança</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight">
              Arsenal Completo de <span className="text-brand-red">Sobrevivência & Resgate</span>
            </h2>
          </div>
          <a 
            href="https://wa.me/5515997816257?text=Gostaria%20de%20saber%20mais%20sobre%20os%20serviços."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-bold uppercase hover:text-brand-red transition-colors"
          >
            Falar com um Especialista <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ delay: index * 0.1 }}
              className={`bg-slate-800 p-8 border-t-4 ${service.color} hover:bg-slate-700 transition-colors group`}
            >
              <div className="text-brand-red mb-6 group-hover:scale-110 transition-transform origin-left">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4">
                {service.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}