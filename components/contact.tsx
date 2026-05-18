"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Mail, MessageSquare, Copy, Check, Send } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { SectionHeading } from "./ui/section-heading";
import { Button } from "./ui/button";
import { portfolio } from "@/data/portfolio";
import { fadeLeft, fadeRight, stagger, scaleIn } from "@/lib/animations";

const inputVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      onClick={handleCopy}
      whileTap={{ scale: 0.9 }}
      className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
      aria-label="Copy to clipboard"
    >
      <AnimatePresenceCopy copied={copied} />
    </motion.button>
  );
}

function AnimatePresenceCopy({ copied }: { copied: boolean }) {
  return copied ? (
    <motion.span
      key="check"
      initial={{ scale: 0, rotate: -90 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 20 }}
    >
      <Check size={14} className="text-emerald-400" />
    </motion.span>
  ) : (
    <Copy size={14} />
  );
}

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  copyValue: string;
}

const contactItems: ContactInfo[] = [
  { icon: <Mail size={18} />, label: "Email", value: portfolio.email, href: `mailto:${portfolio.email}`, copyValue: portfolio.email },
  { icon: <MessageSquare size={18} />, label: "WhatsApp", value: portfolio.whatsapp, href: portfolio.whatsappLink, copyValue: portfolio.whatsapp },
  { icon: <SiGithub size={18} />, label: "GitHub", value: "github.com/marinaakter", href: portfolio.github, copyValue: portfolio.github },
];

export function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formState.name.trim()) e.name = "Name is required";
    if (!formState.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formState.email)) e.email = "Invalid email";
    if (!formState.subject.trim()) e.subject = "Subject is required";
    if (!formState.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      const data = await res.json();

      if (!res.ok) {
        setServerError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 md:py-28 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left — slides from left */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
          >
            <SectionHeading
              eyebrow="Get In Touch"
              title="Let's Build Something Together"
              description="Have a project in mind or want to discuss an opportunity? I'd love to hear from you."
              id="contact-heading"
            />

            <motion.div
              className="space-y-4"
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              {contactItems.map((item) => (
                <motion.div
                  key={item.label}
                  variants={scaleIn}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                    <a href={item.href} target="_blank" rel="noopener noreferrer"
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors truncate block">
                      {item.value}
                    </a>
                  </div>
                  <CopyButton value={item.copyValue} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — slides from right */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full flex items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-10 text-center"
              >
                <div>
                  <motion.div
                    className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.1 }}
                  >
                    <Check size={28} className="text-emerald-400" />
                  </motion.div>
                  <h3 className="font-semibold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-sm text-muted-foreground">Thanks for reaching out. I&apos;ll get back to you shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-4 text-sm text-primary hover:underline">
                    Send another message
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl border border-border bg-card p-6 space-y-5"
                variants={stagger(0.07)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { key: "name", label: "Name", type: "text", placeholder: "Your name" },
                    { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                  ].map((field) => (
                    <motion.div key={field.key} variants={inputVariants}>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{field.label}</label>
                      <input
                        type={field.type}
                        value={formState[field.key as keyof typeof formState]}
                        onChange={(e) => setFormState((s) => ({ ...s, [field.key]: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-muted text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary/40 transition-all"
                        placeholder={field.placeholder}
                      />
                      {errors[field.key] && <p className="mt-1 text-xs text-red-400">{errors[field.key]}</p>}
                    </motion.div>
                  ))}
                </div>
                <motion.div variants={inputVariants}>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState((s) => ({ ...s, subject: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-muted text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary/40 transition-all"
                    placeholder="Project inquiry, collaboration..."
                  />
                  {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject}</p>}
                </motion.div>
                <motion.div variants={inputVariants}>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-muted text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary/40 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </motion.div>
                {serverError && (
                  <motion.p
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
                  >
                    {serverError}
                  </motion.p>
                )}
                <motion.div variants={inputVariants}>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </motion.form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
