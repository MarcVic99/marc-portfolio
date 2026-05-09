"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  Brain,
  ExternalLink,
  Gamepad2,
  Layers,
  Play,
  Puzzle,
  Sparkles,
  Users,
} from "lucide-react";

const project = {
  title: "Drifting Away",
  subtitle: "Unreal Engine project nominated at ENTI-UB Awards",
  type: "Unreal Engine Game",
  stack: ["Unreal Engine", "C++", "Gameplay", "Game Design", "Team Production"],
  image: "/projects/drifting-away-cover.png",
  play: "https://ericloo.itch.io/drifting-away",
};

const features = [
  {
    icon: Gamepad2,
    title: "UX/UI development",
    text: "Participación en interacción y funcionalidades principales de UI y UX del proyecto.",
  },
  {
    icon: Brain,
    title: "Player experience",
    text: "Trabajo enfocado en la experiencia, ritmo, claridad de objetivos y sensaciones del jugador.",
  },
  {
    icon: Puzzle,
    title: "Interactive systems",
    text: "Desarrollo y ajuste de sistemas interactivos dentro del flujo de juego.",
  },
  {
    icon: Users,
    title: "Team workflow",
    text: "Proyecto desarrollado en equipo con planificación, iteración y reparto de responsabilidades.",
  },
  {
    icon: Award,
    title: "ENTI-UB nomination",
    text: "Proyecto nominado a los ENTI-UB Awards de 3º curso.",
  },
  {
    icon: Layers,
    title: "Production polish",
    text: "Iteración sobre mecánicas y presentación para mejorar la calidad final del proyecto.",
  },
];

const gallery = [
  "/projects/drifting-away-image.png",
  "/projects/drifting-away-image2.png",
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
      {children}
    </span>
  );
}

export default function DriftingAwayPage() {
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
            <Badge>ENTI-UB Awards nominee</Badge>
          </div>

          <h1 className="text-5xl font-black tracking-tight text-white md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-5 text-xl font-semibold text-cyan-300">
            {project.subtitle}
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Proyecto desarrollado en Unreal Engine y nominado a los ENTI-UB Awards
            de 3º curso. El foco del proyecto estuvo en la experiencia de jugador,
            los sistemas de gameplay y la producción en equipo.
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

      <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Features
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            What I worked on
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            Áreas principales del desarrollo, desde gameplay hasta experiencia de usuario.
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
                alt={`Drifting Away screenshot ${index + 1}`}
                className="h-72 w-full rounded-2xl object-cover"
              />
            </motion.div>
          ))}
        </div>

        <a
          href={project.play}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-bold text-white transition hover:border-cyan-300/60 hover:bg-white/10"
        >
          <ExternalLink size={18} />
          View project page
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