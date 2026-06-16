import { useState, useEffect } from 'react';
import { Menu, X, Phone, HeartPulse } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 150);
  };

  const navLinks = [
    { name: 'Início', id: 'inicio' },
    { name: 'Serviços', id: 'servicos' },
    { name: 'Diferenciais', id: 'diferenciais' },
    { name: 'Sobre Nós', id: 'sobre' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-blue shadow-lg py-3' : 'bg-brand-blue/95 backdrop-blur-sm py-5'}`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" onClick={(e) => handleNavClick(e, 'inicio')} className="flex items-center group bg-white px-3 py-1.5 rounded border-2 border-white shadow-md">
          <img 
            src="/sentrix-logo.png" 
            alt="Sentrix Resgate" 
            className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`} 
              onClick={(e) => handleNavClick(e, link.id)}
              className="text-slate-200 hover:text-white font-semibold text-sm uppercase tracking-wide transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5515997816257?text=Olá,%20preciso%20de%20atendimento%20da%20Sentrix%20Resgate."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white px-6 py-2.5 font-bold uppercase tracking-wide transition-all transform hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            Emergência
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-blue border-t border-slate-700 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="text-slate-200 text-lg font-bold uppercase tracking-wide py-2 border-b border-slate-700/50"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/5515997816257?text=Olá,%20preciso%20de%20atendimento%20da%20Sentrix%20Resgate."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-red text-white px-6 py-4 font-bold uppercase tracking-wide mt-4"
              >
                <Phone className="w-5 h-5" />
                Acionar Resgate Agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}