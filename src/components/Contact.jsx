import { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  CheckCircle,
  AlertCircle,
  User,
  MessageSquare,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ExternalLink,
  Clock,
  Globe,
  Coffee,
  Heart,
  Zap
} from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    type: '', // 'success', 'error', 'loading'
    message: ''
  });
  const [errors, setErrors] = useState({});
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

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'regi.assuncao@hotmail.com',
      href: 'mailto:regi.assuncao@hotmail.com',
      description: 'Melhor forma de entrar em contato'
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+55 (31) 98662-8666',
      href: 'https://wa.me/5531986628666',
      description: 'Disponível para conversas rápidas'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Conselheiro Lafaiete, MG',
      href: null,
      description: 'Disponível para trabalho remoto'
    },
    {
      icon: Clock,
      label: 'Disponibilidade',
      value: 'Seg - Sex, 8h às 18h',
      href: null,
      description: 'Respondo em até 24h'
    }
  ];

  const socialLinks = [
    {
      platform: 'GitHub',
      icon: Github,
      url: 'https://github.com/reginaldoassuncao',
      color: '#333',
      description: 'Confira meus projetos e código'
    },
    {
      platform: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/reginaldoassuncao/',
      color: '#0077b5',
      description: 'Vamos nos conectar profissionalmente'
    },
    {
      platform: 'Twitter',
      icon: Twitter,
      url: 'https://x.com/Regisassuncao9',
      color: '#1da1f2',
      description: 'Siga minha jornada em tech'
    },
    {
      platform: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/regis_assuncao/',
      color: '#e4405f',
      description: 'Bastidores e dia a dia'
    }
  ];

  // Validação do formulário
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Nome deve ter pelo menos 2 caracteres';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Assunto é obrigatório';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Assunto deve ter pelo menos 5 caracteres';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setFormStatus({
        type: 'error',
        message: 'Por favor, corrija os erros no formulário.'
      });
      return;
    }

    setFormStatus({
      type: 'loading',
      message: 'Enviando mensagem...'
    });

    try {
      // Simular envio (substituir por integração real)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Para implementação real, aqui você faria:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      setFormStatus({
        type: 'success',
        message: 'Mensagem enviada com sucesso! Entrarei em contato em breve.'
      });

      // Limpar formulário
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.'
      });
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className={`${styles.contact} ${isVisible ? styles.visible : ''}`} 
      id="contato"
    >
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            Vamos Conversar
            <span className={styles.titleAccent}>?</span>
          </h2>
          <p className={styles.subtitle}>
            Pronto para dar o próximo passo na minha carreira tech. 
            Entre em contato para oportunidades, projetos ou apenas para trocar ideias!
          </p>
        </div>

        <div className={styles.content}>
          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <h3 className={styles.sectionTitle}>
              <Coffee size={24} />
              Informações de Contato
            </h3>
            <div className={styles.infoGrid}>
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const content = (
                  <div 
                    className={styles.infoCard}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={styles.infoIcon}>
                      <IconComponent size={24} />
                    </div>
                    <div className={styles.infoContent}>
                      <h4 className={styles.infoLabel}>{info.label}</h4>
                      <p className={styles.infoValue}>{info.value}</p>
                      <span className={styles.infoDescription}>{info.description}</span>
                    </div>
                    {info.href && (
                      <ExternalLink size={16} className={styles.infoExternal} />
                    )}
                  </div>
                );

                return info.href ? (
                  <a 
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.infoLink}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index} className={styles.infoWrapper}>
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className={styles.socialSection}>
              <h4 className={styles.socialTitle}>
                <Globe size={20} />
                Redes Sociais
              </h4>
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      style={{ '--social-color': social.color }}
                      title={social.description}
                    >
                      <IconComponent size={20} />
                      <span>{social.platform}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formSection}>
            <h3 className={styles.sectionTitle}>
              <MessageSquare size={24} />
              Envie uma Mensagem
            </h3>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    <User size={16} />
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`${styles.input} ${errors.name ? styles.error : ''}`}
                    placeholder="Seu nome completo"
                  />
                  {errors.name && (
                    <span className={styles.errorMessage}>
                      <AlertCircle size={14} />
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    <Mail size={16} />
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`${styles.input} ${errors.email ? styles.error : ''}`}
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <span className={styles.errorMessage}>
                      <AlertCircle size={14} />
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                  <MessageSquare size={16} />
                  Assunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`${styles.input} ${errors.subject ? styles.error : ''}`}
                  placeholder="Ex: Oportunidade de trabalho, Projeto, Colaboração..."
                />
                {errors.subject && (
                  <span className={styles.errorMessage}>
                    <AlertCircle size={14} />
                    {errors.subject}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  <MessageSquare size={16} />
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
                  placeholder="Conte-me sobre o projeto, oportunidade ou sua ideia..."
                  rows="6"
                />
                {errors.message && (
                  <span className={styles.errorMessage}>
                    <AlertCircle size={14} />
                    {errors.message}
                  </span>
                )}
              </div>

              {formStatus.message && (
                <div className={`${styles.formStatus} ${styles[formStatus.type]}`}>
                  {formStatus.type === 'success' && <CheckCircle size={16} />}
                  {formStatus.type === 'error' && <AlertCircle size={16} />}
                  {formStatus.type === 'loading' && <div className={styles.spinner} />}
                  <span>{formStatus.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus.type === 'loading'}
                className={styles.submitButton}
              >
                {formStatus.type === 'loading' ? (
                  <>
                    <div className={styles.spinner} />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className={styles.cta}>
          <div className={styles.ctaContent}>
            <Heart size={32} className={styles.ctaIcon} />
            <h3 className={styles.ctaTitle}>Vamos Construir Algo Incrível Juntos!</h3>
            <p className={styles.ctaText}>
              Com 19 anos de experiência sólida, múltiplas formações e paixão por tecnologia, 
              estou pronto para contribuir com projetos desafiadores e equipes inovadoras.
            </p>
            <div className={styles.ctaStats}>
              <div className={styles.ctaStat}>
                <Zap size={20} />
                <span>Resposta rápida</span>
              </div>
              <div className={styles.ctaStat}>
                <CheckCircle size={20} />
                <span>Comprometimento total</span>
              </div>
              <div className={styles.ctaStat}>
                <Heart size={20} />
                <span>Paixão por aprender</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;