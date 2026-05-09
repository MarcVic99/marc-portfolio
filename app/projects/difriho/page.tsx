"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  Database,
  ExternalLink,
  Globe,
  Monitor,
  Route,
  Server,
  Settings,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const project = {
  title: "Difriho Website",
  subtitle: "Corporate website co-developed from scratch with full backend ownership",
  type: "Corporate Website",
  stack: [
    "Bootstrap",
    "PHP",
    "MySQL",
    "Backend Development",
    "Client Work",
    "Iterative Workflow",
  ],
  image: "/projects/difriho-cover.png",
  website: "https://www.difriho.com/",
};

const features = [
  {
    icon: Server,
    title: "Full backend ownership",
    text: "Me encargué de toda la parte de backend del proyecto, desarrollando la lógica principal del sitio con PHP y conectándola con la base de datos.",
  },
  {
    icon: Database,
    title: "MySQL database",
    text: "Trabajo con MySQL para estructurar, consultar y gestionar datos necesarios para las funcionalidades del sitio web.",
  },
  {
    icon: Route,
    title: "Website co-development",
    text: "La web fue creada desde cero junto a otro desarrollador: él se centró principalmente en frontend y yo asumí la parte backend.",
  },
  {
    icon: Code2,
    title: "PHP development",
    text: "Desarrollo de funcionalidades en PHP para resolver necesidades internas del proyecto y conectar correctamente datos, lógica y vistas.",
  },
  {
    icon: Settings,
    title: "Client requirements",
    text: "Trabajo con un cliente externo, adaptando funcionalidades, estructura y cambios según sus peticiones y necesidades reales.",
  },
  {
    icon: Wrench,
    title: "Iterative workflow",
    text: "Desarrollo mediante iteraciones, revisando cambios, aplicando feedback y mejorando progresivamente el resultado final.",
  },
];

const gallery = [
  "/projects/difriho-cover.png",
  "/projects/difriho-image.png",
  "/projects/difriho-image2.png",
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
      {children}
    </span>
  );
}

export default function DifrihoPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      </div>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-8">
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-100"
        >
          <ArrowLeft size={16} />
          Back to portfolio
        </a>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 flex flex-wrap gap-2">
            <Badge>{project.type}</Badge>
            <Badge>Website co-developed from scratch</Badge>
            <Badge>Full backend ownership</Badge>
          </div>

          <h1 className="text-5xl font-black tracking-tight text-white md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-5 text-xl font-semibold text-cyan-300">
            {project.subtitle}
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Proyecto web corporativo desarrollado desde cero junto a otro
            desarrollador durante mi etapa como Web Developer en Difriho S.A. La
            otra parte se centró principalmente en frontend, mientras que yo
            asumí toda la parte de backend, trabajando con PHP y MySQL para
            construir la lógica del sitio, la gestión de datos y la conexión con
            las vistas web. También aprendí a trabajar con un cliente externo,
            adaptarme a sus peticiones y desarrollar mediante iteraciones.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-900 px-4 py-2 text-sm text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={project.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              <ExternalLink size={18} />
              Visit website
            </a>

            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-bold text-white transition hover:border-cyan-300/60 hover:bg-white/10"
            >
              View backend work
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-cyan-950/30 backdrop-blur"
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full rounded-[1.5rem] object-cover"
          />
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <Server className="mb-4 text-cyan-300" size={26} />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Main contribution
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">
              Full backend ownership
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Desarrollo completo de la parte backend dentro de una web creada
              desde cero en equipo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <Database className="mb-4 text-cyan-300" size={26} />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Data
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">PHP & MySQL</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Lógica backend, conexión con base de datos y soporte a
              funcionalidades del sitio.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <Monitor className="mb-4 text-cyan-300" size={26} />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Workflow
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">Client work</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Desarrollo adaptado a peticiones reales de cliente y trabajo
              mediante iteraciones.
            </p>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="relative z-10 mx-auto max-w-7xl px-6 py-20"
      >
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Backend & web work
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            What I built
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            Áreas principales en las que trabajé: desarrollo backend, lógica web,
            base de datos, integración con frontend, peticiones de cliente e
            iteraciones de desarrollo.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
              >
                <Icon className="mb-4 text-cyan-300" size={26} />
                <h3 className="text-xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {feature.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Technical focus
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Backend ownership & client workflow
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            Este proyecto me permitió trabajar en una parte especialmente
            técnica: responsabilizarme de todo el backend de una web creada desde
            cero en equipo, conectarlo con la base de datos y adaptarlo a las
            necesidades de un cliente real.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <ShieldCheck className="mb-4 text-cyan-300" size={28} />
            <h3 className="text-2xl font-bold text-white">
              Main responsibility
            </h3>
            <p className="mt-4 leading-7 text-slate-300">
              Mi principal responsabilidad fue el desarrollo completo del
              backend: organización de la lógica del proyecto, conexión con
              MySQL, desarrollo de funcionalidades en PHP e integración con las
              vistas web creadas en el frontend.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <Settings className="mb-4 text-cyan-300" size={28} />
            <h3 className="text-2xl font-bold text-white">
              Development workflow
            </h3>
            <p className="mt-4 leading-7 text-slate-300">
              Además del desarrollo técnico, aprendí a trabajar con un cliente
              externo, interpretar sus peticiones, aplicar feedback y avanzar
              mediante iteraciones hasta llegar a una solución funcional y
              alineada con sus necesidades.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Gallery
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Website visuals
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            Capturas y mockups de presentación del proyecto web corporativo.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {gallery.map((image, index) => (
            <motion.div
              key={`${image}-${index}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-3"
            >
              <img
                src={image}
                alt={`Difriho website screenshot ${index + 1}`}
                className="h-72 w-full rounded-2xl object-cover"
              />
            </motion.div>
          ))}
        </div>

        <a
          href={project.website}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-bold text-white transition hover:border-cyan-300/60 hover:bg-white/10"
        >
          <Globe size={18} />
          Visit live website
        </a>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 text-center shadow-2xl shadow-cyan-950/20 backdrop-blur md:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            More work
          </p>
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Back to all projects
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-slate-300">
            Vuelve al portfolio principal para explorar videojuegos, apps y
            otros proyectos web.
          </p>
          <a
            href="/#projects"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-bold text-slate-950 hover:bg-cyan-200"
          >
            See all projects
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}