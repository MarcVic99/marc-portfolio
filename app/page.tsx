"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Code2,
  Download,
  ExternalLink,

  Mail,
  MapPin,
  Play,
  Rocket,
  Smartphone,
  Sparkles,
  Trophy,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type ProjectLink = {
  label: string;
  href: string;
  icon: React.ElementType<{ size?: number; className?: string }>; 
};

type Project = {
  title: string;
  category: "Games" | "Apps" | "Web";
  type: string;
  stack: string[];
  description: string;
  impact: string;
  image: string;
  links: ProjectLink[];
  featured: boolean;
};

type BadgeProps = {
  children: React.ReactNode;
};

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

const profile = {
  name: "Marc Vicente Cazallas",
  role: "Junior Software & Gameplay Developer",
  location: "Molins de Rei, Barcelona",
  email: "marc.vicente@estudiant.enti.cat",
  phone: "627 877 302",
  linkedin: "https://www.linkedin.com/in/marc-vicente-cazallas-b33249158/",
  github: "https://github.com/MarcVic99",
  cv: "/Marc_Vicente_Cazallas_CV.pdf",
};

const projects: Project[] = [
  {
    title: "Light Keeper",
    category: "Games",
    type: "Unity Game",
    stack: ["Unity", "C#", "Game Design"],
    description:
      "Videojuego desarrollado en Unity durante Proyectos II en ENTI-UB. Participé en el desarrollo de mecánicas, interacción, diseño de niveles y sistemas de gameplay. Ganador del premio ENTI-UB Awards 2022 de 2º curso.",
    impact: "Award winning project",
    image:
      "/projects/light-keeper-cover.png",
    links: [
      { label: "Play on itch.io", href: "https://nucelarwizards.itch.io/light-keeper", icon: Play },
{ label: "Case study", href: "/projects/light-keeper", icon: ArrowUpRight },    ],
    featured: true,
  },
  {
    title: "Drifting Away",
    category: "Games",
    type: "Unreal Engine Game",
    stack: ["Unreal Engine", "C++", "Gameplay"],
    description:
      "Proyecto nominado a los ENTI-UB Awards de 3º curso, centrado en experiencia, sistemas de juego y producción en equipo.",
    impact: "ENTI-UB Awards nominee",
    image:
      "/projects/drifting-away-cover.png",
    links: [
      { label: "Play on itch.io", href: "https://ericloo.itch.io/drifting-away", icon: Play },
{ label: "Case study", href: "/projects/drifting-away", icon: ArrowUpRight },    ],
    featured: true,
  },
  {
    title: "FreeXpace: Waves Survival",
    category: "Games",
    type: "Unity Mobile Game",
    stack: ["Unity", "C#", "Mobile"],
    description:
      "Videojuego móvil de Player2Player desarrollado durante Free2Play Campus. Participación en gameplay y features.",
    impact: "Professional incubator project",
    image:
      "/projects/freeXpace-cover.png",
    links: [
      { label: "Store page", href: "https://play.google.com/store/apps/details?id=com.PlayerToPlayer.FreeXpaceWavesRift&hl=en_GB", icon: Smartphone },
{ label: "Case study", href: "/projects/freexpace", icon: ArrowUpRight },    ],
    featured: true,
  },
  {
    title: "Sales Tracker App - Profitly",
    category: "Apps",
    type: "Flutter App",
    stack: ["Flutter", "Dart", "Drift", "Riverpod"],
    description:
      "Aplicación móvil para gestionar productos, stock, recibos, ventas, descuentos, beneficios y estadísticas de negocio.",
    impact: "Real business tool",
    image:
      "/projects/sales-tracker-cover.png",
    links: [
      { label: "Case study", href: "/projects/sales-tracker", icon: ArrowUpRight },
      { label: "GitHub", href: "https://github.com/MarcVic99", icon: FaGithub },
    ],
    featured: true,
  },
  {
    title: "Difriho Website",
    category: "Web",
    type: "Corporate Website",
    stack: ["Bootstrap", "PHP", "MySQL", "Backend"],
    description:
      "Proyecto web corporativo desarrollado desde cero junto a otro desarrollador. Mi responsabilidad fue toda la parte de backend con PHP y MySQL, mientras la otra parte se centró principalmente en frontend. También trabajé con cliente externo, peticiones reales e iteraciones de desarrollo.",
    impact: "Full backend ownership",
    image: "/projects/difriho-cover.png",
    links: [
      { label: "Visit website", href: "https://www.difriho.com/", icon: ExternalLink },
      { label: "Case study", href: "/projects/difriho", icon: ArrowUpRight },
    ],
    featured: true,
  },
];

