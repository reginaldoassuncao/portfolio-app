import { useState, useEffect, useRef } from 'react';
import { 
  Code2, 
  Shield, 
  Users, 
  BookOpen,
  Trophy,
  Target,
  Zap,
  Globe,
  Monitor,
  Network,
  Lock,
  CheckCircle,
  Clock,
  TrendingUp,
  Brain,
  Wrench,
  MessageCircle,
  Award,
  Eye,
  Lightbulb
} from 'lucide-react';
import styles from './Skills.module.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('development');
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

  const skillCategories = [
    {
      id: 'development',
      title: 'Desenvolvimento',
      icon: Code2,
      color: 'var(--color-primary)',
      description: 'Tecnologias que domino e estou desenvolvendo'
    },
    {
      id: 'security',
      title: 'Segurança & Redes',
      icon: Shield,
      color: '#dc2626',
      description: 'Conhecimentos em cibersegurança e infraestrutura'
    },
    {
      id: 'professional',
      title: 'Competências Profissionais',
      icon: Users,
      color: '#16a34a',
      description: 'Habilidades desenvolvidas na experiência profissional'
    }
  ];

  const skills = {
    development: [
      {
        name: 'React',
        level: 75,
        icon: Code2,
        status: 'solid',
        description: 'Desenvolvimento de interfaces modernas com hooks e context'
      },
      {
        name: 'JavaScript (ES6+)',
        level: 70,
        icon: Code2,
        status: 'solid',
        description: 'Base sólida em JS moderno, async/await, destructuring'
      },
      {
        name: 'HTML5 & CSS3',
        level: 80,
        icon: Monitor,
        status: 'solid',
        description: 'Markup semântico, CSS Grid, Flexbox, responsividade'
      },
      {
        name: 'Git & GitHub',
        level: 65,
        icon: Network,
        status: 'learning',
        description: 'Controle de versão, branches, colaboração em projetos'
      },
      {
        name: 'Node.js',
        level: 45,
        icon: Code2,
        status: 'learning',
        description: 'Estudando desenvolvimento backend e APIs'
      },
      {
        name: 'Banco de Dados',
        level: 40,
        icon: Target,
        status: 'learning',
        description: 'SQL básico, conceitos de modelagem de dados'
      }
    ],
    security: [
      {
        name: 'Cisco CyberOps Associate',
        level: 85,
        icon: Shield,
        status: 'solid',
        description: 'Certificação concluída - Operações de Segurança Cibernética'
      },
      {
        name: 'Análise de Riscos',
        level: 90,
        icon: Eye,
        status: 'expert',
        description: 'Especialização em Eng. Segurança do Trabalho aplicada'
      },
      {
        name: 'Normas e Compliance',
        level: 85,
        icon: CheckCircle,
        status: 'expert',
        description: 'Conhecimento profundo em regulamentações técnicas'
      },
      {
        name: 'Monitoramento de Sistemas',
        level: 70,
        icon: Monitor,
        status: 'solid',
        description: 'Experiência operacional em sistemas críticos'
      },
      {
        name: 'Gestão de Incidentes',
        level: 88,
        icon: Zap,
        status: 'expert',
        description: '16 anos de experiência em situações críticas'
      }
    ],
    professional: [
      {
        name: 'Liderança Técnica',
        level: 92,
        icon: Users,
        status: 'expert',
        description: '16 anos coordenando operações ferroviárias complexas'
      },
      {
        name: 'Resolução de Problemas',
        level: 95,
        icon: Lightbulb,
        status: 'expert',
        description: 'Análise crítica desenvolvida em múltiplas graduações'
      },
      {
        name: 'Inglês Técnico',
        level: 65,
        icon: Globe,
        status: 'solid',
        description: 'CEFR B2 Beginning - Leitura técnica e comunicação básica'
      },
      {
        name: 'Gestão de Processos',
        level: 90,
        icon: Target,
        status: 'expert',
        description: 'Otimização e melhoria contínua de processos operacionais'
      },
      {
        name: 'Trabalho em Equipe',
        level: 95,
        icon: Users,
        status: 'expert',
        description: 'Coordenação de equipes em ambiente de alta responsabilidade'
      },
      {
        name: 'Aprendizado Contínuo',
        level: 98,
        icon: BookOpen,
        status: 'expert',
        description: '3 graduações + constante evolução profissional'
      }
    ]
  };

  const currentLearning = [
    {
      title: 'Certificações Cisco Avançadas',
      progress: 30,
      icon: Shield,
      description: 'CCNA Security ou especializações em redes',
      timeframe: 'Planejado'
    },
    {
      title: 'Node.js & Express',
      progress: 45,
      icon: Code2,
      description: 'Desenvolvimento Backend',
      timeframe: 'Estudando'
    },
    {
      title: 'Inglês Técnico',
      progress: 65,
      icon: Globe,
      description: 'CEFR B2 - Aprimorando fluência',
      timeframe: 'Contínuo'
    },
    {
      title: 'DevOps Fundamentals',
      progress: 30,
      icon: Network,
      description: 'CI/CD, Docker, Deploy',
      timeframe: 'Planejado'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'expert': return '#16a34a';
      case 'solid': return 'var(--color-primary)';
      case 'learning': return '#ea580c';
      default: return '#64748b';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'expert': return 'Especialista';
      case 'solid': return 'Sólido';
      case 'learning': return 'Aprendendo';
      default: return 'Iniciante';
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className={`${styles.skills} ${isVisible ? styles.visible : ''}`} 
      id="habilidades"
    >
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            Habilidades & Competências
            <span className={styles.titleAccent}>.</span>
          </h2>
          <p className={styles.subtitle}>
            Uma combinação única de experiência sólida, conhecimento técnico 
            e paixão por aprender continuamente
          </p>
        </div>

        {/* Category Navigation */}
        <div className={styles.categoryNav}>
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                className={`${styles.categoryButton} ${activeCategory === category.id ? styles.active : ''}`}
                onClick={() => setActiveCategory(category.id)}
                style={{ 
                  '--category-color': category.color 
                }}
              >
                <IconComponent size={24} />
                <div className={styles.categoryInfo}>
                  <span className={styles.categoryTitle}>{category.title}</span>
                  <span className={styles.categoryDescription}>{category.description}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className={styles.skillsContainer}>
          <div className={styles.skillsGrid}>
            {skills[activeCategory].map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  key={index}
                  className={styles.skillCard}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.skillHeader}>
                    <div className={styles.skillIcon}>
                      <IconComponent size={20} />
                    </div>
                    <div className={styles.skillInfo}>
                      <h4 className={styles.skillName}>{skill.name}</h4>
                      <span 
                        className={styles.skillStatus}
                        style={{ color: getStatusColor(skill.status) }}
                      >
                        {getStatusText(skill.status)}
                      </span>
                    </div>
                    <div className={styles.skillLevel}>
                      {skill.level}%
                    </div>
                  </div>
                  
                  <div className={styles.skillProgress}>
                    <div 
                      className={styles.progressBar}
                      style={{ 
                        width: `${skill.level}%`,
                        backgroundColor: getStatusColor(skill.status),
                        animationDelay: `${index * 0.2}s`
                      }}
                    />
                  </div>
                  
                  <p className={styles.skillDescription}>{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Current Learning Section */}
        <div className={styles.learningSection}>
          <div className={styles.learningHeader}>
            <h3 className={styles.learningTitle}>
              <BookOpen size={24} />
              Aprendizado Ativo
              <span className={styles.learningBadge}>
                <TrendingUp size={16} />
                Em Crescimento
              </span>
            </h3>
            <p className={styles.learningSubtitle}>
              Tecnologias e habilidades que estou desenvolvendo atualmente
            </p>
          </div>

          <div className={styles.learningGrid}>
            {currentLearning.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className={styles.learningCard}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className={styles.learningCardHeader}>
                    <div className={styles.learningIcon}>
                      <IconComponent size={20} />
                    </div>
                    <div className={styles.learningInfo}>
                      <h4 className={styles.learningItemTitle}>{item.title}</h4>
                      <span className={styles.learningTimeframe}>{item.timeframe}</span>
                    </div>
                    <div className={styles.learningProgress}>
                      {item.progress}%
                    </div>
                  </div>
                  
                  <p className={styles.learningDescription}>{item.description}</p>
                  
                  <div className={styles.learningProgressBar}>
                    <div 
                      className={styles.learningProgressFill}
                      style={{ 
                        width: `${item.progress}%`,
                        animationDelay: `${index * 0.3}s`
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills Summary */}
        <div className={styles.summary}>
          <div className={styles.summaryContent}>
            <Brain size={32} className={styles.summaryIcon} />
            <h3 className={styles.summaryTitle}>Minha Abordagem</h3>
            <p className={styles.summaryText}>
              Cada nova tecnologia é uma oportunidade de aplicar minha experiência em 
              <strong> análise de sistemas</strong> e <strong>gestão de riscos</strong>. 
              Prefiro aprender de forma sólida e prática, construindo projetos reais 
              que demonstrem não apenas conhecimento técnico, mas também 
              <em>responsabilidade e qualidade profissional</em>.
            </p>
            
            <div className={styles.summaryStats}>
              <div className={styles.stat}>
                <Award size={24} />
                <div>
                  <span className={styles.statNumber}>3</span>
                  <span className={styles.statLabel}>Graduações</span>
                </div>
              </div>
              <div className={styles.stat}>
                <Clock size={24} />
                <div>
                  <span className={styles.statNumber}>19</span>
                  <span className={styles.statLabel}>Anos Experiência</span>
                </div>
              </div>
              <div className={styles.stat}>
                <TrendingUp size={24} />
                <div>
                  <span className={styles.statNumber}>∞</span>
                  <span className={styles.statLabel}>Aprendizado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;