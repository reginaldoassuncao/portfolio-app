import Header from './components/Header';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      
      <main className="main">
        {/* Hero Section */}
        <Hero />

        {/* Sobre Section */}
        <section id="sobre" className="section">
          <div className="container">
            <h2>Sobre Mim</h2>
            <p>Esta seção será desenvolvida na FASE 3 do projeto.</p>
          </div>
        </section>

        {/* Habilidades Section */}
        <section id="habilidades" className="section">
          <div className="container">
            <h2>Habilidades</h2>
            <p>Esta seção será desenvolvida na FASE 4 do projeto.</p>
          </div>
        </section>

        {/* Projetos Section */}
        <section id="projetos" className="section">
          <div className="container">
            <h2>Projetos</h2>
            <p>Esta seção será desenvolvida na FASE 5 e 6 do projeto.</p>
          </div>
        </section>

        {/* Experiência Section */}
        <section id="experiencia" className="section">
          <div className="container">
            <h2>Experiência</h2>
            <p>Esta seção será desenvolvida na FASE 7 do projeto.</p>
          </div>
        </section>

        {/* Contato Section */}
        <section id="contato" className="section">
          <div className="container">
            <h2>Contato</h2>
            <p>Esta seção será desenvolvida na FASE 8 do projeto.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
