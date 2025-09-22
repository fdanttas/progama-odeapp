// src/pages/Home/index.jsx

import { Link } from 'react-router-dom';
import './styles.css';
import hero from '../../assets/hero.png';
import ofice from '../../assets/ofice.png';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-text">
          <h1>Contabilidade descomplicada para seu negócio</h1>
          <p>
            Somos uma empresa de contabilidade que oferece soluções
            personalizadas para ajudar seu negócio a crescer com segurança e
            eficiência.
          </p>
          <p>
            Economize tempo e foque no que importa. Cuidamos da sua folha,
            impostos e muito mais.
          </p>
          <Link to="/contact" className="btn">
            Fale Conosco
          </Link>
          <Link to="/services" className="btn btn-light">
            Nossos Serviços
          </Link>
        </div>
        <div className="hero-img">
          <img src={hero} alt="Hero" />
        </div>
      </section>

      <section className="about">
        <div className="about-img">
          <img src={ofice} alt="Ofice" />
        </div>
        <div className="about-text">
          <h2>Quem Somos</h2>
          <p>
            Somos uma empresa de contabilidade com mais de 10 anos de
            experiência, especializada em atender pequenas e médias empresas.
            Nossa missão é oferecer soluções contábeis personalizadas que ajudem
            nossos clientes a crescerem com segurança e eficiência.
          </p>
          <Link to="/about" className="btn btn-light">
            Sobre Nós
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
