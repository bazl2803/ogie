import { Button, Logo } from "@/components";
import "./hero.scss";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <div className="hero-background" />

        <div className="hero-logo">
          <Logo />
        </div>

        <span className="hero-decoration">Material Eléctrico</span>

        <div className="hero-heading">
          <h1>
            Soluciones Eléctricas <br /> para su Hogar o Proyecto
          </h1>
        </div>

        <p className="hero-description">
          Encuentra todo lo que necesitas para tus instalaciones eléctricas. Productos de calidad, herramientas profesionales y soluciones confiables.
        </p>

        <div className="hero-actions">
          <Button variant="filled">Ver Productos</Button>
          <Button>Contáctanos</Button>
        </div>
      </div>
    </section>
  );
};