const techGroups = [
  { title: "Game Development", items: ["Unity", "Unreal Engine", "Phaser", "SFML", "C#", "C++"] },
  { title: "Apps & Mobile", items: ["Flutter", "Dart", "Android Studio", "Drift", "Riverpod"] },
  { title: "Web & Backend", items: ["JavaScript", "PHP", "MySQL", "Bootstrap", "WordPress"] },
  { title: "Other", items: ["Python", "C", "Git", "GitHub", "Excel"] },
];

const experience = [
  {
    period: "2025 — 2026",
    title: "Data Annotator",
    company: "DataAnnotation",
    text: "Revisión, clasificación y anotación de datos siguiendo criterios de calidad, precisión y consistencia.",
  },
  {
    period: "2024",
    title: "Gameplay & Features Developer",
    company: "Player2Player · Free2Play Campus",
    text: "Desarrollo de gameplay y features para FreeXpace: Waves Survival en un entorno profesional de incubadora.",
  },
  {
    period: "2020 — 2021",
    title: "Web Developer",
    company: "Difriho S.A.",
    text: "Desarrollo y mantenimiento de funcionalidades web, soporte técnico y tareas relacionadas con presencia digital.",
  },
  {
    period: "2019",
    title: "App Developer Intern",
    company: "Hospital Clínic",
    text: "Prácticas de desarrollo de aplicación, programación, pruebas y mejora de funcionalidades.",
  },
];

const awards = [
  "Ganador ENTI-UB Awards 2022 de 2º curso con Light Keeper.",
  "Nominado a los ENTI-UB Awards de 3º curso con Drifting Away.",
  "Participación como developer en FreeXpace dentro de Free2Play Campus.",
];

const filters = ["All", "Games", "Apps", "Web"];

function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-400">{description}</p>}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-cyan-950/20 backdrop-blur"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        <div className="absolute left-5 top-5 flex gap-2">
          <Badge>{project.category}</Badge>
          {project.featured && <Badge>Featured</Badge>}
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-cyan-300">{project.type}</p>
            <h3 className="mt-1 text-2xl font-bold text-white">{project.title}</h3>
          </div>
          <span className="rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-200">
            <Rocket size={20} />
          </span>
        </div>

        <p className="text-sm leading-6 text-slate-300">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-300">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-emerald-300/10 bg-emerald-300/5 px-4 py-3 text-sm text-emerald-100">
          {project.impact}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-cyan-100"
              >
                <Icon size={16} />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}

