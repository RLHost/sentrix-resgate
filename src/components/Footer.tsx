import { MapPin, Phone, Mail, HeartPulse } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-blue pt-16 pb-8 border-t-8 border-brand-red">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/sentrix-logo.png" 
                alt="Sentrix Resgate" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Segurança, Agilidade e Cuidado em Todos os Momentos. Especialistas em APH, remoções e cobertura de eventos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Soluções</h4>
            <ul className="space-y-3">
              <li><a href="#servicos" className="text-slate-400 hover:text-brand-red transition-colors">Remoções de Pacientes</a></li>
              <li><a href="#servicos" className="text-slate-400 hover:text-brand-red transition-colors">Cobertura de Eventos</a></li>
              <li><a href="#servicos" className="text-slate-400 hover:text-brand-red transition-colors">Área Protegida</a></li>
              <li><a href="#servicos" className="text-slate-400 hover:text-brand-red transition-colors">Atendimento Empresarial</a></li>
              <li><a href="#servicos" className="text-slate-400 hover:text-brand-red transition-colors">Atendimento Pré-Hospitalar</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Central de Atendimento</h4>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3">
                  <Phone className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <span className="block text-slate-400 text-sm uppercase mb-1">Plantão 24h / WhatsApp</span>
                  <a href="https://wa.me/5515997816257" className="text-white font-bold text-lg hover:text-brand-red transition-colors">
                    (15) 99781-6257
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3">
                  <Mail className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <span className="block text-slate-400 text-sm uppercase mb-1">E-mail Comercial</span>
                  <a href="mailto:contato@sentrixresgate.com.br" className="text-white font-bold hover:text-brand-red transition-colors break-all">
                    contato@sentrixresgate.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:col-span-2">
                <div className="bg-slate-800 p-3">
                  <MapPin className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <span className="block text-slate-400 text-sm uppercase mb-1">Base Operacional</span>
                  <span className="text-white font-bold">
                    Sorocaba - SP | Atendimento em toda a região e interestadual.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-500 text-sm text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} Sentrix Resgate. Todos os direitos reservados.
          </p>
          <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">
            Agilidade, Precisão e Compromisso com a Vida.
          </p>
        </div>
      </div>
    </footer>
  );
}