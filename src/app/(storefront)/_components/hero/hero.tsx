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

        <span className="hero-decoration">Tienda Especializada</span>

        <div className="hero-heading">
          <h1>
            Soluciones Eléctricas <br /> para su Hogar <br /> o Proyecto
          </h1>
        </div>

        <p className="hero-description">
          Contamos con una amplia gama de productos eléctricos para iluminacion,
          tomacorrientes, cables, herramientas, tuberias, reflectores y todo lo
          necesario para sus proyectos.
        </p>

        <div className="hero-actions">
          <Button variant="filled">Ver Productos</Button>
          <Button>Contáctanos</Button>
        </div>
      </div>
    </section>
  );
};
