"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { cn } from "../lib/utils";

const projects = [
  {
    title: "KAFU E-Admit Platform",
    category: "Fullstack",
    image: "/denzelgitongaportfolio/assets/img/portfolio/kafu_eadmit_1.png",
    description: "Digital admission management system supporting online applications, document verification, and RBAC.",
    tags: ["Laravel", "React", "Inertia.js", "MySQL"],
    link: "https://e-admit.kafu-iihub.com/",
    github: "https://github.com/DenzelGitonga007",
  },
  {
    title: "Ayuuto Parking Management",
    category: "Fullstack",
    image: "/denzelgitongaportfolio/assets/img/portfolio/ayuuto_parking_1.png",
    description: "Smart parking management platform with automated digital parking operations and payment processing.",
    tags: ["Laravel", "React", "TypeScript", "MySQL"],
    link: "https://parking.ayuutto.com",
    github: "https://github.com/DenzelGitonga007",
  },
  {
    title: "Hillary Ngweno Abstracts",
    category: "Web",
    image: "/denzelgitongaportfolio/assets/img/portfolio/hllary_ngweno_home_1.png",
    description: "Digital archive and library management system for the Hillary Ngweno collection.",
    tags: ["Python", "Django", "Tailwind CSS"],
    link: "https://hngweno.kafu-iihub.com/",
    github: "https://github.com/DenzelGitonga007",
  },
  {
    title: "Clarion POS & Inventory",
    category: "Business",
    image: "/denzelgitongaportfolio/assets/img/portfolio/point_of_sale_home_4.png",
    description: "Point-of-Sale and inventory management system for retail operations with transaction reporting.",
    tags: ["Python", "Django", "Bootstrap", "MySQL"],
    link: "#",
    github: "https://github.com/DenzelGitonga007/clarionpos",
  },
  {
    title: "KAFU IIHub Official Site",
    category: "Web",
    image: "/denzelgitongaportfolio/assets/img/portfolio/kafu_iihub_1.png",
    description: "Official digital platform for KAFU Innovation Hub to showcase programs and developer projects.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS"],
    link: "https://kafu-iihub.com",
    github: "https://github.com/DenzelGitonga007",
  },
  {
    title: "Bhumi Order Management",
    category: "Business",
    image: "/denzelgitongaportfolio/assets/img/portfolio/point_of_sale_admin_2.png",
    description: "Business operations platform for managing product orders, stock, and operational workflows.",
    tags: ["Python", "Django", "Kotlin Integration"],
    link: "#",
    github: "https://github.com/DenzelGitonga007",
  },
  {
    title: "Ayuuto Pay Wallet",
    category: "Fintech",
    image: "/denzelgitongaportfolio/assets/img/portfolio/ayuuto_pay.png",
    description: "Digital wallet infrastructure powering financial transactions with mobile money API integrations.",
    tags: ["Laravel", "Webhooks", "API Integration"],
    link: "https://pay.ayuutto.com",
    github: "https://github.com/DenzelGitonga007",
  },
];

const categories = ["All", "Fullstack", "Web", "Business", "Fintech"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-secondary/30 relative">
      <div className="container-custom">
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of production-grade systems, institutional platforms, and business solutions I've built."
        />

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-10 py-3 rounded-2xl text-sm font-black tracking-widest uppercase transition-all duration-500 border shadow-sm",
                activeCategory === cat 
                  ? "bg-primary text-white border-primary shadow-primary/20 scale-105" 
                  : "bg-white text-muted-foreground border-border hover:border-primary/50 hover:text-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-border group hover:shadow-[0_20px_60px_-15px_rgba(6,92,194,0.15)] transition-all duration-700 flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center gap-6 backdrop-blur-[4px]">
                    {project.link !== "#" && (
                      <motion.a 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.link} target="_blank" rel="noopener noreferrer" className="p-5 bg-white text-primary rounded-[1.5rem] shadow-2xl"
                      >
                        <ExternalLink size={28} />
                      </motion.a>
                    )}
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github} target="_blank" rel="noopener noreferrer" className="p-5 bg-white text-foreground rounded-[1.5rem] shadow-2xl"
                    >
                      <Github size={28} />
                    </motion.a>
                  </div>
                </div>
                
                <div className="p-10 flex flex-col flex-grow">
                  <div className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4">{project.category}</div>
                  <h3 className="text-2xl font-black mb-4 text-foreground/90 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-slate-600 text-base mb-10 flex-grow leading-relaxed font-bold group-hover:text-slate-900 transition-colors">{project.description}</p>
                  <div className="flex flex-wrap gap-2.5">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] px-3 py-1.5 rounded-xl bg-secondary text-foreground/60 font-black uppercase tracking-wider border border-border group-hover:border-primary/20 group-hover:bg-primary/5 group-hover:text-primary transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
