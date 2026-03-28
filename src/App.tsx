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
import React, { useState, useEffect } from 'react';

// --- Components ---

const Logo = ({ isLight = false }: { isLight?: boolean }) => {
  const textColor = isLight ? 'text-white' : 'text-ink-900';
  const borderColor = isLight ? 'border-white/40' : 'border-ink-200/40';

  return (
    <div className={`flex items-center gap-3 md:gap-5 group cursor-pointer ${textColor}`}>
      {/* Ícone CM recriado em SVG */}
      <div className="relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 shrink-0 transition-transform duration-700 ease-out group-hover:scale-105">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="miter">
          {/* Letra C */}
          <path d="M 64 24 A 32 32 0 1 0 64 76" strokeLinecap="butt" />
          {/* Letra M */}
          <path d="M 40 76 L 40 32 L 58 50 L 76 32 L 76 76" strokeLinecap="butt" />
        </svg>
      </div>

      {/* Texto lado a lado, redimensionado para grande destaque */}
      <div className={`flex flex-col justify-center pl-3 md:pl-5 border-l-[2px] py-1 transition-colors ${borderColor}`}>
        <span className="font-sans font-bold leading-none tracking-[0.25em] text-base md:text-2xl uppercase">
          Marketing
        </span>
        <span className="font-sans font-bold leading-none tracking-[0.25em] text-base md:text-2xl mt-1.5 md:mt-2 uppercase">
          E Gestão
        </span>
      </div>
    </div>
  );
};

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

  const lightMode = !isScrolled;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#"><Logo isLight={lightMode} /></a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors ${lightMode ? 'text-white/90 hover:text-white' : 'text-ink-600 hover:text-beige-800'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${lightMode ? 'bg-white text-ink-900 hover:bg-beige-50' : 'bg-ink-900 text-white hover:bg-beige-800'}`}
          >
            Falar com Especialista
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden ${lightMode ? 'text-white' : 'text-ink-900'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
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
  <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src="/background-hero.jpg"
        alt="Reunião estratégica"
        className="w-full h-full object-cover scale-105"
        referrerPolicy="no-referrer"
      />
      {/* Dark Overlays for text readability */}
      <div className="absolute inset-0 bg-ink-900/50 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/40 to-ink-900/70"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full mt-16 md:mt-0 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <div className="inline-block px-4 py-1.5 bg-beige-100/10 backdrop-blur-md border border-white/20 text-beige-50 text-xs font-semibold tracking-wider uppercase rounded-full mb-6 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform"></div>
          Agência Full-Service
        </div>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-[5rem] leading-[1.05] text-white mb-6 max-w-5xl">
          Elevamos sua marca ao <span className="text-beige-300 italic">topo do mercado.</span>
        </h1>
        <p className="text-lg md:text-xl text-beige-50/80 mb-10 max-w-2xl leading-relaxed font-light">
          Estratégias de marketing digital, design premium e performance para resultados duradouros. Transformamos visões em negócios líderes.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full sm:w-auto">
          <a href="#contato" className="w-full sm:w-auto bg-beige-300 text-ink-900 px-8 py-4 rounded-full text-sm font-bold hover:bg-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(238,228,211,0.4)] flex items-center justify-center gap-2">
            Agendar Diagnóstico <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#servicos" className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
            Nossos Serviços
          </a>
        </div>
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
          <p className="text-sm text-ink-600 font-medium uppercase tracking-wider">Anos de<br />Experiência</p>
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

const CTA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Se estiver rodando localmente (localhost), usa o Node.js. Se for o site real na Hostinger, usa o arquivo PHP nativo.
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const endpoint = isLocal ? '/api/contato' : '/api/contato.php';

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        form.reset();
      } else {
        console.error("Erro no formulário:", result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Erro de rede:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-24 bg-beige-100 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-beige-200 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <h2 className="font-serif text-4xl md:text-6xl text-ink-900 mb-6">Pronto para transformar sua marca?</h2>
        <p className="text-ink-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Agende uma consultoria gratuita e descubra como nossas estratégias podem escalar o seu negócio de forma elegante e previsível.
        </p>
        
        {submitStatus === 'success' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-sm border border-beige-200 text-center"
          >
            <div className="w-16 h-16 bg-beige-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-beige-800" />
            </div>
            <h3 className="font-serif text-2xl text-ink-900 mb-2">Solicitação Enviada!</h3>
            <p className="text-ink-600">Em breve, um de nossos especialistas entrará em contato com você.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
            <div>
              <input type="text" name="name" required placeholder="Seu Nome" className="w-full px-6 py-4 rounded-xl border border-beige-200 bg-white focus:outline-none focus:ring-2 focus:ring-beige-800 transition-shadow" />
            </div>
            <div>
              <input type="email" name="email" required placeholder="Seu E-mail Corporativo" className="w-full px-6 py-4 rounded-xl border border-beige-200 bg-white focus:outline-none focus:ring-2 focus:ring-beige-800 transition-shadow" />
            </div>
            <div>
              <input type="tel" name="phone" required placeholder="Telefone / WhatsApp" className="w-full px-6 py-4 rounded-xl border border-beige-200 bg-white focus:outline-none focus:ring-2 focus:ring-beige-800 transition-shadow" />
            </div>
            {/* Assunto customizado do email que você vai receber */}
            <input type="hidden" name="subject" value="Novo Lead: Diagnóstico CM Marketing" />
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-ink-900 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-beige-800 transition-colors mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>Enviando... <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div></>
              ) : (
                "Solicitar Contato"
              )}
            </button>
            
            {submitStatus === 'error' && (
              <p className="text-red-500 text-sm text-center mt-2">
                Ocorreu um erro ao enviar. Por favor, tente preencher novamente mais tarde.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
};

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
              <Mail className="w-5 h-5 text-beige-800 shrink-0" /> contato@cmarketingegestao.com.br
            </li>
            <li className="flex items-start gap-3 text-ink-600 text-sm">
              <Phone className="w-5 h-5 text-beige-800 shrink-0" /> +55 (21) 98009-5740
            </li>
            <li className="flex items-start gap-3 text-ink-600 text-sm">
              <MapPin className="w-5 h-5 text-beige-800 shrink-0" /> Av. Engenheiro richard, 148 - Grajaú - Rio de Janeiro, RJ
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

