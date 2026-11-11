import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Marc Vicente Cazallas | Videojuegos y desarrollo de software",
    template: "%s | Marc Vicente Cazallas",
  },
  description:
    "Portfolio de Marc Vicente Cazallas. Gameplay en Unity, aplicaciones en Flutter y herramientas web con PHP y MySQL. Interés por el diseño de juegos y LiveOps.",
};

const email = "marc.vicente@estudiant.enti.cat";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" id="top">
      <body>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <header className="site-header">
          <nav className="shell navigation" aria-label="Navegación principal">
            <Link href="/" className="wordmark" aria-label="Marc Vicente Cazallas, inicio">MVC<span>.</span></Link>
            <div className="navigation-links">
              <Link href="/#projects">Proyectos</Link>
              <Link href="/#experience">Experiencia</Link>
              <Link href="/#liveops">LiveOps</Link>
            </div>
            <a href="#contact" className="nav-contact">Contacto <ArrowUpRight size={15} aria-hidden="true" /></a>
          </nav>
        </header>
        {children}
        <footer className="shell site-footer" id="contact">
          <div>
            <h2>Contacto</h2>
            <a className="email-link" href={`mailto:${email}`}><Mail size={18} aria-hidden="true" /> {email}</a>
          </div>
          <div className="footer-links">
            <a href="https://github.com/MarcVic99" target="_blank" rel="noreferrer"><FaGithub size={18} aria-hidden="true" /> GitHub</a>
            <a href="https://www.linkedin.com/in/marc-vicente-cazallas-b33249158/" target="_blank" rel="noreferrer"><FaLinkedin size={18} aria-hidden="true" /> LinkedIn</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
