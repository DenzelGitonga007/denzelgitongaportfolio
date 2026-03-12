"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionHeader
              title="A Deep Dive Into My Expertise"
              subtitle="Full-Stack Engineer, Automation Specialist & AWS Certified Practitioner."
              align="left"
            />
            
            <div className="space-y-8 text-xl text-muted-foreground leading-relaxed font-medium">
              <p>
                I am a results-driven <span className="text-foreground font-black">Full-Stack Web Developer</span>, AWS Cloud Practitioner, and Automation Specialist with a passion for creating impactful digital solutions. 
              </p>
              <p>
                With hands-on experience in <strong className="text-primary font-black">Python, Django, JavaScript, React, Node.js, Next.js, and cloud deployment on AWS</strong>, 
                I transform complex ideas into clean, functional, and high-performing realities.
              </p>
              <p>
                Recognized for bridging software engineering, cloud architecture, and business process automation to deliver practical solutions that improve operational efficiency. 
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-16">
              {[
                { val: "CTO", label: "KAFU IIHub Lead", icon: "💎" },
                { val: "AWS", label: "CP Certified", icon: "☁️" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(6,92,194,0.15)" }}
                  className="bg-secondary/40 p-10 rounded-[2.5rem] border border-border group hover:bg-white transition-all duration-500"
                >
                  <div className="text-2xl mb-4">{item.icon}</div>
                  <div className="text-4xl font-black text-primary mb-2 tracking-tighter">{item.val}</div>
                  <div className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="rounded-[4rem] overflow-hidden shadow-2xl border-[20px] border-secondary/30 group">
              <Image
                src="/denzelgitongaportfolio/assets/img/profile/Denzel_Coding_New.png"
                alt="Denzel Coding"
                width={700}
                height={700}
                className="w-full h-auto scale-110 group-hover:scale-100 transition-transform duration-1000"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-10 -right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
