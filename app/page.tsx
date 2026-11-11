import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";
import ProjectGrid from "./project-grid";
import { projects } from "./projects";

const experience = [
  {
    period: "Ago. 2026 · Actualidad",
    title: "Web & Tools Developer",
    company: "Difriho S.A.",
    description: "Desarrollo el catálogo web y las herramientas de administración con PHP y MySQL. Trabajo con productos, documentación, formularios e interfaces responsive, con revisión de calidad y despliegues iterativos.",
    project: "/projects/difriho",
  },
  {
    period: "Sept. 2025 · Ene. 2026",
    title: "Data Annotator",
    company: "DataAnnotation",
    description: "Anotación y evaluación de datos según criterios de precisión y consistencia, con detección de errores.",
  },
  {
    period: "Jun. 2024 · Sept. 2024",
    title: "Gameplay & Features Developer",
    company: "Player2Player · Free2Play Campus",
    description: "Desarrollo de gameplay y funcionalidades en Unity para FreeXpace: Waves Survival, un juego móvil publicado.",
    project: "/projects/freexpace",
  },
  {
    period: "Abr. 2020 · Mar. 2021",
    title: "Web Developer",
    company: "Difriho S.A.",
    description: "Desarrollo web, mantenimiento de contenidos y soporte técnico.",
  },
  {
    period: "Mar. 2019 · Jun. 2019",
    title: "App Developer Intern",
    company: "Hospital Clínic",
    description: "Programación, pruebas y mejora de funcionalidades durante las prácticas de desarrollo de aplicaciones.",
  },
];

const technologies = [
  { area: "Videojuegos", tools: "Unity · C# · Unreal Engine · C++ · Phaser · SFML" },
  { area: "Aplicaciones", tools: "Flutter · Dart · Android Studio · Riverpod · Drift" },
  { area: "Web y datos", tools: "PHP · MySQL · JavaScript · Bootstrap · WordPress · Supabase" },
  { area: "Herramientas", tools: "Git · GitHub · Excel · Python" },
];

export default function Home() {
  return (
    <main id="contenido" className="shell">
      <section className="hero" aria-labelledby="intro">
        <div className="hero-copy">
          <p className="location"><MapPin size={15} aria-hidden="true" /> Molins de Rei, Barcelona</p>
          <h1 id="intro">Marc Vicente <span>Cazallas</span></h1>
          <p className="hero-role">Desarrollador de videojuegos y software</p>
          <p className="intro-text">
            He desarrollado gameplay para un juego móvil publicado, apps en Flutter y herramientas web.
            Me interesa el diseño de sistemas y cómo los eventos, la progresión y las métricas ayudan a mejorar un juego tras su lanzamiento.
          </p>
          <div className="actions">
            <a className="button button-primary" href="#projects">Ver proyectos <ArrowDown size={17} aria-hidden="true" /></a>
            <a className="button button-outline" href="/Marc_Vicente_Cazallas_CV.pdf" download>Descargar CV <Download size={16} aria-hidden="true" /></a>
          </div>
        </div>
        <Link className="hero-feature" href="/projects/multiversos">
          <div className="hero-feature-image">
            <Image
              src="/projects/multiversos-inicio.webp"
              alt="Pantalla de inicio de Multiversos con el texto PRESS TO START"
              fill
              preload
              sizes="(max-width: 820px) 100vw, 54vw"
            />
          </div>
          <div className="feature-caption">
            <div><p>Prototipo en desarrollo</p><strong>Multiversos</strong></div>
            <span className="circle-arrow"><ArrowUpRight size={23} aria-hidden="true" /></span>
          </div>
        </Link>
      </section>

      <section className="site-section" id="projects" aria-labelledby="projects-title">
        <h2 id="projects-title">Proyectos</h2>
        <ProjectGrid projects={projects} />
      </section>

      <section className="site-section split-section" id="experience" aria-labelledby="experience-title">
        <div>
          <h2 id="experience-title">Experiencia</h2>
          <p className="section-copy">Gameplay, desarrollo web y revisión de calidad.</p>
        </div>
        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.period}>
              <p className="timeline-period">{job.period}</p>
              <div>
                <h3>{job.title}</h3>
                <p className="timeline-company">{job.company}</p>
                <p className="body-copy">{job.description}</p>
                {job.project && (
                  <Link className="text-link" href={job.project}>
                    Ver proyecto <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="site-section split-section" id="liveops" aria-labelledby="liveops-title">
        <div>
          <h2 id="liveops-title">Diseño y LiveOps</h2>
          <p className="section-copy">Me interesa cómo evoluciona un juego después de su lanzamiento.</p>
        </div>
        <div className="focus-list">
          <div>
            <h3>Eventos y progresión</h3>
            <p className="body-copy">Quiero explorar cómo las misiones y recompensas dan a los jugadores motivos para volver. En Multiversos he prototipado interfaces de colección, misiones y eventos.</p>
          </div>
          <div>
            <h3>Métricas y calidad</h3>
            <p className="body-copy">Me interesa evaluar la participación y la retención tras un evento. En Profitly he trabajado con comparativas de periodos y seguimiento de respuestas a campañas.</p>
          </div>
        </div>
      </section>

      <section className="site-section split-section" id="stack" aria-labelledby="stack-title">
        <h2 id="stack-title">Tecnologías</h2>
        <dl className="tech-list">
          {technologies.map(({ area, tools }) => (
            <div key={area}><dt>{area}</dt><dd>{tools}</dd></div>
          ))}
        </dl>
      </section>
    </main>
  );
}
