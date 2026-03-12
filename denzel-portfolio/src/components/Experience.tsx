"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    role: "Chief Technical Officer (CTO)",
    company: "KAFU Innovation Hub",
    period: "Feb 2026 - Present",
    location: "Kaimosi, Kenya",
    description: "Leading architecture and development of institutional platforms and digital admission systems.",
    achievements: [
      "Leading development of KAFU E‑Admit platform, a full digital admission system.",
      "Engineering role‑based access control systems and multi‑stage approval workflows.",
      "Designing payment verification modules and financial workflow structures.",
    ],
  },
  {
    role: "Lead Software Engineer",
    company: "Ayuuto Ecosystem Solutions",
    period: "Dec 2025 - Feb 2026",
    location: "Remote/Nairobi",
    description: "Contributed to smart parking management and digital wallet infrastructure.",
    achievements: [
      "Worked on Ayuuto Parking architecture (Laravel + React + Inertia.js).",
      "Engineered Ayuuto Pay wallet infrastructure supporting internal ecosystem payments.",
      "Integrated mobile money APIs and webhook-based payment confirmations.",
    ],
  },
  {
    role: "Automation Specialist",
    company: "Unga Limited",
    period: "Mar 2025 - Aug 2025",
    location: "Nairobi, Kenya",
    description: "Developed business process automation solutions using Power Platform and Python.",
    achievements: [
      "Built Excel and Microsoft 365 automation systems for reporting and data processing.",
      "Reduced manual work in operational and data management processes through automation.",
      "Delivered freelance quoting systems and workflow integrations.",
    ],
  },
  {
    role: "Software Engineering Lecturer",
    company: "Finn Church Aid | eMobilis | PLP",
    period: "2023 - 2025",
    location: "Nairobi, Kenya",
    description: "Trained and mentored students in full-stack web development and software engineering best practices.",
    achievements: [
      "Delivered structured training in HTML/CSS, JS, React, Node.js, Python/Django.",
      "Mentored students in backend architecture and REST API development.",
      "Guided learners in building portfolio-ready web applications.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-white relative">
      <div className="container-custom">
        <SectionHeader
          title="Professional Journey"
          subtitle="My career path across software engineering, cloud architecture, and technical training."
        />

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-12 md:pl-20 pb-20 last:pb-0 group"
            >
              {/* Timeline Line */}
              <div className="absolute left-[7px] md:left-[9px] top-0 bottom-0 w-[3px] bg-secondary group-last:bg-transparent">
                <div className="absolute top-2 -left-[9px] md:-left-[11px] w-8 h-8 rounded-full bg-white border-[6px] border-primary shadow-xl group-hover:scale-125 transition-transform duration-500 z-10"></div>
              </div>

              <div className="bg-secondary/20 p-10 md:p-16 rounded-[3rem] border border-border hover:bg-white hover:shadow-[0_30px_70px_-20px_rgba(6,92,194,0.1)] transition-all duration-700">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-6">
                  <div>
                    <h3 className="text-3xl font-black text-foreground mb-2 group-hover:text-primary transition-colors duration-500">{exp.role}</h3>
                    <h4 className="text-xl font-bold text-primary/80">{exp.company}</h4>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-black text-muted-foreground uppercase tracking-widest bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-sm border border-border">
                    <span className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary" /> {exp.period}
                    </span>
                    <span className="hidden sm:inline opacity-30">|</span>
                    <span className="flex items-center gap-2">
                      <MapPin size={16} className="text-primary" /> {exp.location}
                    </span>
                  </div>
                </div>
                
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed font-bold opacity-80 group-hover:opacity-100 transition-opacity">
                  {exp.description}
                </p>
                
                <div className="space-y-5">
                  {exp.achievements.map((achievement, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      className="flex gap-5 items-start bg-white/40 p-5 rounded-2xl border border-transparent hover:border-primary/10 hover:shadow-md transition-all group/item"
                    >
                      <div className="mt-2.5 w-2 h-2 rounded-full bg-primary flex-shrink-0 shadow-[0_0_10px_rgba(6,92,194,0.5)] group-hover/item:scale-150 transition-transform"></div>
                      <p className="text-lg text-foreground/80 font-bold leading-relaxed">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
