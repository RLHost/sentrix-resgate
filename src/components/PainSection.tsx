import { motion } from 'framer-motion';
import { AlertTriangle, ShieldAlert, Clock } from 'lucide-react';

export function PainSection() {
  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-brand-blue uppercase mb-6 leading-tight">
            Você Está Preparado Para o <span className="text-brand-red border-b-4 border-brand-red">Imprevisível?</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Emergências médicas não têm hora marcada. A falta de uma estrutura de resgate profissional pode transformar um incidente gerenciável em uma crise irreversível.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-white p-8 border-l-4 border-brand-red shadow-lg"
          >
            <Clock className="w-12 h-12 text-brand-red mb-6" />
            <h3 className="text-xl font-bold text-brand-blue uppercase mb-3">O Risco da Demora</h3>
            <p className="text-slate-600">
              Em paradas cardiorrespiratórias ou traumas graves, cada minuto sem atendimento especializado reduz drasticamente as chances de sobrevivência.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="bg-white p-8 border-l-4 border-brand-blue shadow-lg"
          >
            <AlertTriangle className="w-12 h-12 text-brand-blue mb-6" />
            <h3 className="text-xl font-bold text-brand-blue uppercase mb-3">Eventos Desprotegidos</h3>
            <p className="text-slate-600">
              Aglomerações sem cobertura médica adequada expõem organizadores a passivos legais enormes e colocam vidas em risco desnecessário.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="bg-white p-8 border-l-4 border-brand-red shadow-lg"
          >
            <ShieldAlert className="w-12 h-12 text-brand-red mb-6" />
            <h3 className="text-xl font-bold text-brand-blue uppercase mb-3">Empresas Vulneráveis</h3>
            <p className="text-slate-600">
              Acidentes de trabalho e mal súbitos no ambiente corporativo exigem resposta imediata. Não deixe a segurança da sua equipe nas mãos da sorte.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}