import { useState, useEffect } from 'react';
import { 
  Mail, 
  Download, 
  Github, 
  Linkedin, 
  Twitter,
  Code,
  Coffee,
  Zap
} from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  
  const titles = [
    'Desenvolvedor Full Stack',
    'Estudante de ADS',
    'Apaixonado por Tecnologia',
    'Criador de Soluções'
  ];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  // Typewriter effect for title
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    let currentIndex = 0;
    let isDeleting = false;
    
    const typeInterval = setInterval(() => {
      if (!isDeleting) {
        if (currentIndex < currentTitle.length) {
          setTypedText(currentTitle.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          // Wait before starting to delete
          setTimeout(() => {
            isDeleting = true;
          }, 2000);
        }
      } else {
        if (currentIndex > 0) {
          setTypedText(currentTitle.substring(0, currentIndex - 1));
          currentIndex--;
        } else {
          isDeleting = false;
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearInterval(typeInterval);
  }, [currentTitleIndex]);

  // Set visibility after component mounts
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      const headerHeight = 64;
      const elementPosition = contactSection.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const downloadCV = () => {
    // Placeholder for CV download functionality
    // In a real project, this would download an actual CV file
    const link = document.createElement('a');
    link.href = '#'; // Would be a real CV file path
    link.download = 'Seu-Nome-CV.pdf';
    link.click();
    
    // For now, just show an alert
    alert('Funcionalidade de download do CV será implementada com arquivo real!');
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/seu-usuario',
      label: 'GitHub',
      color: '#333'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/seu-perfil',
      label: 'LinkedIn',
      color: '#0077b5'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/seu-usuario',
      label: 'Twitter',
      color: '#1da1f2'
    },
    {
      icon: Mail,
      href: 'mailto:seu.email@example.com',
      label: 'Email',
      color: '#ea4335'
    }
  ];

  const floatingSkills = [
    { icon: Code, text: 'React' },
    { icon: Coffee, text: 'JavaScript' },
    { icon: Zap, text: 'Node.js' }
  ];

  return (
    <section className={styles.hero} id="home">
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          {/* Text Content */}
          <div className={styles.textContent}>
            <p className={styles.greeting}>
              👋 Olá! Eu sou
            </p>
            
            <h1 className={styles.name}>
              Reginaldo Assunção
            </h1>
            
            <h2 className={styles.title}>
              {typedText}
              <span style={{ 
                opacity: Math.floor(Date.now() / 500) % 2 ? 1 : 0,
                transition: 'opacity 0.1s'
              }}>|</span>
            </h2>
            
            <p className={styles.description}>
              Estudante de Análise e Desenvolvimento de Sistemas apaixonado por criar 
              soluções digitais inovadoras. Focado em desenvolvimento web moderno com 
              React, Node.js e tecnologias emergentes.
            </p>
            
            <div className={styles.actions}>
              <button 
                className={styles.primaryButton}
                onClick={scrollToContact}
                aria-label="Entrar em contato"
              >
                <Mail size={20} />
                Vamos Conversar
              </button>
              
              <button 
                className={styles.secondaryButton}
                onClick={downloadCV}
                aria-label="Baixar currículo"
              >
                <Download size={20} />
                Download CV
              </button>
            </div>
            
            {/* Social Links */}
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Image Content */}
          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
              {/* Placeholder avatar - substitua pela sua foto profissional */}
              <img 
                src="/src/assets/avatar-placeholder.svg"
                alt="Avatar profissional - Desenvolvedor"
                className={styles.profileImage}
                loading="lazy"
              />
            </div>
            
            {/* Floating skill elements */}
            {floatingSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  key={index}
                  className={styles.floatingElement}
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <IconComponent size={16} style={{ marginRight: '4px' }} />
                  {skill.text}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;