"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from "lucide-react";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/10 relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container-custom">
        <SectionHeader
          title="Let's Start a Conversation"
          subtitle="Whether it's a new project, a technical challenge, or just to say hello, my inbox is always open."
        />

        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="bg-white p-12 rounded-[3.5rem] border border-border shadow-xl shadow-primary/5">
              <h3 className="text-3xl font-black mb-10 tracking-tight">Contact Information</h3>
              <div className="space-y-10 text-lg">
                <a href="mailto:gitongadenzel@gmail.com" className="flex items-center gap-6 group hover:text-primary transition-all duration-300">
                  <div className="w-16 h-16 rounded-3xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Email Me</div>
                    <div className="font-bold">gitongadenzel@gmail.com</div>
                  </div>
                </a>
                <a href="tel:+254714082283" className="flex items-center gap-6 group hover:text-primary transition-all duration-300">
                  <div className="w-16 h-16 rounded-3xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Call Me</div>
                    <div className="font-bold">+254 714 082 283</div>
                  </div>
                </a>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-3xl bg-secondary flex items-center justify-center shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Work Location</div>
                    <div className="font-bold">Nairobi, Kenya</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary p-12 rounded-[3.5rem] text-white shadow-2xl shadow-primary/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-125 transition-transform duration-1000">
                <MessageSquare size={120} />
              </div>
              <h3 className="text-3xl font-black mb-6 tracking-tight">Professional Availability</h3>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 font-bold">
                I am currently open to high-impact projects, CTO consulting, and automation engineering opportunities.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_15px_#10b981]"></div>
                <span className="text-sm font-black uppercase tracking-widest">Available for New Projects</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-12 md:p-16 rounded-[4rem] border border-border shadow-[0_30px_70px_-20px_rgba(0,0,0,0.08)] flex flex-col"
          >
            <form className="space-y-8 flex-grow flex flex-col" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-secondary/30 border-2 border-transparent px-8 py-5 rounded-[1.5rem] focus:bg-white focus:border-primary/20 focus:shadow-xl transition-all outline-none font-bold placeholder:opacity-40"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-secondary/30 border-2 border-transparent px-8 py-5 rounded-[1.5rem] focus:bg-white focus:border-primary/20 focus:shadow-xl transition-all outline-none font-bold placeholder:opacity-40"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Subject</label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full bg-secondary/30 border-2 border-transparent px-8 py-5 rounded-[1.5rem] focus:bg-white focus:border-primary/20 focus:shadow-xl transition-all outline-none font-bold placeholder:opacity-40"
                />
              </div>

              <div className="space-y-3 flex-grow">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Message</label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="w-full bg-secondary/30 border-2 border-transparent px-8 py-5 rounded-[1.5rem] focus:bg-white focus:border-primary/20 focus:shadow-xl transition-all outline-none font-bold resize-none placeholder:opacity-40"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center gap-4 py-6"
              >
                Launch Message
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