export default function PortfolioLanding() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      </div>

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#top" className="text-sm font-bold uppercase tracking-[0.35em] text-white">
          MVC
        </a>
        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#projects" className="hover:text-cyan-200">Projects</a>
          <a href="#stack" className="hover:text-cyan-200">Stack</a>
          <a href="#experience" className="hover:text-cyan-200">Experience</a>
          <a href="#contact" className="hover:text-cyan-200">Contact</a>
        </div>
      </nav>

      <section id="top" className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 pb-24 pt-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pt-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
            <Sparkles size={16} /> Open to junior developer opportunities
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 text-2xl font-semibold text-cyan-300 md:text-3xl">{profile.role}</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Desarrollo videojuegos, apps móviles y soluciones web combinando programación, diseño, gameplay y visión de producto. He trabajado en proyectos publicados, herramientas internas y experiencias interactivas con Unity, Flutter, Unreal Engine, C++, C#, PHP y MySQL.          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              See projects <ArrowUpRight size={18} />
            </a>
            <a
              href={profile.cv}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-bold text-white transition hover:border-cyan-300/60 hover:bg-white/10"
            >
              Download CV <Download size={18} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:text-cyan-200">
              <FaGithub size={16} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:text-cyan-200">
              <FaLinkedin size={16} /> LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:text-cyan-200">
              <Mail size={16} /> Email
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="relative"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur">
            <div className="rounded-[1.5rem] border border-cyan-300/10 bg-slate-900/80 p-6">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs text-slate-500">portfolio.tsx</span>
              </div>
              <pre className="overflow-hidden text-sm leading-7 text-slate-300">
                <code>{`const developer = {
                  name: "Marc Vicente",
                  focus: ["Gameplay", "Apps", "Web"],
                  stack: ["Unity", "Flutter", "C++", "C#"],
                  status: "building interactive products"
                };`}</code>
              </pre>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Trophy className="mb-3 text-cyan-300" size={22} />
                  <p className="text-2xl font-bold text-white">2</p>
                  <p className="text-xs text-slate-400">ENTI-UB recognitions</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Smartphone className="mb-3 text-cyan-300" size={22} />
                  <p className="text-2xl font-bold text-white">2+</p>
                  <p className="text-xs text-slate-400">mobile game projects</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="projects" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Selected work"
            title="Featured projects"
            description="Una selección de proyectos jugables, apps y experiencias interactivas con enlaces para probar, descargar o ver el trabajo en detalle."
          />
          <div className="flex gap-2 rounded-full border border-white/10 bg-white/5 p-1">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeFilter === filter ? "bg-cyan-300 text-slate-950" : "text-slate-300 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <section id="stack" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Tech stack"
          title="Tools I build with"
          description="Tecnologías organizadas por área para mostrar rápidamente dónde encaja cada habilidad dentro de proyectos reales."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {techGroups.map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
            >
              <Code2 className="mb-4 text-cyan-300" size={24} />
              <h3 className="mb-4 text-lg font-bold text-white">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="experience" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Experience"
          title="Professional timeline"
          description="Experiencia en desarrollo de gameplay, apps, web y análisis de datos, combinando trabajo profesional con proyectos publicados."
        />
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <BriefcaseBusiness className="mb-4 text-cyan-300" size={26} />
            <h3 className="text-2xl font-bold text-white">About me</h3>
            <p className="mt-4 leading-7 text-slate-300">
              Soy desarrollador junior con base en videojuegos, apps móviles y desarrollo web. Me interesa construir sistemas interactivos, pulir mecánicas, crear herramientas útiles y transformar ideas en productos funcionales.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
              <MapPin size={16} /> {profile.location}
            </div>
          </div>

          <div className="space-y-4">
            {experience.map((item) => (
              <div key={`${item.company}-${item.period}`} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                  <div>
                    <p className="text-sm font-semibold text-cyan-300">{item.period}</p>
                    <h3 className="mt-1 text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.company}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <SectionTitle eyebrow="Recognition" title="Awards & highlights" />
        <div className="grid gap-4 md:grid-cols-3">
          {awards.map((award) => (
            <div key={award} className="rounded-3xl border border-cyan-300/10 bg-cyan-300/5 p-6">
              <Award className="mb-4 text-cyan-300" size={24} />
              <p className="text-sm leading-6 text-slate-200">{award}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 text-center shadow-2xl shadow-cyan-950/20 backdrop-blur md:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Contact</p>
          <h2 className="text-3xl font-bold text-white md:text-5xl">Let’s build something interactive.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-slate-300">
            Disponible para oportunidades junior en desarrollo de software, gameplay, apps móviles y proyectos interactivos.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-bold text-slate-950 hover:bg-cyan-200">
              <Mail size={18} /> Send email
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-bold text-white hover:border-cyan-300/60">
              <FaGithub size={18} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-bold text-white hover:border-cyan-300/60">
              <FaLinkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
