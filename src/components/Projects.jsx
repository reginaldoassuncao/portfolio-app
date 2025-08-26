import { useState, useEffect, useRef } from 'react';
import { 
  Code2, 
  ExternalLink, 
  Github, 
  Eye,
  Filter,
  Clock,
  Lightbulb,
  Rocket,
  Plus,
  X,
  Calendar,
  Tag,
  ArrowRight,
  Layers,
  Zap,
  Target,
  Coffee
} from 'lucide-react';
import styles from './Projects.module.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  // Categorias de projetos
  const categories = [
    {
      id: 'all',
      label: 'Todos os Projetos',
      icon: Layers,
      count: 4
    },
    {
      id: 'web',
      label: 'Desenvolvimento Web',
      icon: Code2,
      count: 2
    },
    {
      id: 'learning',
      label: 'Projetos de Estudo',
      icon: Lightbulb,
      count: 2
    },
    {
      id: 'coming-soon',
      label: 'Em Breve',
      icon: Rocket,
      count: 0
    }
  ];

  // Projetos placeholder - estrutura pronta para projetos reais
  const projects = [
    {
      id: 1,
      title: 'Portfólio Pessoal',
      subtitle: 'Site de apresentação profissional',
      description: 'Este próprio portfólio que você está vendo! Desenvolvido com React, CSS Modules e muito carinho.',
      detailedDescription: `
        Este portfólio representa minha jornada de transição para a área de desenvolvimento. 
        Foi construído aplicando conceitos modernos de React, design responsivo e experiência do usuário.
        
        O projeto demonstra minha capacidade de criar interfaces elegantes, organizar código de forma limpa 
        e aplicar boas práticas de desenvolvimento frontend.
      `,
      category: 'web',
      technologies: ['React', 'CSS Modules', 'Vite', 'Lucide Icons'],
      status: 'completed',
      image: '/images/portfolio-screenshot.png',
      liveUrl: window.location.origin,
      githubUrl: 'https://github.com/reginaldoassuncao/portfolio-app',
      features: [
        'Design responsivo mobile-first',
        'Animações CSS suaves',
        'Navegação fluida com scroll suave',
        'Componentes reutilizáveis',
        'Código limpo e bem documentado'
      ],
      challenges: [
        'Primeira aplicação React completa',
        'Integração de múltiplas animações CSS',
        'Otimização de performance'
      ],
      learned: [
        'Hooks do React (useState, useEffect, useRef)',
        'CSS Modules e organização de estilos',
        'Intersection Observer API',
        'Boas práticas de acessibilidade'
      ],
      date: '2024-08',
      duration: '2 semanas'
    },
    {
      id: 2,
      title: 'Aplicação de Estudos React',
      subtitle: 'Projeto prático de aprendizado',
      description: 'Aplicação desenvolvida durante os estudos para consolidar conceitos fundamentais do React.',
      detailedDescription: `
        Projeto focado no aprendizado prático dos conceitos fundamentais do React. 
        Inclui gerenciamento de estado, componentes funcionais, hooks e integração com APIs.
        
        Desenvolvido como parte do processo de aprendizado, demonstrando evolução técnica 
        e capacidade de aplicar teoria na prática.
      `,
      category: 'learning',
      technologies: ['React', 'JavaScript', 'HTML5', 'CSS3'],
      status: 'in-progress',
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Componentes funcionais com hooks',
        'Gerenciamento de estado local',
        'Consumo de APIs',
        'Formulários controlados'
      ],
      challenges: [
        'Entendimento profundo dos hooks',
        'Gerenciamento de estado complexo',
        'Debugging e troubleshooting'
      ],
      learned: [
        'Ciclo de vida dos componentes',
        'Context API',
        'Custom hooks',
        'Padrões de design em React'
      ],
      date: '2024-07',
      duration: '3 semanas'
    },
    {
      id: 3,
      title: 'Sistema de Segurança [Conceito]',
      subtitle: 'Dashboard de monitoramento',
      description: 'Conceito de dashboard para monitoramento de segurança, aplicando conhecimentos de CyberOps.',
      detailedDescription: `
        Projeto conceitual que combina meu conhecimento em segurança cibernética (Cisco CyberOps) 
        com desenvolvimento frontend. 
        
        O objetivo é criar uma interface intuitiva para visualização de dados de segurança, 
        alertas e métricas de monitoramento de rede.
      `,
      category: 'learning',
      technologies: ['React', 'Chart.js', 'Cisco APIs', 'CSS Grid'],
      status: 'planned',
      image: '/api/placeholder/600/400',
      liveUrl: null,
      githubUrl: null,
      features: [
        'Dashboard interativo',
        'Gráficos de métricas em tempo real',
        'Sistema de alertas',
        'Interface responsiva'
      ],
      challenges: [
        'Integração com APIs de segurança',
        'Visualização de dados complexos',
        'Design de UX para dashboards'
      ],
      learned: [
        'Bibliotecas de gráficos',
        'Real-time data handling',
        'Security-focused UI/UX',
        'API integration patterns'
      ],
      date: '2024-09',
      duration: 'Planejado - 4 semanas'
    },
    {
      id: 4,
      title: 'App Full Stack [Futuro]',
      subtitle: 'Aplicação completa com backend',
      description: 'Projeto futuro integrando frontend React com backend Node.js, aplicando stack completa.',
      detailedDescription: `
        Projeto ambicioso que representará a evolução completa para desenvolvedor full stack. 
        Integrará frontend React com backend Node.js, banco de dados e deploy profissional.
        
        Será o marco da transição completa de carreira, demonstrando capacidade de 
        desenvolver aplicações web completas e prontas para produção.
      `,
      category: 'web',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      status: 'planned',
      image: '/api/placeholder/600/400',
      liveUrl: null,
      githubUrl: null,
      features: [
        'Autenticação completa',
        'CRUD operations',
        'API REST',
        'Deploy profissional'
      ],
      challenges: [
        'Arquitetura full stack',
        'Segurança e autenticação',
        'Deploy e DevOps'
      ],
      learned: [
        'Backend development',
        'Database design',
        'Security best practices',
        'Production deployment'
      ],
      date: '2024-10',
      duration: 'Planejado - 6 semanas'
    }
  ];

  // Filtrar projetos
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Abrir modal
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Fechar modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  // Fechar modal com ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#16a34a';
      case 'in-progress': return '#ea580c';
      case 'planned': return '#6366f1';
      default: return '#64748b';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Concluído';
      case 'in-progress': return 'Em Desenvolvimento';
      case 'planned': return 'Planejado';
      default: return 'Em Breve';
    }
  };

  return (
    <>
      <section 
        ref={sectionRef} 
        className={`${styles.projects} ${isVisible ? styles.visible : ''}`} 
        id="projetos"
      >
        <div className="container">
          <div className={styles.header}>
            <h2 className={styles.title}>
              Projetos & Portfolio
              <span className={styles.titleAccent}>.</span>
            </h2>
            <p className={styles.subtitle}>
              Jornada de aprendizado através de projetos práticos, desde conceitos básicos 
              até aplicações completas
            </p>
          </div>

          {/* Filters */}
          <div className={styles.filters}>
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  className={`${styles.filterButton} ${activeFilter === category.id ? styles.active : ''}`}
                  onClick={() => setActiveFilter(category.id)}
                >
                  <IconComponent size={18} />
                  <span>{category.label}</span>
                  <span className={styles.count}>{category.count}</span>
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className={styles.projectsGrid}>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className={styles.projectCard}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.projectImage}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy"
                    />
                    <div className={styles.projectOverlay}>
                      <button 
                        className={styles.viewButton}
                        onClick={() => openModal(project)}
                      >
                        <Eye size={20} />
                        Ver Detalhes
                      </button>
                    </div>
                  </div>

                  <div className={styles.projectContent}>
                    <div className={styles.projectHeader}>
                      <div className={styles.projectInfo}>
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <p className={styles.projectSubtitle}>{project.subtitle}</p>
                      </div>
                      <span 
                        className={styles.projectStatus}
                        style={{ backgroundColor: getStatusColor(project.status) }}
                      >
                        {getStatusText(project.status)}
                      </span>
                    </div>

                    <p className={styles.projectDescription}>
                      {project.description}
                    </p>

                    <div className={styles.projectTech}>
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className={styles.techMore}>
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className={styles.projectActions}>
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          className={styles.actionButton}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          className={styles.actionButton}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} />
                          Código
                        </a>
                      )}
                      <button 
                        className={styles.detailsButton}
                        onClick={() => openModal(project)}
                      >
                        Detalhes
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.emptyState}>
                <Coffee size={48} />
                <h3>Em breve, novos projetos!</h3>
                <p>Estou trabalhando em projetos incríveis para esta categoria.</p>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className={styles.cta}>
            <div className={styles.ctaContent}>
              <Target size={32} className={styles.ctaIcon} />
              <h3 className={styles.ctaTitle}>Projetos em Desenvolvimento</h3>
              <p className={styles.ctaText}>
                Cada projeto é uma oportunidade de aplicar conhecimento teórico na prática. 
                Acompanhe minha evolução através de projetos reais e desafios superados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>
              <X size={24} />
            </button>

            <div className={styles.modalHeader}>
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className={styles.modalImage}
              />
              <div className={styles.modalHeaderContent}>
                <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
                <p className={styles.modalSubtitle}>{selectedProject.subtitle}</p>
                <div className={styles.modalMeta}>
                  <span className={styles.modalDate}>
                    <Calendar size={16} />
                    {selectedProject.date}
                  </span>
                  <span className={styles.modalDuration}>
                    <Clock size={16} />
                    {selectedProject.duration}
                  </span>
                  <span 
                    className={styles.modalStatus}
                    style={{ backgroundColor: getStatusColor(selectedProject.status) }}
                  >
                    {getStatusText(selectedProject.status)}
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalDescription}>
                <h3>Sobre o Projeto</h3>
                <p>{selectedProject.detailedDescription}</p>
              </div>

              <div className={styles.modalSection}>
                <h3>Tecnologias Utilizadas</h3>
                <div className={styles.modalTech}>
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.modalTechTag}>
                      <Tag size={14} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.modalSection}>
                <h3>Principais Funcionalidades</h3>
                <ul className={styles.modalList}>
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.modalSection}>
                <h3>Desafios Superados</h3>
                <ul className={styles.modalList}>
                  {selectedProject.challenges.map((challenge, idx) => (
                    <li key={idx}>{challenge}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.modalSection}>
                <h3>Aprendizados</h3>
                <ul className={styles.modalList}>
                  {selectedProject.learned.map((learning, idx) => (
                    <li key={idx}>{learning}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.modalActions}>
                {selectedProject.liveUrl && (
                  <a 
                    href={selectedProject.liveUrl} 
                    className={styles.modalActionButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} />
                    Ver Projeto
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a 
                    href={selectedProject.githubUrl} 
                    className={styles.modalActionButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} />
                    Código Fonte
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;