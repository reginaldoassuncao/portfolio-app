import { useState, useEffect, useRef } from 'react';
import { 
  User, 
  Code2, 
  GraduationCap, 
  Briefcase,
  MapPin,
  Calendar,
  Award,
  Zap,
  Coffee,
  Heart,
  ChevronRight,
  Shield,
  Wrench,
  TreePine
} from 'lucide-react';
import styles from './About.module.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Fallback para mobile: força visibilidade após 1 segundo se não foi ativado
    const fallbackTimer = setTimeout(() => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInViewport && !isVisible) {
          setIsVisible(true);
        }
      }
    }, 1000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [isVisible]);

  const personalInfo = [
    {
      icon: User,
      label: 'Nome',
      value: 'Reginaldo Assunção',
      color: '--color-primary'
    },
    {
      icon: Briefcase,
      label: 'Profissão',
      value: 'Maquinista - Vale (16 anos)',
      color: '--color-secondary'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Minas Gerais, Brasil',
      color: '--color-accent'
    },
    {
      icon: Code2,
      label: 'Foco Atual',
      value: 'Desenvolvimento de Software',
      color: '--color-primary'
    }
  ];

  const journeyCards = [
    {
      id: 'environmental',
      icon: TreePine,
      title: 'Engenharia Ambiental',
      subtitle: 'Formação Base',
      description: 'Primeira graduação que me ensinou a pensar de forma sustentável e analítica sobre problemas complexos.',
      highlights: ['Análise de Sistemas', 'Gestão de Processos', 'Sustentabilidade'],
      color: '#16a34a'
    },
    {
      id: 'safety',
      icon: Shield,
      title: 'Engenharia de Segurança',
      subtitle: 'Pós-graduação',
      description: 'Especialização que reforçou minha visão sobre prevenção, planejamento e gestão de riscos.',
      highlights: ['Gestão de Riscos', 'Normas e Processos', 'Prevenção'],
      color: '#dc2626'
    },
    {
      id: 'railway',
      icon: Wrench,
      title: 'Carreira na Vale',
      subtitle: '19 anos de dedicação (2005-2024)',
      description: 'Jornada desde Oficial de Operações (2005) até Maquinista (2008-atual). 16 anos de experiência que trouxeram disciplina, responsabilidade e precisão técnica.',
      highlights: ['19 anos Vale', 'Crescimento Profissional', 'Liderança Técnica'],
      color: '#ca8a04'
    },
    {
      id: 'development',
      icon: Code2,
      title: 'Análise e Desenvolvimento',
      subtitle: 'PUC Minas - Concluindo 2024',
      description: 'Nova jornada que une toda minha experiência técnica com a paixão por criar soluções digitais. Transição natural após quase 20 anos de evolução profissional.',
      highlights: ['Programação', 'Lógica de Sistemas', 'Transição de Carreira'],
      color: '--color-primary'
    }
  ];

  const skills = [
    { name: 'Análise de Problemas', level: 95 },
    { name: 'Gestão de Processos', level: 90 },
    { name: 'Responsabilidade Técnica', level: 98 },
    { name: 'JavaScript/React', level: 75 },
    { name: 'Aprendizado Contínuo', level: 100 }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Análise e Desenvolvimento de Sistemas',
      subtitle: 'PUC Minas - Concluindo',
      description: 'Finalizando pós-graduação em desenvolvimento de software',
      type: 'education',
      current: true
    },
    {
      year: '2022',
      title: 'Engenharia de Segurança do Trabalho',
      subtitle: 'Pós-graduação Concluída',
      description: 'Especialização em gestão de riscos e normas técnicas',
      type: 'education'
    },
    {
      year: '2019',
      title: 'Engenharia Ambiental',
      subtitle: 'Graduação Concluída',
      description: 'Formação em análise de sistemas e gestão ambiental sustentável',
      type: 'education'
    },
    {
      year: '2008-Atual',
      title: 'Maquinista',
      subtitle: 'Vale - 16 anos de experiência',
      description: 'Responsabilidade operacional e técnica no transporte ferroviário',
      type: 'work'
    },
    {
      year: '2005',
      title: 'Oficial de Operações Ferroviárias',
      subtitle: 'Vale - Início na carreira',
      description: 'Primeiro cargo na indústria ferroviária, base para crescimento profissional',
      type: 'work'
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className={`${styles.about} ${isVisible ? styles.visible : ''}`} 
      id="sobre"
    >
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            Sobre Mim
            <span className={styles.titleAccent}>.</span>
          </h2>
          <p className={styles.subtitle}>
            Uma jornada única que combina experiência técnica, 
            responsabilidade profissional e paixão por tecnologia
          </p>
        </div>

        {/* Personal Info Cards */}
        <div className={styles.personalInfo}>
          {personalInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div 
                key={index}
                className={styles.infoCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className={styles.infoIcon}
                  style={{ color: `var(${info.color})` }}
                >
                  <IconComponent size={24} />
                </div>
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>{info.label}</span>
                  <span className={styles.infoValue}>{info.value}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className={styles.content}>
          {/* Story Section */}
          <div className={styles.story}>
            <div className={styles.storyContent}>
              <h3 className={styles.storyTitle}>
                <Heart size={24} className={styles.heartIcon} />
                Minha História
              </h3>
              <div className={styles.storyText}>
                <p>
                  Olá! Sou <strong>Reginaldo Assunção</strong>, e minha trajetória de quase 20 anos na <strong>Vale</strong> 
                  é prova de que experiência sólida e paixão por aprender podem levar a qualquer lugar. 
                  Comecei em 2005 como <strong>Oficial de Operações Ferroviárias</strong> e desde 2008 atuo como 
                  <strong>maquinista</strong>, acumulando 16 anos de experiência nesta função.
                </p>
                <p>
                  Paralelamente à carreira operacional, busquei constante evolução acadêmica: me formei em 
                  <strong>Engenharia Ambiental</strong> (2019) e me especializei em <strong>Engenharia de 
                  Segurança do Trabalho</strong> (2022). Cada formação trouxe uma nova perspectiva sobre 
                  <em>análise de sistemas, gestão de riscos e processos</em>.
                </p>
                <p>
                  Agora, finalizando minha <strong>pós-graduação em Análise e Desenvolvimento de Sistemas 
                  na PUC Minas</strong>, encontro na programação a síntese perfeita de toda minha experiência: 
                  a precisão do maquinista, a visão sistêmica do engenheiro e a paixão por resolver problemas 
                  complexos através da tecnologia.
                </p>
              </div>
            </div>

            {/* Skills Progress */}
            <div className={styles.skillsSection}>
              <h4 className={styles.skillsTitle}>Competências Desenvolvidas</h4>
              <div className={styles.skillsList}>
                {skills.map((skill, index) => (
                  <div key={index} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPercentage}>{skill.level}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <div 
                        className={styles.skillProgress}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.2}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Journey Cards */}
          <div className={styles.journey}>
            <h3 className={styles.journeyTitle}>
              <GraduationCap size={24} />
              Jornada Profissional
            </h3>
            <div className={styles.journeyGrid}>
              {journeyCards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <div 
                    key={card.id}
                    className={`${styles.journeyCard} ${activeCard === card.id ? styles.active : ''}`}
                    onClick={() => setActiveCard(activeCard === card.id ? null : card.id)}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className={styles.cardHeader}>
                      <div 
                        className={styles.cardIcon}
                        style={{ 
                          backgroundColor: card.color.startsWith('--') ? `var(${card.color})` : card.color + '20',
                          color: card.color.startsWith('--') ? `var(${card.color})` : card.color
                        }}
                      >
                        <IconComponent size={24} />
                      </div>
                      <div className={styles.cardTitleGroup}>
                        <h4 className={styles.cardTitle}>{card.title}</h4>
                        <span className={styles.cardSubtitle}>{card.subtitle}</span>
                      </div>
                      <ChevronRight 
                        size={20} 
                        className={`${styles.cardChevron} ${activeCard === card.id ? styles.rotated : ''}`}
                      />
                    </div>
                    
                    <div className={`${styles.cardContent} ${activeCard === card.id ? styles.expanded : ''}`}>
                      <p className={styles.cardDescription}>{card.description}</p>
                      <div className={styles.cardHighlights}>
                        {card.highlights.map((highlight, idx) => (
                          <span key={idx} className={styles.highlight}>
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          <h3 className={styles.timelineTitle}>
            <Calendar size={24} />
            Linha do Tempo
          </h3>
          <div className={styles.timelineContainer}>
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className={`${styles.timelineItem} ${item.current ? styles.current : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={styles.timelineMarker}>
                  <div className={styles.timelineIcon}>
                    {item.type === 'education' ? <GraduationCap size={16} /> : <Briefcase size={16} />}
                  </div>
                </div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <h4 className={styles.timelineItemTitle}>{item.title}</h4>
                  <span className={styles.timelineSubtitle}>{item.subtitle}</span>
                  <p className={styles.timelineDescription}>{item.description}</p>
                  {item.current && (
                    <div className={styles.currentBadge}>
                      <Zap size={12} />
                      Em Andamento
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={styles.cta}>
          <div className={styles.ctaContent}>
            <Coffee size={32} className={styles.ctaIcon} />
            <h3 className={styles.ctaTitle}>Vamos conversar?</h3>
            <p className={styles.ctaText}>
              Estou sempre aberto para discutir projetos, oportunidades 
              ou apenas trocar ideias sobre tecnologia e desenvolvimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;