import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainSection } from './components/PainSection';
import { Services } from './components/Services';
import { About } from './components/About';
import { Differentials } from './components/Differentials';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-brand-light">
      <Navbar />
      <main>
        <Hero />
        <PainSection />
        <Services />
        <Differentials />
        <About />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;