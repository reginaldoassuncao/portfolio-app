import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navigationItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'sobre', label: 'Sobre', href: '#sobre' },
    { id: 'habilidades', label: 'Habilidades', href: '#habilidades' },
    { id: 'projetos', label: 'Projetos', href: '#projetos' },
    { id: 'experiencia', label: 'Experiência', href: '#experiencia' },
    { id: 'contato', label: 'Contato', href: '#contato' }
  ];

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));

      const currentSection = sections.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(`.${styles.header}`)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    
    // Smooth scroll to section
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerHeight = 64; // 4rem in pixels
      const elementPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleKeyDown = (event, href) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleNavClick(href);
    }
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={`${styles.container} container`}>
          {/* Logo */}
          <a 
            href="#home" 
            className={styles.logo}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            Seu Nome
          </a>

          {/* Desktop Navigation */}
          <nav className={styles.nav} role="navigation" aria-label="Main navigation">
            <ul className={styles.navList}>
              {navigationItems.map((item) => (
                <li key={item.id} className={styles.navItem}>
                  <a
                    href={item.href}
                    className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    onKeyDown={(e) => handleKeyDown(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ''}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
          >
            <span className={styles.hamburger}></span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav 
        className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}
        role="navigation" 
        aria-label="Mobile navigation"
      >
        <div className="container">
          <ul className={styles.mobileNavList}>
            {navigationItems.map((item, index) => (
              <li key={item.id} className={styles.mobileNavItem}>
                <a
                  href={item.href}
                  className={`${styles.mobileNavLink} ${activeSection === item.id ? styles.active : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  onKeyDown={(e) => handleKeyDown(e, item.href)}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Backdrop for mobile menu */}
      <div 
        className={`${styles.backdrop} ${isMenuOpen ? styles.open : ''}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  );
};

export default Header;