"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Gamepad2,
  Layers,
  Play,
  Rocket,
  Smartphone,
  Target,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

const project = {
  title: "FreeXpace: Waves Survival",
  subtitle: "Unity mobile game developed during Free2Play Campus",
  type: "Unity Mobile Game",
  stack: ["Unity", "C#", "Mobile", "Gameplay", "Free-to-play"],
  image: "/projects/freexpace-cover.png",
  store:
    "https://play.google.com/store/apps/details?id=com.PlayerToPlayer.FreeXpaceWavesRift&hl=en_GB",
};

const features = [
  {
    icon: Gamepad2,
    title: "Gameplay features",
    text: "Participación en el desarrollo de funcionalidades jugables y sistemas orientados a la experiencia principal del juego.",
  },
  {
    icon: Smartphone,
    title: "Mobile development",
    text: "Trabajo sobre un proyecto para dispositivos móviles, teniendo en cuenta controles, interfaz y experiencia en pantalla táctil.",
  },
  {
    icon: Rocket,
    title: "Free-to-play production",
    text: "Proyecto desarrollado dentro de un entorno de incubadora profesional enfocado en videojuegos free-to-play.",
  },
  {
    icon: Wrench,
    title: "Feature implementation",
    text: "Implementación y ajuste de funcionalidades dentro del flujo de producción del videojuego.",
  },
  {
    icon: Target,
    title: "Gameplay balancing",
    text: "Soporte en el ajuste de sistemas, ritmo y comportamiento de juego para mejorar la experiencia del jugador.",
  },
  {
    icon: Users,
    title: "Professional team workflow",
    text: "Trabajo en equipo junto a Player2Player durante Free2Play Campus en Vitoria-Gasteiz.",
  },
];

const gallery = [
  "/projects/freexpace-cover.png",
  "/projects/freexpace-image.png",
  "/projects/freexpace-image2.png",
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
      {children}
    </span>
  );
}

export default function FreeXpacePage() {
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
            <Badge>Professional incubator project</Badge>
          </div>

          <h1 className="text-5xl font-black tracking-tight text-white md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-5 text-xl font-semibold text-cyan-300">
            {project.subtitle}
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Videojuego móvil desarrollado por Player2Player durante Free2Play
            Campus en Vitoria-Gasteiz. Participé como Gameplay & Features
            Developer, trabajando en funcionalidades jugables, ajustes del
            proyecto y soporte al desarrollo dentro de un entorno profesional.
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
              href={project.store}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              <Smartphone size={18} />
              View on Google Play
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
            <Smartphone className="mb-4 text-cyan-300" size={26} />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Platform
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">Mobile Game</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Proyecto desarrollado para dispositivos móviles con Unity.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <Zap className="mb-4 text-cyan-300" size={26} />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Role
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">
              Gameplay & Features
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Desarrollo de funcionalidades y soporte en sistemas de gameplay.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <Rocket className="mb-4 text-cyan-300" size={26} />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Context
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">
              Free2Play Campus
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Proyecto profesional desarrollado en una incubadora de videojuegos.
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
            Features
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            What I worked on
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            Áreas principales del proyecto en las que participé durante mi etapa
            como Gameplay & Features Developer.
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
            Gallery
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Screens and store visuals
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
                alt={`FreeXpace screenshot ${index + 1}`}
                className="h-72 w-full rounded-2xl object-cover"
              />
            </motion.div>
          ))}
        </div>

        <a
          href={project.store}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-bold text-white transition hover:border-cyan-300/60 hover:bg-white/10"
        >
          <ExternalLink size={18} />
          View store page
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