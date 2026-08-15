"use client";

import { Container } from "@/components";
import Image from "next/image";
import Link from "next/link";
import {
  LiaClockSolid,
  LiaEnvelopeSolid,
  LiaFacebookF,
  LiaInstagram,
  LiaLinkedinIn,
  LiaMapMarkerSolid,
  LiaPhoneSolid,
  LiaWhatsapp,
} from "react-icons/lia";
import "./store-footer.scss";

export function StoreFooter() {
  return (
    <footer className="store-footer">
      <Container className="store-footer__container">
        <div className="store-footer__top">
          {/* Brand info */}
          <div className="store-footer__brand">
            <div className="store-footer__brand-logo">
              <Image
                src="/logo-dark.svg"
                alt="Suministros Eléctricos Logo"
                width={120}
                height={48}
                priority
              />
            </div>
            <p className="store-footer__brand-tagline">
              Especialistas en suministros eléctricos, iluminación y materiales
              de alta calidad para proyectos residenciales, comerciales e
              industriales en El Salvador.
            </p>
            <div className="store-footer__brand-socials">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <LiaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <LiaInstagram />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <LiaWhatsapp />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LiaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Categories links */}
          <div className="store-footer__column">
            <h3 className="store-footer__column-title">Categorías</h3>
            <ul className="store-footer__column-list">
              <li>
                <Link href="/categoria/iluminacion">Iluminación</Link>
              </li>
              <li>
                <Link href="/categoria/cables">Cables y Conductores</Link>
              </li>
              <li>
                <Link href="/categoria/breakers">Dados y Breakers</Link>
              </li>
              <li>
                <Link href="/categoria/herramientas">Herramientas</Link>
              </li>
              <li>
                <Link href="/categoria/plaqueria">Plaquería</Link>
              </li>
              <li>
                <Link href="/categoria/tuberias">Tuberías y Canalización</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service / Quick links */}
          <div className="store-footer__column">
            <h3 className="store-footer__column-title">Servicio al Cliente</h3>
            <ul className="store-footer__column-list">
              <li>
                <Link href="/nosotros">Quiénes Somos</Link>
              </li>
              <li>
                <Link href="/envios">Envíos y Entregas</Link>
              </li>
              <li>
                <Link href="/sucursales">Nuestras Sucursales</Link>
              </li>
              <li>
                <Link href="/preguntas-frecuentes">Preguntas Frecuentes</Link>
              </li>
              <li>
                <Link href="/contacto">Contacto y Cotizaciones</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div className="store-footer__column">
            <h3 className="store-footer__column-title">Contacto</h3>
            <div className="store-footer__contact-info">
              <div className="store-footer__contact-info-item">
                <LiaMapMarkerSolid />
                <span>Sonsonate, El Salvador</span>
              </div>
              <div className="store-footer__contact-info-item">
                <LiaPhoneSolid />
                <span>+(503) 2451-0000 / 7000-0000</span>
              </div>
              <div className="store-footer__contact-info-item">
                <LiaEnvelopeSolid />
                <span>contacto@suministroselectricos.com.sv</span>
              </div>
              <div className="store-footer__contact-info-item">
                <LiaClockSolid />
                <span>Lun - Sáb: 7:30 AM - 5:30 PM</span>
              </div>
            </div>

            <div className="store-footer__newsletter">
              <p className="store-footer__newsletter-text">
                Suscríbete para recibir ofertas y novedades
              </p>
              <form
                className="store-footer__newsletter-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="tu@correo.com"
                  aria-label="Correo electrónico"
                />
                <button type="submit">Suscribirme</button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="store-footer__bottom">
          <p className="store-footer__bottom-copyright">
            &copy; {new Date().getFullYear()} Suministros Eléctricos. Todos los
            derechos reservados.
          </p>
          <ul className="store-footer__bottom-links">
            <li>
              <Link href="/terminos">Términos de Servicio</Link>
            </li>
            <li>
              <Link href="/privacidad">Política de Privacidad</Link>
            </li>
            <li>
              <Link href="/garantias">Garantías</Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
