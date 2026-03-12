"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, Copy, Check, ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  const [copied, setCopied] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSent, setIsSent] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("gitongadenzel@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 5000);
    }, 2000);
  };
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
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-3xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div className="flex-grow">
                    <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Email Me</div>
                    <div className="flex items-center gap-3">
                      <a href="mailto:gitongadenzel@gmail.com" className="font-bold hover:text-primary transition-colors">gitongadenzel@gmail.com</a>
                      <button 
                        onClick={copyToClipboard}
                        className="p-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-primary"
                        title="Copy to clipboard"
                      >
                        {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                </div>
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
              <h3 className="text-3xl font-black mb-10 tracking-tight">Quick Connect</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "LinkedIn", href: "https://linkedin.com/in/denzel-gitonga-67622b208", icon: <Linkedin size={20} /> },
                  { label: "GitHub", href: "https://github.com/DenzelGitonga007", icon: <Github size={20} /> },
                  { label: "WhatsApp", href: "https://wa.me/254714082283", icon: <MessageSquare size={20} /> },
                  { label: "Phone", href: "tel:+254714082283", icon: <Phone size={20} /> }
                ].map((social) => (
                  <a 
                    key={social.label}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-5 bg-white/10 hover:bg-white/20 rounded-2xl border border-white/10 transition-all group/link"
                  >
                    <div className="flex items-center gap-3">
                      {social.icon}
                      <span className="text-sm font-bold">{social.label}</span>
                    </div>
                    <ArrowUpRight size={16} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                ))}
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
            <div className="flex-grow flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!isSent ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-8 flex-grow flex flex-col" 
                    onSubmit={handleSubmit}
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-800 ml-2">Full Name</label>
                        <input
                          required
                          type="text"
                          placeholder="John Doe"
                          className="w-full bg-secondary/30 border-2 border-transparent px-8 py-5 rounded-[1.5rem] focus:bg-white focus:border-primary/20 focus:shadow-xl transition-all outline-none font-bold placeholder:opacity-40"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-800 ml-2">Email Address</label>
                        <input
                          required
                          type="email"
                          placeholder="john@example.com"
                          className="w-full bg-secondary/30 border-2 border-transparent px-8 py-5 rounded-[1.5rem] focus:bg-white focus:border-primary/20 focus:shadow-xl transition-all outline-none font-bold placeholder:opacity-40"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-800 ml-2">Subject</label>
                      <input
                        required
                        type="text"
                        placeholder="Project Inquiry"
                        className="w-full bg-secondary/30 border-2 border-transparent px-8 py-5 rounded-[1.5rem] focus:bg-white focus:border-primary/20 focus:shadow-xl transition-all outline-none font-bold placeholder:opacity-40"
                      />
                    </div>

                    <div className="space-y-3 flex-grow">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-800 ml-2">Message</label>
                      <textarea
                        required
                        placeholder="Tell me about your project..."
                        rows={6}
                        className="w-full bg-secondary/30 border-2 border-transparent px-8 py-5 rounded-[1.5rem] focus:bg-white focus:border-primary/20 focus:shadow-xl transition-all outline-none font-bold resize-none placeholder:opacity-40"
                      ></textarea>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                      className="w-full btn-primary flex items-center justify-center gap-4 py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Launch Message"}
                      <Send size={20} className={isSubmitting ? "animate-ping" : ""} />
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center text-center space-y-8 py-20"
                  >
                    <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/10">
                      <Check size={48} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black mb-4">Message Launched!</h3>
                      <p className="text-slate-600 font-bold">Thank you for reaching out. I'll get back to you shortly.</p>
                    </div>
                    <button 
                      onClick={() => setIsSent(false)}
                      className="text-primary font-black uppercase tracking-widest text-sm hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
