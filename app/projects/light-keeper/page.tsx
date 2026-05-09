"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  Gamepad2,
  Layers,
  Lightbulb,
  Map,
  Play,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

const project = {
  title: "Light Keeper",
  subtitle: "Award-winning Unity game developed at ENTI-UB",
  type: "Unity Game",
  stack: ["Unity", "C#", "Game Design", "Level Design", "Gameplay"],
  image: "/projects/light-keeper-cover.png",
  play: "https://nucelarwizards.itch.io/light-keeper",
};

const features = [
  {
    icon: Gamepad2,
    title: "Gameplay systems",
    text: "Desarrollo e integración de mecánicas jugables, interacción del jugador y sistemas principales de gameplay.",
  },
  {
    icon: Map,
    title: "Level design",
    text: "Trabajo sobre estructura de niveles, ritmo de juego, navegación y experiencia del jugador.",
  },
  {
    icon: Lightbulb,
    title: "Game feel",
    text: "Ajuste de detalles jugables para mejorar la sensación de control, claridad y respuesta del juego.",
  },
  {
    icon: Users,
    title: "Team project",
    text: "Proyecto desarrollado en equipo dentro del entorno académico de ENTI-UB.",
  },
  {
    icon: Trophy,
    title: "Award winning",
    text: "Ganador del premio ENTI-UB Awards 2022 de 2º curso.",
  },
  {
    icon: Layers,
    title: "Production workflow",
    text: "Participación en un flujo de producción con diseño, implementación, testeo y pulido.",
  },
];

const gallery = [
  "/projects/light-keeper-cover.png",
  "/projects/light-keeper-image.png",
  "/projects/light-keeper-image2.png",
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
      {children}
    </span>
  );
}

export default function LightKeeperPage() {
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
            <Badge>Award winning project</Badge>
          </div>

          <h1 className="text-5xl font-black tracking-tight text-white md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-5 text-xl font-semibold text-cyan-300">
            {project.subtitle}
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Videojuego desarrollado en Unity durante Proyectos II en ENTI-UB.
            Participé en el desarrollo de mecánicas, interacción, diseño de niveles
            y sistemas de gameplay. El proyecto fue reconocido como ganador del
            premio ENTI-UB Awards 2022 de 2º curso.
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
              href={project.play}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              <Play size={18} />
              Play on itch.io
            </a>

            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-bold text-white transition hover:border-cyan-300/60 hover:bg-white/10"
            >
              View features
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
            <Award className="mb-4 text-cyan-300" size={26} />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Recognition
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">ENTI-UB Awards</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Ganador del premio ENTI-UB Awards 2022 de 2º curso.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <Gamepad2 className="mb-4 text-cyan-300" size={26} />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Role
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">Gameplay Developer</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Participación en mecánicas, interacción, niveles y sistemas de juego.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <Sparkles className="mb-4 text-cyan-300" size={26} />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Focus
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">Game Feel</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Pulido de experiencia, claridad jugable y sensación de control.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Features
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            What I worked on
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            Áreas principales del proyecto en las que participé durante el desarrollo.
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
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{feature.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Gallery
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Screens and gameplay
          </h2>
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
                alt={`Light Keeper screenshot ${index + 1}`}
                className="h-72 w-full rounded-2xl object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 text-center shadow-2xl shadow-cyan-950/20 backdrop-blur md:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            More work
          </p>
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Back to all projects
          </h2>
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