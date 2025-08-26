import { useState, useEffect, useRef } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award,
  MapPin,
  Calendar,
  Users,
  TrendingUp,
  Zap,
  Shield,
  Code2,
  Train,
  TreePine,
  CheckCircle,
  Clock,
  Star,
  Target,
  Lightbulb,
  ArrowRight,
  Medal
} from 'lucide-react';
import styles from './Experience.module.css';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('professional');
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

  const tabs = [
    {
      id: 'professional',
      label: 'Experiência Profissional',
      icon: Briefcase,
      color: 'var(--color-primary)'
    },
    {
      id: 'education',
      label: 'Formação Acadêmica',
      icon: GraduationCap,
      color: '#16a34a'
    },
    {
      id: 'certifications',
      label: 'Certificações',
      icon: Award,
      color: '#dc2626'
    }
  ];

  const experiences = {
    professional: [
      {
        id: 1,
        title: 'Maquinista',
        company: 'Vale S.A.',
        location: 'Minas Gerais, Brasil',
        period: '2008 - Presente',
        duration: '16 anos',
        type: 'full-time',
        current: true,
        description: `
          Responsável pela operação segura e eficiente de trens de carga, transportando minério de ferro 
          e outros materiais. Liderança técnica em operações críticas de alta responsabilidade.
        `,
        responsibilities: [
          'Operação segura de composições ferroviárias de grande porte',
          'Inspeção e manutenção preventiva de equipamentos',
          'Liderança de equipes operacionais em situações críticas',
          'Cumprimento rigoroso de normas de segurança e regulamentações',
          'Comunicação técnica com centro de controle operacional',
          'Tomada de decisões rápidas em cenários de emergência'
        ],
        achievements: [
          '16 anos sem acidentes ou incidentes graves',
          'Reconhecimento por excelência operacional',
          'Mentor de novos funcionários e estagiários',
          'Participação em projetos de melhoria de processos',
          'Certificações internas de segurança renovadas anualmente'
        ],
        skills: ['Liderança', 'Gestão de Riscos', 'Trabalho em Equipe', 'Comunicação', 'Resolução de Problemas'],
        icon: Train,
        color: '#ca8a04'
      },
      {
        id: 2,
        title: 'Oficial de Operações Ferroviárias',
        company: 'Vale S.A.',
        location: 'Minas Gerais, Brasil',
        period: '2005 - 2008',
        duration: '3 anos',
        type: 'full-time',
        current: false,
        description: `
          Início da carreira ferroviária, desenvolvendo conhecimentos fundamentais em operações 
          e segurança. Base sólida para evolução profissional na empresa.
        `,
        responsibilities: [
          'Apoio nas operações ferroviárias básicas',
          'Aprendizado de protocolos de segurança',
          'Assistência técnica em manutenções',
          'Desenvolvimento de competências operacionais',
          'Participação em treinamentos especializados'
        ],
        achievements: [
          'Promoção para Maquinista em tempo recorde',
          'Excelente avaliação de desempenho',
          'Conclusão de todos os treinamentos obrigatórios',
          'Reconhecimento por dedicação e aprendizado rápido'
        ],
        skills: ['Aprendizado Rápido', 'Disciplina', 'Atenção aos Detalhes', 'Seguimento de Normas'],
        icon: Users,
        color: '#6366f1'
      }
    ],
    education: [
      {
        id: 1,
        title: 'Pós-graduação em Análise e Desenvolvimento de Sistemas',
        institution: 'PUC Minas',
        location: 'Minas Gerais, Brasil',
        period: '2023 - 2024',
        duration: 'Concluindo',
        type: 'pos-graduation',
        current: true,
        description: `
          Transição estratégica para a área de tecnologia, aplicando experiência profissional 
          sólida no desenvolvimento de soluções digitais inovadoras.
        `,
        subjects: [
          'Programação Orientada a Objetos',
          'Desenvolvimento Web Frontend e Backend',
          'Banco de Dados e Modelagem',
          'Engenharia de Software',
          'Arquitetura de Sistemas',
          'Gestão de Projetos em TI'
        ],
        achievements: [
          'Aplicação prática de conceitos em projetos reais',
          'Desenvolvimento de pensamento lógico-computacional',
          'Integração de conhecimento técnico anterior',
          'Preparação para transição de carreira'
        ],
        skills: ['React', 'JavaScript', 'Node.js', 'SQL', 'Git', 'Metodologias Ágeis'],
        icon: Code2,
        color: 'var(--color-primary)'
      },
      {
        id: 2,
        title: 'Pós-graduação em Engenharia de Segurança do Trabalho',
        institution: 'Universidade Federal',
        location: 'Minas Gerais, Brasil',
        period: '2021 - 2022',
        duration: '1 ano',
        type: 'pos-graduation',
        current: false,
        description: `
          Especialização focada em gestão de riscos, normas regulamentadoras e sistemas de 
          prevenção, complementando experiência operacional com conhecimento técnico-científico.
        `,
        subjects: [
          'Gestão de Riscos Operacionais',
          'Normas Regulamentadoras (NRs)',
          'Sistemas de Gestão de Segurança',
          'Análise de Acidentes e Incidentes',
          'Ergonomia e Medicina do Trabalho',
          'Legislação e Compliance'
        ],
        achievements: [
          'Aplicação direta no ambiente profissional',
          'Desenvolvimento de visão sistêmica de segurança',
          'Capacitação para auditoria e consultoria',
          'Integração teoria-prática excepcional'
        ],
        skills: ['Análise de Riscos', 'Auditoria', 'Compliance', 'Gestão de Processos', 'Liderança'],
        icon: Shield,
        color: '#dc2626'
      },
      {
        id: 3,
        title: 'Bacharelado em Engenharia Ambiental',
        institution: 'Universidade Federal',
        location: 'Minas Gerais, Brasil',
        period: '2015 - 2019',
        duration: '4 anos',
        type: 'graduation',
        current: false,
        description: `
          Primeira graduação que desenvolveu pensamento analítico, sistêmico e científico. 
          Base sólida em matemática, física e gestão de processos complexos.
        `,
        subjects: [
          'Cálculo e Álgebra Linear',
          'Física e Química Aplicadas',
          'Gestão de Processos Industriais',
          'Análise de Sistemas Ambientais',
          'Estatística e Modelagem',
          'Projetos de Engenharia'
        ],
        achievements: [
          'Desenvolvimento de raciocínio lógico-matemático',
          'Capacidade de análise de sistemas complexos',
          'Pensamento sustentável e preventivo',
          'Base científica sólida para especializações futuras'
        ],
        skills: ['Análise Sistêmica', 'Pensamento Científico', 'Gestão de Projetos', 'Sustentabilidade'],
        icon: TreePine,
        color: '#16a34a'
      }
    ],
    certifications: [
      {
        id: 1,
        title: 'Cisco CyberOps Associate',
        issuer: 'Cisco Systems',
        date: '2024',
        credentialId: 'CYOPS-001-2024',
        description: 'Certificação em Operações de Segurança Cibernética, cobrindo SOC, análise de ameaças e resposta a incidentes.',
        skills: ['SOC Operations', 'Threat Analysis', 'Incident Response', 'Network Security'],
        verified: true,
        icon: Shield,
        color: '#0066cc'
      },
      {
        id: 2,
        title: 'Certificações Operacionais Ferroviárias',
        issuer: 'Vale S.A.',
        date: '2008-2024',
        credentialId: 'VALE-OP-2024',
        description: 'Conjunto de certificações internas renovadas anualmente, cobrindo operação segura, normas técnicas e liderança.',
        skills: ['Operação Ferroviária', 'Segurança Operacional', 'Liderança Técnica', 'Gestão de Riscos'],
        verified: true,
        icon: Train,
        color: '#ca8a04'
      },
      {
        id: 3,
        title: 'Inglês Técnico - CEFR B2',
        issuer: 'Instituto de Idiomas',
        date: '2023',
        credentialId: 'ENG-B2-2023',
        description: 'Certificação de proficiência em inglês técnico, focado em comunicação profissional e documentação técnica.',
        skills: ['Technical English', 'Professional Communication', 'Technical Documentation'],
        verified: true,
        icon: Award,
        color: '#059669'
      },
      {
        id: 4,
        title: 'Gestão de Projetos',
        issuer: 'Fundação Getúlio Vargas',
        date: '2020',
        credentialId: 'FGV-GP-2020',
        description: 'Curso de extensão em metodologias de gestão de projetos, incluindo fundamentos de PMI e metodologias ágeis.',
        skills: ['Project Management', 'Agile Methodologies', 'Risk Management', 'Team Leadership'],
        verified: true,
        icon: Target,
        color: '#7c3aed'
      }
    ]
  };

  const stats = [
    {
      number: '19',
      label: 'Anos de Experiência',
      sublabel: 'Vale S.A.',
      icon: Clock,
      color: 'var(--color-primary)'
    },
    {
      number: '3',
      label: 'Graduações',
      sublabel: 'Formação Sólida',
      icon: GraduationCap,
      color: '#16a34a'
    },
    {
      number: '4+',
      label: 'Certificações',
      sublabel: 'Especialização',
      icon: Medal,
      color: '#dc2626'
    },
    {
      number: '100%',
      label: 'Segurança',
      sublabel: '16 anos sem acidentes',
      icon: Shield,
      color: '#ca8a04'
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className={`${styles.experience} ${isVisible ? styles.visible : ''}`} 
      id="experiencia"
    >
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            Experiência & Formação
            <span className={styles.titleAccent}>.</span>
          </h2>
          <p className={styles.subtitle}>
            19 anos de evolução profissional contínua, combinando experiência sólida, 
            formação acadêmica diversificada e especialização em múltiplas áreas
          </p>
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className={styles.stat}
                style={{ 
                  '--stat-color': stat.color,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className={styles.statIcon}>
                  <IconComponent size={24} />
                </div>
                <div className={styles.statContent}>
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                  <span className={styles.statSublabel}>{stat.sublabel}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Tabs */}
        <div className={styles.tabs}>
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
                onClick={() => setActiveTab(tab.id)}
                style={{ '--tab-color': tab.color }}
              >
                <IconComponent size={20} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className={styles.content}>
          <div className={styles.timeline}>
            {experiences[activeTab].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={item.id}
                  className={`${styles.timelineItem} ${item.current ? styles.current : ''}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className={styles.timelineMarker}>
                    <div className={styles.timelineIcon} style={{ backgroundColor: item.color }}>
                      <IconComponent size={20} />
                    </div>
                    <div className={styles.timelineLine} />
                  </div>

                  <div className={styles.timelineContent}>
                    <div className={styles.itemHeader}>
                      <div className={styles.itemTitle}>
                        <h3>{item.title}</h3>
                        {item.current && (
                          <span className={styles.currentBadge}>
                            <Zap size={12} />
                            Atual
                          </span>
                        )}
                      </div>
                      <div className={styles.itemMeta}>
                        <span className={styles.company}>
                          {item.company || item.institution}
                        </span>
                        <span className={styles.location}>
                          <MapPin size={14} />
                          {item.location}
                        </span>
                        <span className={styles.period}>
                          <Calendar size={14} />
                          {item.period} ({item.duration})
                        </span>
                      </div>
                    </div>

                    <p className={styles.itemDescription}>{item.description}</p>

                    {item.responsibilities && (
                      <div className={styles.section}>
                        <h4>Principais Responsabilidades</h4>
                        <ul className={styles.list}>
                          {item.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.subjects && (
                      <div className={styles.section}>
                        <h4>Principais Disciplinas</h4>
                        <ul className={styles.list}>
                          {item.subjects.map((subject, idx) => (
                            <li key={idx}>{subject}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.achievements && (
                      <div className={styles.section}>
                        <h4>Conquistas e Resultados</h4>
                        <ul className={styles.achievements}>
                          {item.achievements.map((achievement, idx) => (
                            <li key={idx}>
                              <Star size={14} />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className={styles.skills}>
                      <h4>Competências Desenvolvidas</h4>
                      <div className={styles.skillTags}>
                        {item.skills.map((skill, idx) => (
                          <span key={idx} className={styles.skillTag}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Certification specific fields */}
                    {item.issuer && (
                      <div className={styles.certDetails}>
                        <div className={styles.certMeta}>
                          <span className={styles.issuer}>
                            <Award size={14} />
                            {item.issuer}
                          </span>
                          <span className={styles.credentialId}>
                            ID: {item.credentialId}
                          </span>
                          {item.verified && (
                            <span className={styles.verified}>
                              <CheckCircle size={14} />
                              Verificada
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className={styles.cta}>
          <div className={styles.ctaContent}>
            <Lightbulb size={32} className={styles.ctaIcon} />
            <h3 className={styles.ctaTitle}>Uma Trajetória Única</h3>
            <p className={styles.ctaText}>
              Cada experiência contribuiu para formar um profissional completo: 
              a <strong>disciplina operacional</strong> de 19 anos na Vale, 
              a <strong>visão sistêmica</strong> das engenharias e agora a 
              <strong>paixão pela tecnologia</strong>. Uma combinação rara no mercado.
            </p>
            <div className={styles.ctaButton}>
              <ArrowRight size={20} />
              <span>Próxima Etapa: Desenvolvedor Full Stack</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;