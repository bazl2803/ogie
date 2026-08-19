import { Button, Logo } from "@/components";
import "./hero.scss";
import {
  LiaBoxOpenSolid,
  LiaStoreSolid,
  LiaTruckSolid,
} from "react-icons/lia";

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

      <div className="hero-services">
        <div className="hero-services-item">
          <LiaTruckSolid className="hero-services-item-icon" />
          <span className="hero-services-item-title">Envíos a Domicilio</span>
          <p className="hero-services-item-description">
            Realizamos envíos a todo El Salvador.
          </p>
        </div>

        <div className="hero-services-item">
          <LiaStoreSolid className="hero-services-item-icon" />
          <span className="hero-services-item-title">Retiro en Tienda</span>
          <span className="hero-services-item-description">
            Visítanos en nuestras sucursales en Sonsonate.
          </span>
        </div>

        <div className="hero-services-item">
          <LiaBoxOpenSolid className="hero-services-item-icon" />
          <span className="hero-services-item-title">Productos de Calidad</span>
          <span className="hero-services-item-description">
            Productos de alta calidad para sus proyectos.
          </span>
        </div>
      </div>
    </section>
  );
};
