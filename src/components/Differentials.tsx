import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const differentials = [
  "Atendimento humanizado e focado no paciente",
  "Equipe tática rigorosamente treinada e qualificada",
  "Frota de ambulâncias com tecnologia de ponta",
  "Central de emergência operando 24 horas por dia",
  "Cobertura para pessoas físicas e jurídicas",
  "Transporte logístico municipal e interestadual",
  "Tempo de resposta otimizado (Agilidade extrema)",
  "Compromisso inegociável com a vida",
  "Equipamentos modernos de suporte avançado",
  "Segurança como pilar central de toda operação"
];

export function Differentials() {
  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80" 
              alt="Equipe médica preparada"
              className="w-full h-auto shadow-2xl border-4 border-brand-blue"
              loading="lazy"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-black text-brand-blue uppercase mb-8">
              Por Que A Sentrix é a <span className="text-brand-red">Escolha Definitiva?</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {differentials.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-brand-red shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-10">
              <a 
                href="https://wa.me/5515997816257?text=Quero%20contratar%20a%20Sentrix%20Resgate."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 font-bold uppercase tracking-wider transition-colors"
              >
                Garantir Minha Segurança Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}