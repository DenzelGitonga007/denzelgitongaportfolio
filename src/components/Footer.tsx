"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border pt-24 pb-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="flex flex-col items-center md:items-start gap-6">
            <a href="#home" className="flex items-center gap-4 group">
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-md group-hover:rotate-[5deg] transition-all duration-500 border border-primary/10">
                <img 
                  src="assets/img/logo.png" 
                  alt="Tech With Denzel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-foreground leading-none">
                  Tech With <span className="text-primary">Denzel</span>
                </span>
                <span className="text-[8px] font-black uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  Innovate • Automate
                </span>
              </div>
            </a>
            <p className="text-muted-foreground font-bold max-w-sm text-center md:text-left leading-relaxed">
              Architecting scalable digital ecosystems and automation solutions with a focus on institutional excellence.
            </p>
          </div>

          <div className="flex gap-4">
            {[
              { icon: <Github size={22} />, href: "https://github.com/DenzelGitonga007" },
              { icon: <Linkedin size={22} />, href: "https://linkedin.com/in/denzel-gitonga-67622b208" },
              { icon: <Mail size={22} />, href: "mailto:gitongadenzel@gmail.com" }
            ].map((social, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target="_blank"
                className="p-5 rounded-[1.5rem] bg-secondary text-foreground/40 hover:text-primary hover:bg-white hover:shadow-xl hover:shadow-primary/10 transition-all border border-transparent hover:border-primary/10"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-black text-muted-foreground uppercase tracking-widest">
            © {currentYear} Denzel Gitonga. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3 text-sm font-black text-muted-foreground uppercase tracking-widest bg-secondary/30 px-6 py-2 rounded-full border border-border">
            Built with <Heart size={14} className="text-primary fill-primary animate-pulse" /> by Denzel Gitonga
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
