"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, Paperclip, X, MessageCircle, Mail, Phone } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { fadeUpVariants, staggerContainerVariants, getInitial, cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_TYPES = [
  "application/pdf","image/jpeg","image/png","image/webp",
  "application/zip","text/plain",
];

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(20, "Please describe your project in at least 20 characters"),
});

type FormValues = z.infer<typeof schema>;

export function ContactSection() {
  const { ref, inView, mounted } = useInView<HTMLElement>();
  const initial = getInitial(mounted);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [attachment, setAttachment] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (!file) return;
    if (file.size > MAX_FILE_SIZE) { toast.error("File must be smaller than 5 MB"); return; }
    if (!ACCEPTED_TYPES.includes(file.type)) { toast.error("Unsupported file type"); return; }
    setAttachment(file);
  };

  const removeAttachment = () => {
    setAttachment(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    const formData = new FormData();
    Object.entries(data).forEach(([k, v]) => { if (v) formData.append(k, v); });
    if (attachment) formData.append("attachment", attachment);
    try {
      const res = await fetch("/api/contact", { method: "POST", body: formData });
      if (!res.ok) throw new Error("Network error");
      toast.success("Message sent! We'll respond within 24 hours.");
      reset();
      setAttachment(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch {
      toast.error("Something went wrong. Please email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 sm:py-32 bg-base-100">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div variants={staggerContainerVariants} initial={initial} animate={inView ? "visible" : "hidden"} className="lg:col-span-2 flex flex-col justify-center">
            <motion.p variants={fadeUpVariants} custom={0} className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">Contact</motion.p>
            <motion.h2 variants={fadeUpVariants} custom={0.05} className="text-3xl sm:text-4xl font-bold text-base-content mb-4 leading-tight">
              Let&apos;s Build Something Together
            </motion.h2>
            <motion.p variants={fadeUpVariants} custom={0.1} className="text-base-content/60 leading-relaxed mb-8">
              Tell us about your project — budget, timeline, and goals. We&apos;ll respond within one business day.
            </motion.p>
            <motion.div variants={fadeUpVariants} custom={0.15} className="flex flex-col gap-4">
              <a href="https://wa.me/917588945789" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-base-content/70 hover:text-primary transition-colors duration-150">
                <MessageCircle size={18} className="text-[#25D366]" />Chat on WhatsApp
              </a>
              <a href="mailto:rushikesh@mobilixir.in"
                className="flex items-center gap-3 text-sm text-base-content/70 hover:text-primary transition-colors duration-150">
                <Mail size={18} className="text-primary" />rushikesh@mobilixir.in
              </a>
              <a href="tel:+917588945789"
                className="flex items-center gap-3 text-sm text-base-content/70 hover:text-primary transition-colors duration-150">
                <Phone size={18} className="text-primary" />+91 75889 45789
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUpVariants} initial={initial} animate={inView ? "visible" : "hidden"} custom={0.1}
            className="lg:col-span-3 bg-base-200 rounded-2xl border border-base-300 p-6 sm:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-base-content/70">Name <span className="text-error">*</span></label>
                  <input id="name" type="text" autoComplete="name" placeholder="Jane Smith"
                    className={cn("input input-bordered w-full rounded-xl bg-base-100 focus:outline-none focus:border-primary transition-colors duration-150", errors.name && "border-error")}
                    {...register("name")} />
                  {errors.name && <span className="text-xs text-error">{errors.name.message}</span>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-base-content/70">Email <span className="text-error">*</span></label>
                  <input id="email" type="email" autoComplete="email" placeholder="jane@company.com"
                    className={cn("input input-bordered w-full rounded-xl bg-base-100 focus:outline-none focus:border-primary transition-colors duration-150", errors.email && "border-error")}
                    {...register("email")} />
                  {errors.email && <span className="text-xs text-error">{errors.email.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="text-sm font-medium text-base-content/70">Company</label>
                  <input id="company" type="text" autoComplete="organization" placeholder="Acme Inc. (optional)"
                    className="input input-bordered w-full rounded-xl bg-base-100 focus:outline-none focus:border-primary transition-colors duration-150"
                    {...register("company")} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="budget" className="text-sm font-medium text-base-content/70">Estimated Budget</label>
                  <select id="budget" className="select select-bordered w-full rounded-xl bg-base-100 focus:outline-none focus:border-primary transition-colors duration-150" {...register("budget")}>
                    <option value="">Select range</option>
                    <option value="< $5k">&lt; $5,000</option>
                    <option value="$5k-$15k">$5,000 – $15,000</option>
                    <option value="$15k-$50k">$15,000 – $50,000</option>
                    <option value="$50k+">$50,000+</option>
                    <option value="not sure">Not sure yet</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-base-content/70">Project Description <span className="text-error">*</span></label>
                <textarea id="message" rows={5} placeholder="Tell us about your project..."
                  className={cn("textarea textarea-bordered w-full rounded-xl bg-base-100 focus:outline-none focus:border-primary resize-none transition-colors duration-150", errors.message && "border-error")}
                  {...register("message")} />
                {errors.message && <span className="text-xs text-error">{errors.message.message}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-base-content/70">
                  Attachment <span className="text-base-content/40 font-normal">(optional — up to 5 MB)</span>
                </span>
                {attachment ? (
                  <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-base-100 border border-base-300">
                    <Paperclip size={15} className="text-primary shrink-0" />
                    <span className="text-sm text-base-content/70 truncate flex-1">{attachment.name}</span>
                    <button type="button" onClick={removeAttachment}
                      className="touch-hitbox text-base-content/40 hover:text-error transition-colors duration-150" aria-label="Remove attachment">
                      <X size={15} />
                    </button>
                  </div>
                ) : (
                  <button type="button" onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-dashed border-base-300 hover:border-primary/40 text-sm text-base-content/50 hover:text-primary transition-all duration-150">
                    <Paperclip size={15} />Attach a file (PDF, image, ZIP)
                  </button>
                )}
                <input ref={fileInputRef} type="file" className="hidden" accept={ACCEPTED_TYPES.join(",")}
                  onChange={handleFileChange} tabIndex={-1} />
              </div>

              <button type="submit" disabled={submitting}
                className="btn btn-primary rounded-full gap-2 mt-2 will-change-transform active:scale-[0.97] transition-transform duration-150">
                {submitting ? <span className="loading loading-spinner loading-sm" /> : <Send size={16} />}
                {submitting ? "Sending…" : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
