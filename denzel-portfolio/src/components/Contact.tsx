"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, MessageSquare, Copy, Check, ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("gitongadenzel@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/10 relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container-custom">
        <SectionHeader
          title="Direct Connect & Collaboration"
          subtitle="The contact form is briefly offline for maintenance. Reach out directly through these high-priority channels."
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
              <h3 className="text-3xl font-black mb-10 tracking-tight">Working Hours</h3>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 font-bold">
                I am typically available Mon-Fri (09:00 - 18:00 EAT) for consultations and coordination.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_15px_#10b981]"></div>
                <span className="text-sm font-black uppercase tracking-widest">Available for Hire</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-12 rounded-[4rem] border border-border shadow-[0_30px_70px_-20px_rgba(0,0,0,0.08)]"
          >
            <h3 className="text-3xl font-black mb-10 tracking-tight">Direct Connect Grid</h3>
            <p className="text-slate-600 font-bold mb-12 text-lg">
              Unlock immediate communication with Denzel. These links are tracked for high-priority response.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { label: "WhatsApp Chat", val: "+254 714 082 283", href: "https://wa.me/254714082283", icon: <MessageSquare className="text-emerald-500" />, color: "hover:border-emerald-500/30 hover:bg-emerald-50/50" },
                { label: "LinkedIn Profile", val: "Denzel Gitonga", href: "https://linkedin.com/in/denzel-gitonga-67622b208", icon: <Linkedin className="text-blue-600" />, color: "hover:border-blue-500/30 hover:bg-blue-50/50" },
                { label: "GitHub Repo", val: "DenzelGitonga007", href: "https://github.com/DenzelGitonga007", icon: <Github className="text-slate-900" />, color: "hover:border-slate-500/30 hover:bg-slate-50/50" },
                { label: "Official Email", val: "gitongadenzel", href: "mailto:gitongadenzel@gmail.com", icon: <Mail className="text-primary" />, color: "hover:border-primary/30 hover:bg-primary/5" }
              ].map((social) => (
                <motion.a 
                  key={social.label}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  href={social.href}
                  target="_blank"
                  className={`block p-8 rounded-3xl border border-border bg-secondary/20 transition-all duration-300 ${social.color}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white rounded-2xl shadow-sm">{social.icon}</div>
                    <ArrowUpRight size={18} className="text-muted-foreground" />
                  </div>
                  <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">{social.label}</div>
                  <div className="font-bold text-slate-900">{social.val}</div>
                </motion.a>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={copyToClipboard}
              className="w-full mt-10 py-6 bg-slate-900 text-white rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-4 hover:bg-primary transition-colors shadow-xl"
            >
              {copied ? <><Check size={18} /> Email Copied!</> : <><Copy size={18} /> Copy Official Email</>}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
