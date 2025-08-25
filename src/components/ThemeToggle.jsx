import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label={`Alternar para modo ${isDarkMode ? 'claro' : 'escuro'}`}
      title={`Modo ${isDarkMode ? 'claro' : 'escuro'}`}
    >
      <div className={styles.toggleTrack}>
        <div 
          className={`${styles.toggleThumb} ${isDarkMode ? styles.dark : styles.light}`}
        >
          <Sun 
            size={14} 
            className={`${styles.sunIcon} ${!isDarkMode ? styles.active : ''}`}
          />
          <Moon 
            size={14} 
            className={`${styles.moonIcon} ${isDarkMode ? styles.active : ''}`}
          />
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;