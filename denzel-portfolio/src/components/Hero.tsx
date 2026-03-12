"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const typewriterItems = [
  "Full-Stack Software Engineer",
  "Automation Specialist",
  "AWS Cloud Practitioner",
  "Technical Trainer & Lecturer",
  "Freelance Developer"
];

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const handleType = () => {
      const currentFullText = typewriterItems[index % typewriterItems.length];
      
      if (isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setSpeed(50);
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex(index + 1);
        setSpeed(500);
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, speed, mounted]);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#00d2ff1a] rounded-full blur-[100px] animate-pulse delay-700"></div>
        {/* Abstract Shapes */}
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.1, 1] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-[15%] w-64 h-64 border border-primary/5 rounded-[3rem] -z-10"
        ></motion.div>
        <motion.div 
          animate={{ y: [0, 50, 0], x: [0, -30, 0] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-[10%] w-48 h-48 bg-accent/30 rounded-full blur-2xl -z-10"
        ></motion.div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="badge mb-8 inline-flex"
            >
              Creative Problem Solver
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.05] text-foreground">
              Creative <br className="hidden md:block" />
              <span className="text-gradient inline-block min-h-[1.2rem]" suppressHydrationWarning>
                {displayText || "\u00A0"}
                <span className="animate-pulse border-r-4 border-primary ml-1"></span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-700 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-bold">
              I design and build powerful digital solutions that solve real problems. From sleek websites to automated business workflows, I blend full-stack expertise with cloud-ready architecture.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#projects" 
                className="btn-primary flex items-center gap-3 group px-10"
              >
                Explore My Portfolio
                <ChevronRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </motion.a>
              <div className="flex items-center gap-6 sm:ml-6">
                {[
                  { icon: <Github size={22} />, href: "https://github.com/DenzelGitonga007" },
                  { icon: <Linkedin size={22} />, href: "https://linkedin.com/in/denzel-gitonga-67622b208" },
                  { icon: <Mail size={22} />, href: "mailto:gitongadenzel@gmail.com" }
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    whileHover={{ scale: 1.1, color: "var(--primary)" }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href} 
                    target="_blank" 
                    className="p-4 rounded-2xl bg-secondary text-foreground/60 transition-all shadow-sm border border-transparent hover:border-primary/10 hover:shadow-xl hover:bg-white"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-20 flex flex-wrap items-center justify-center lg:justify-start gap-12 border-t border-border pt-10"
            >
              {[
                { val: "150+", label: "Success Stories" },
                { val: "5+", label: "Expertise Years" },
                { val: "98%", label: "Satisfaction Rate" }
              ].map((stat, i) => (
                <div key={i} className="group">
                  <div className="text-4xl font-black text-primary group-hover:scale-110 transition-transform cursor-default">{stat.val}</div>
                  <div className="text-[10px] text-muted font-black uppercase tracking-[0.2em] mt-2">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(6,92,194,0.15)] border-[16px] border-white group">
              <div className="absolute inset-0 bg-primary/2 opacity-10 group-hover:opacity-0 transition-opacity duration-700"></div>
              <Image
                src="/assets/img/profile/denzel_official.png"
                alt="Denzel Gitonga"
                width={800}
                height={800}
                className="w-full h-auto scale-105 group-hover:scale-100 transition-transform duration-1000"
                priority
              />
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-1/4 bg-white/95 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-border hidden xl:flex items-center gap-5 z-20"
            >
              <div className="p-4 bg-primary/5 rounded-2xl text-primary font-bold text-2xl">⚡</div>
              <div className="text-sm font-black leading-tight">Fast Execution<br/><span className="text-muted font-bold text-[10px] uppercase tracking-widest leading-none">High Performance</span></div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -left-8 bottom-1/4 bg-white/95 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-border hidden xl:flex items-center gap-5 z-20"
            >
              <div className="p-4 bg-primary/5 rounded-2xl text-primary font-bold text-2xl">🏗️</div>
              <div className="text-sm font-black leading-tight">Scalable Build<br/><span className="text-muted font-bold text-[10px] uppercase tracking-widest leading-none">Clean Architecture</span></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
