import { motion } from 'framer-motion';
import { Siren, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          src="/ambulancia-hero.jpg" 
          alt="Ambulância de resgate"
          className="w-full h-full object-cover object-center"
          animate={{
            scale: [1, 1.08, 1],
            x: [0, 15, 0],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 25,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/95 via-brand-blue/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/50 text-white px-4 py-1.5 mb-6 backdrop-blur-sm">
              <Siren className="w-4 h-4 text-brand-red animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-wider">Atendimento 24 Horas em Sorocaba</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 uppercase text-shadow-md">
              Quando Cada Segundo Conta, <span className="text-brand-red">Nós Somos a Sua Linha de Vida.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 mb-10 font-medium max-w-2xl text-shadow-sm">
              Soluções implacáveis em atendimento pré-hospitalar, remoções seguras e cobertura médica para eventos. Agilidade, precisão e compromisso absoluto com a vida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/5515997816257?text=Olá,%20preciso%20de%20atendimento%20de%20urgência."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-brand-red hover:bg-red-700 text-white px-8 py-4 text-lg font-black uppercase tracking-wider transition-all"
              >
                Solicitar Resgate Imediato
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#servicos"
                className="flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-brand-blue text-lg font-bold uppercase tracking-wider transition-all"
              >
                Conhecer Soluções
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}