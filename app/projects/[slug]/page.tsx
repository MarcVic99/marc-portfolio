import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "../../projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main id="contenido" className="shell detail">
      <Link className="text-link back-link" href="/#projects"><ArrowLeft size={17} aria-hidden="true" /> Todos los proyectos</Link>
      <section className={`detail-intro${project.cover ? " detail-with-cover" : ""}`} aria-labelledby="project-title">
        <div>
          <p className="project-context">{project.context}</p>
          <h1 id="project-title">{project.title}</h1>
          <p className="intro-text">{project.summary}</p>
          <ul className="tags" aria-label="Tecnologías">
            {project.stack.map((item) => <li key={item}>{item}</li>)}
          </ul>
          {project.link && (
            <a className="button button-primary detail-action" href={project.link.href} target="_blank" rel="noreferrer">
              {project.link.label} <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          )}
        </div>
        {project.cover && (
          <div className="detail-cover">
            <Image src={project.cover.src} alt={project.cover.alt} fill preload sizes="(max-width: 820px) 100vw, 52vw" />
          </div>
        )}
      </section>

      <section className="site-section split-section" aria-labelledby="contribution">
        <h2 id="contribution">Mi trabajo</h2>
        <div className="focus-list">
          {project.details.map(({ title, text }) => (
            <div key={title}>
              <h3>{title}</h3>
              <p className="body-copy">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {project.gallery && (
        <section className="site-section" aria-labelledby="gallery-title">
          <h2 id="gallery-title">Capturas</h2>
          <div className="gallery">
            {project.gallery.map((image) => (
              <figure key={image.src}>
                <a href={image.src} target="_blank" rel="noreferrer" aria-label={`Ampliar imagen. ${image.alt}`}>
                  <div className="gallery-image">
                    <Image src={image.src} alt={image.alt} fill sizes="(max-width: 580px) 100vw, 50vw" />
                  </div>
                </a>
                <figcaption>{image.alt}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
