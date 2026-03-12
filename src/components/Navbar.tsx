"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Code2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-700 h-24 flex items-center",
        scrolled 
          ? "bg-white/80 backdrop-blur-xl border-b border-primary/5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] h-20" 
          : "bg-transparent h-24"
      )}
    >
      <div className="container-custom flex justify-between items-center w-full">
        {/* Logo */}
        <motion.a 
          href="#home" 
          className="flex items-center gap-4 group"
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-lg group-hover:rotate-[5deg] transition-all duration-500 border-2 border-primary/10">
            <img 
              src="/logo.png" 
              alt="Tech With Denzel" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors leading-none">
              Tech With <span className="text-primary">Denzel</span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mt-1">
              Innovate • Automate
            </span>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ y: -2 }}
              className="text-sm font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-primary rounded-full transition-all duration-500 group-hover:w-full shadow-[0_0_10px_rgba(6,92,194,0.5)]"></span>
            </motion.a>
          ))}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="btn-primary py-3 px-8 text-sm"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-3 rounded-2xl bg-secondary text-foreground hover:bg-primary hover:text-white transition-all shadow-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col justify-center items-center gap-10 p-6"
          >
            {navLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                className="text-4xl font-black text-foreground hover:text-primary transition-all tracking-tighter"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="btn-primary w-full max-w-xs text-center py-6 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
