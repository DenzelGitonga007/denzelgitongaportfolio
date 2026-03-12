"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Cloud, Cpu, Layout, Workflow } from "lucide-react";
import SectionHeader from "./SectionHeader";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="text-primary" size={28} />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "Inertia.js"],
  },
  {
    title: "Backend Architecture",
    icon: <Server className="text-primary" size={28} />,
    skills: ["Python (Django)", "PHP (Laravel)", "Node.js", "REST APIs", "SQL", "MongoDB"],
  },
  {
    title: "Business Automation",
    icon: <Workflow className="text-primary" size={28} />,
    skills: ["Power Automate", "Power Apps", "Python Scripting", "Excel Automation", "Office 365"],
  },
  {
    title: "Cloud & Infrastructure",
    icon: <Cloud className="text-primary" size={28} />,
    skills: ["AWS", "Linux Scripting", "GCP", "Firebase", "Docker", "Git"],
  },
  {
    title: "Mobile Development",
    icon: <Cpu className="text-primary" size={28} />,
    skills: ["Kotlin", "Jetpack Compose", "Android Studio", "Mobile UI Design"],
  },
  {
    title: "Tools & Testing",
    icon: <Code2 className="text-primary" size={28} />,
    skills: ["Postman", "Figma", "Vercel", "Webhook Integrations", "Playwright"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/20 relative">
      <div className="container-custom">
        <SectionHeader
          title="Core Expertise"
          subtitle="A comprehensive toolkit of technologies and platforms I use to build production-ready systems."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-12 rounded-[3rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] border border-border group hover:shadow-[0_25px_60px_-15px_rgba(6,92,194,0.1)] hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-20 h-20 rounded-3xl bg-primary/5 flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white group-hover:rotate-[10deg] transition-all duration-700 shadow-sm">
                {category.icon}
              </div>
              <h3 className="text-2xl font-black mb-8 text-foreground/90 group-hover:text-primary transition-colors">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, backgroundColor: "var(--primary)", color: "white" }}
                    className="px-5 py-2 rounded-xl bg-secondary text-sm font-black text-slate-700 transition-all cursor-default border border-transparent hover:shadow-lg hover:shadow-primary/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
