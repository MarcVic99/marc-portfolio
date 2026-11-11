"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Gamepad2, Smartphone } from "lucide-react";
import type { Project, ProjectCategory } from "./projects";

const filters = ["Todos", "Videojuegos", "Apps", "Web"] as const;

type ProjectCard = Pick<Project, "slug" | "title" | "category" | "context" | "summary" | "stack" | "cover">;

export default function ProjectGrid({ projects }: { projects: ProjectCard[] }) {
  const [filter, setFilter] = useState<"Todos" | ProjectCategory>("Todos");
  const visibleProjects = filter === "Todos" ? projects : projects.filter((project) => project.category === filter);

  return (
    <>
      <div className="filters" role="group" aria-label="Filtrar por tipo de proyecto">
        {filters.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={filter === category}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">{visibleProjects.length} proyectos</p>
      <div className="project-grid">
        {visibleProjects.map((project) => (
          <article className="project-card" key={project.slug}>
            <Link href={`/projects/${project.slug}`} className="card-link">
              <div className={`card-cover${project.cover ? "" : " card-placeholder"}`}>
                {project.cover ? (
                  <Image
                    src={project.cover.src}
                    alt=""
                    fill
                    sizes="(max-width: 580px) 100vw, (max-width: 940px) 50vw, 33vw"
                  />
                ) : project.category === "Apps" ? (
                  <Smartphone size={54} strokeWidth={1} aria-hidden="true" />
                ) : (
                  <Gamepad2 size={58} strokeWidth={1} aria-hidden="true" />
                )}
                <span className="category">{project.category}</span>
              </div>
              <div className="card-copy">
                <p className="project-context">{project.context}</p>
                <h3>{project.title}<ArrowUpRight size={20} aria-hidden="true" /></h3>
                <p className="body-copy">{project.summary}</p>
                <ul className="tags" aria-label="Tecnologías">
                  {project.stack.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
