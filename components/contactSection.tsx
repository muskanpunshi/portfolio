
"use client";

import { motion } from "framer-motion";
import { useState, ChangeEvent, FormEvent } from "react";
import {
  Send,
  Mail,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Code,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ---------------- TYPES ---------------- */

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FocusField = keyof FormData | null;

type SocialLink = {
  name: string;
  icon: LucideIcon;
  url: string;
  color: string;
};



/* ---------------- COMPONENT ---------------- */

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [focused, setFocused] = useState<FocusField>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="relative bg-white py-32 px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.3]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
        
          <h2 className="text-[clamp(3rem,10vw,10rem)] font-black text-primary leading-none tracking-tight mb-6">
            Let&apos;s Talk
          </h2>
            <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-red-700 mb-8 mx-auto origin-center"
          />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT — FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* NAME */}
              <FloatingInput
                label="Your Name"
                name="name"
                value={formData.name}
                focused={focused}
                setFocused={setFocused}
                onChange={handleChange}
              />

              {/* EMAIL */}
              <FloatingInput
                label="Your Email"
                name="email"
                type="email"
                value={formData.email}
                focused={focused}
                setFocused={setFocused}
                onChange={handleChange}
              />

              {/* MESSAGE */}
              <FloatingTextarea
                label="Your Message"
                name="message"
                value={formData.message}
                focused={focused}
                setFocused={setFocused}
                onChange={handleChange}
              />

              {/* SUBMIT */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 px-8 py-4 bg-red-700 text-white rounded-full font-bold text-lg hover:bg-red-800 transition-colors"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>

          {/* RIGHT — INFO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-12"
          >
            {/* STATUS */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-3 h-3 bg-green-500 rounded-full"
                />
                <span className="font-bold text-green-900">Available for Work</span>
              </div>
              <p className="text-sm text-green-700">
                Currently accepting new projects and opportunities
              </p>
            </div>

            {/* CONTACT */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black mb-6">Get in Touch</h3>

              <ContactRow
                icon={Mail}
                label="Email"
                value="your.email@example.com"
                href="mailto:your.email@example.com"
              />

              <ContactRow icon={MapPin} label="Location" value="San Francisco, CA" />
            </div>

            {/* SOCIAL */}
            {/* <div>
              <h3 className="text-2xl font-black mb-6">Connect</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`flex items-center gap-3 p-4 bg-gray-100 rounded-xl hover:bg-gray-900 hover:text-white transition-all group ${social.color}`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-semibold">{social.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SMALL COMPONENTS ---------------- */

type InputProps = {
  label: string;
  name: keyof FormData;
  value: string;
  type?: string;
  focused: FocusField;
  setFocused: (f: FocusField) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function FloatingInput({
  label,
  name,
  value,
  type = "text",
  focused,
  setFocused,
  onChange,
}: InputProps) {
  const isActive = focused === name || value;

  return (
    <div className="relative">
      <motion.label
        animate={{ y: isActive ? -25 : 0, scale: isActive ? 0.85 : 1 }}
        className="absolute left-0 top-0 text-gray-600 pointer-events-none origin-left font-medium"
      >
        {label}
      </motion.label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(name)}
        onBlur={() => setFocused(null)}
        className="w-full border-b-2 border-gray-300 focus:border-red-700 outline-none py-3 text-lg bg-transparent"
        required
      />
    </div>
  );
}

type TextareaProps = {
  label: string;
  name: keyof FormData;
  value: string;
  focused: FocusField;
  setFocused: (f: FocusField) => void;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

function FloatingTextarea(props: TextareaProps) {
  const { label, name, value, focused, setFocused, onChange } = props;
  const isActive = focused === name || value;

  return (
    <div className="relative">
      <motion.label
        animate={{ y: isActive ? -25 : 0, scale: isActive ? 0.85 : 1 }}
        className="absolute left-0 top-0 text-gray-600 pointer-events-none origin-left font-medium"
      >
        {label}
      </motion.label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(name)}
        onBlur={() => setFocused(null)}
        rows={5}
        className="w-full border-b-2 border-gray-300 focus:border-red-700 outline-none py-3 text-lg bg-transparent resize-none"
        required
      />
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 group">
      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-red-700 transition-colors">
        <Icon className="w-6 h-6 text-gray-700 group-hover:text-white" />
      </div>
      <div>
        <p className="text-sm text-gray-500 uppercase tracking-wider">{label}</p>
        <p className="font-semibold text-lg">{value}</p>
      </div>
    </motion.div>
  );

  return href ? <a href={href}>{content}</a> : content;
}
