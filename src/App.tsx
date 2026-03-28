/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Instagram, 
  Search, 
  MousePointerClick, 
  LineChart, 
  Monitor, 
  Settings, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2,
  Menu,
  X,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Components ---

const Logo = () => (
  <div className="flex items-center gap-3 md:gap-5 group cursor-pointer">
    {/* Ícone CM recriado em SVG */}
    <div className="relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 shrink-0 text-ink-900 transition-transform duration-700 ease-out group-hover:scale-105">
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="miter">
        {/* Letra C */}
        <path d="M 64 24 A 32 32 0 1 0 64 76" strokeLinecap="butt" />
        {/* Letra M */}
        <path d="M 40 76 L 40 32 L 58 50 L 76 32 L 76 76" strokeLinecap="butt" />
      </svg>
    </div>
    
    {/* Texto lado a lado, redimensionado para grande destaque */}
    <div className="flex flex-col justify-center pl-3 md:pl-5 border-l-[2px] border-ink-200/40 py-1">
      <span className="font-sans font-bold text-ink-900 leading-none tracking-[0.25em] text-base md:text-2xl uppercase">
        Marketing
      </span>
      <span className="font-sans font-bold text-ink-900 leading-none tracking-[0.25em] text-base md:text-2xl mt-1.5 md:mt-2 uppercase">
        E Gestão
      </span>
    </div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Processo', href: '#processo' },
    { name: 'Resultados', href: '#resultados' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#"><Logo /></a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-ink-600 hover:text-beige-800 transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contato" className="bg-ink-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-beige-800 transition-colors">
            Falar com Especialista
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-ink-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col gap-4 border-t border-beige-100">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-ink-600 py-2">
              {link.name}
            </a>
          ))}
          <a href="#contato" onClick={() => setIsMobileMenuOpen(false)} className="bg-ink-900 text-white px-6 py-3 rounded-full text-center text-sm font-medium mt-2">
            Falar com Especialista
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <div className="inline-block px-4 py-1.5 bg-beige-100 text-beige-900 text-xs font-semibold tracking-wider uppercase rounded-full mb-6">
          Agência Full-Service
        </div>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-ink-900 mb-6">
          Elevamos sua marca ao <span className="text-beige-800 italic">topo do mercado.</span>
        </h1>
        <p className="text-lg text-ink-600 mb-8 max-w-lg leading-relaxed">
          Estratégias de marketing digital, design e tecnologia para resultados reais e duradouros. Transformamos visões em negócios líderes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contato" className="bg-ink-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-beige-800 transition-colors flex items-center justify-center gap-2">
            Agendar Diagnóstico <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#servicos" className="bg-white text-ink-900 border border-beige-200 px-8 py-4 rounded-full text-sm font-medium hover:bg-beige-50 transition-colors flex items-center justify-center">
            Nossos Serviços
          </a>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
      >
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
          alt="Reunião estratégica" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent"></div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="sobre" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <img 
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" 
          alt="Equipe CM Marketing" 
          className="rounded-2xl shadow-lg"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -bottom-8 -right-8 bg-beige-100 p-8 rounded-2xl shadow-xl hidden md:block">
          <p className="font-serif text-4xl text-ink-900 mb-2">10+</p>
          <p className="text-sm text-ink-600 font-medium uppercase tracking-wider">Anos de<br/>Experiência</p>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-serif text-4xl md:text-5xl text-ink-900 mb-6">Sobre a CM</h2>
        <p className="text-ink-600 text-lg mb-6 leading-relaxed">
          Somos mais que uma agência; somos seus parceiros estratégicos. A <strong>CM Marketing e Gestão</strong> nasceu com o propósito de unir criatividade, dados e tecnologia para construir marcas inesquecíveis e negócios altamente rentáveis.
        </p>
        <p className="text-ink-600 text-lg mb-8 leading-relaxed">
          Nossa abordagem é minimalista na forma, mas profunda na execução. Acreditamos que o verdadeiro luxo no marketing digital é a clareza, a precisão e o retorno sobre o investimento.
        </p>
        <ul className="space-y-4">
          {['Foco absoluto em performance e ROI', 'Design sofisticado e funcional', 'Transparência e atendimento personalizado'].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-ink-800 font-medium">
              <CheckCircle2 className="text-beige-800 w-5 h-5" /> {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    { icon: Instagram, title: 'Social Media', desc: 'Consultoria e gestão estratégica de redes sociais para construir autoridade e comunidade.' },
    { icon: Search, title: 'Estratégias de SEO', desc: 'Otimização avançada para colocar sua marca no topo das buscas do Google organicamente.' },
    { icon: MousePointerClick, title: 'Tráfego Pago', desc: 'Gestão de anúncios (Ads) com foco em conversão e maximização do ROI.' },
    { icon: LineChart, title: 'Planejamento', desc: 'Desenvolvimento de planos de marketing abrangentes alinhados aos objetivos do seu negócio.' },
    { icon: Monitor, title: 'Criação de Sites', desc: 'Desenvolvimento de sites e landing pages de alta performance, responsivos e elegantes.' },
    { icon: Settings, title: 'Automação', desc: 'Implementação de CRMs e automações de marketing para escalar suas vendas.' },
    { icon: ShieldCheck, title: 'Registro de Marcas', desc: 'Assessoria completa para proteger o seu maior ativo: a identidade da sua empresa.' },
  ];

  return (
    <section id="servicos" className="py-24 bg-beige-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-ink-900 mb-6">Nossa Expertise</h2>
          <p className="text-ink-600 text-lg">
            Soluções completas e integradas para dominar o ambiente digital, apresentadas com a clareza que sua marca merece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-beige-100 flex flex-col items-center text-center group transition-all hover:shadow-md"
            >
              <div className="w-16 h-16 bg-beige-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-beige-100 transition-colors">
                <service.icon className="w-8 h-8 text-beige-800" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif font-semibold text-xl text-ink-900 mb-3 uppercase tracking-wide text-sm">{service.title}</h3>
              <p className="text-ink-600 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
          
          {/* Empty card to balance the 7 items in a 4-col grid, acting as a CTA */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.7 }}
             className="bg-ink-900 p-8 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center group transition-all hover:bg-ink-800"
          >
             <h3 className="font-serif font-semibold text-xl text-white mb-4">Precisa de uma solução personalizada?</h3>
             <a href="#contato" className="text-beige-200 text-sm font-medium flex items-center gap-2 group-hover:text-white transition-colors">
               Fale conosco <ArrowRight className="w-4 h-4" />
             </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { num: '01', title: 'Diagnóstico', desc: 'Análise profunda do seu cenário atual, concorrentes e oportunidades de mercado.' },
    { num: '02', title: 'Planejamento', desc: 'Desenho da estratégia sob medida, definindo canais, orçamento e metas claras.' },
    { num: '03', title: 'Execução', desc: 'Implementação impecável por nossa equipe de especialistas em design, tech e mídia.' },
    { num: '04', title: 'Otimização', desc: 'Análise constante de dados para refinar campanhas e maximizar o retorno (ROI).' },
  ];

  return (
    <section id="processo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="font-serif text-4xl md:text-5xl text-ink-900 mb-6">Nosso Processo</h2>
            <p className="text-ink-600 text-lg mb-8">
              Uma metodologia testada e validada para garantir que cada ação de marketing gere impacto real no seu faturamento.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
              alt="Análise de dados" 
              className="rounded-2xl shadow-md w-full h-64 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-beige-50 rounded-2xl border border-beige-100"
              >
                <span className="font-serif text-5xl text-beige-200 block mb-4">{step.num}</span>
                <h3 className="font-serif text-2xl text-ink-900 mb-3">{step.title}</h3>
                <p className="text-ink-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Results = () => (
  <section id="resultados" className="py-24 bg-ink-900 text-white">
    <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
      <h2 className="font-serif text-4xl md:text-5xl mb-16">Resultados que Falam</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {[
          { metric: '+300%', label: 'Aumento em Vendas' },
          { metric: '50M+', label: 'Impressões Geradas' },
          { metric: '150+', label: 'Projetos Entregues' },
          { metric: '98%', label: 'Retenção de Clientes' },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center"
          >
            <span className="font-serif text-4xl md:text-5xl text-beige-300 mb-2">{stat.metric}</span>
            <span className="text-sm uppercase tracking-wider text-ink-400 font-medium">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section id="contato" className="py-24 bg-beige-100 relative overflow-hidden">
    {/* Decorative background element */}
    <div className="absolute -top-24 -right-24 w-96 h-96 bg-beige-200 rounded-full blur-3xl opacity-50"></div>
    
    <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
      <h2 className="font-serif text-4xl md:text-6xl text-ink-900 mb-6">Pronto para transformar sua marca?</h2>
      <p className="text-ink-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
        Agende uma consultoria gratuita e descubra como nossas estratégias podem escalar o seu negócio de forma elegante e previsível.
      </p>
      <form className="max-w-md mx-auto space-y-4 text-left">
        <div>
          <input type="text" placeholder="Seu Nome" className="w-full px-6 py-4 rounded-xl border border-beige-200 bg-white focus:outline-none focus:ring-2 focus:ring-beige-800 transition-shadow" />
        </div>
        <div>
          <input type="email" placeholder="Seu E-mail Corporativo" className="w-full px-6 py-4 rounded-xl border border-beige-200 bg-white focus:outline-none focus:ring-2 focus:ring-beige-800 transition-shadow" />
        </div>
        <div>
          <input type="text" placeholder="Telefone / WhatsApp" className="w-full px-6 py-4 rounded-xl border border-beige-200 bg-white focus:outline-none focus:ring-2 focus:ring-beige-800 transition-shadow" />
        </div>
        <button type="button" className="w-full bg-ink-900 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-beige-800 transition-colors mt-2">
          Solicitar Contato
        </button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white pt-20 pb-10 border-t border-beige-100">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <Logo />
          <p className="text-ink-600 mt-6 max-w-sm">
            Consultoria e gestão de marketing digital focada em resultados reais, design sofisticado e tecnologia.
          </p>
        </div>
        <div>
          <h4 className="font-serif font-semibold text-ink-900 mb-6 uppercase tracking-wider text-sm">Links Rápidos</h4>
          <ul className="space-y-3">
            {['Sobre Nós', 'Serviços', 'Metodologia', 'Cases de Sucesso', 'Contato'].map((link, i) => (
              <li key={i}><a href="#" className="text-ink-600 hover:text-beige-800 transition-colors text-sm">{link}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-serif font-semibold text-ink-900 mb-6 uppercase tracking-wider text-sm">Contato</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-ink-600 text-sm">
              <Mail className="w-5 h-5 text-beige-800 shrink-0" /> contato@cmmarketing.com.br
            </li>
            <li className="flex items-start gap-3 text-ink-600 text-sm">
              <Phone className="w-5 h-5 text-beige-800 shrink-0" /> +55 (11) 99999-9999
            </li>
            <li className="flex items-start gap-3 text-ink-600 text-sm">
              <MapPin className="w-5 h-5 text-beige-800 shrink-0" /> Av. Paulista, 1000 - São Paulo, SP
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-beige-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-ink-400 text-sm">© {new Date().getFullYear()} CM Marketing e Gestão. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <a href="#" className="text-ink-400 hover:text-ink-900 transition-colors">Instagram</a>
          <a href="#" className="text-ink-400 hover:text-ink-900 transition-colors">LinkedIn</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans text-ink-900 selection:bg-beige-200 selection:text-ink-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Results />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

