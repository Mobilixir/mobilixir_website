"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { BUDGETS, contactSchema, type ContactInput } from "@/lib/contact-schema";
import { SERVICES } from "@/data/site";
import { cn } from "@/lib/utils";

const field = "w-full rounded-xl bg-base-100 focus:outline-none focus:border-primary";

export function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  // Captured once on mount; the server rejects submissions faster than a human could type.
  const [startedAt] = useState(() => Date.now());
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { service: defaultService },
  });

  const onSubmit = async (values: ContactInput) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, startedAt }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong.");
      }
      reset();
      setStatus("sent");
    } catch (e) {
      setErrorMessage(e instanceof Error ? e.message : "Something went wrong.");
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-primary/30 bg-primary/10 p-8 text-center">
        <h2 className="text-xl font-semibold mb-2">Message sent</h2>
        <p className="text-base-content/70">Thanks for reaching out. You will get a reply within two business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-base-content/70">Name <span aria-hidden="true" className="text-error">*</span></label>
          <input id="name" type="text" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined}
            className={cn("input input-bordered", field, errors.name && "border-error")} {...register("name")} />
          {errors.name && <span id="name-error" className="text-xs text-error">{errors.name.message}</span>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-base-content/70">Email <span aria-hidden="true" className="text-error">*</span></label>
          <input id="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined}
            className={cn("input input-bordered", field, errors.email && "border-error")} {...register("email")} />
          {errors.email && <span id="email-error" className="text-xs text-error">{errors.email.message}</span>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="service" className="text-sm font-medium text-base-content/70">Service</label>
          <select id="service" className={cn("select select-bordered", field)} {...register("service")}>
            <option value="">Not sure yet</option>
            {SERVICES.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="budget" className="text-sm font-medium text-base-content/70">Estimated budget</label>
          <select id="budget" className={cn("select select-bordered", field)} {...register("budget")}>
            <option value="">Select a range</option>
            {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-base-content/70">Project description <span aria-hidden="true" className="text-error">*</span></label>
        <textarea id="message" rows={6} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined}
          className={cn("textarea textarea-bordered resize-none", field, errors.message && "border-error")} {...register("message")} />
        {errors.message && <span id="message-error" className="text-xs text-error">{errors.message.message}</span>}
      </div>

      {/* Honeypot: hidden from people and assistive tech, bots tend to fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      {status === "error" && <p role="alert" className="text-sm text-error">{errorMessage} You can also email us directly.</p>}

      <button type="submit" disabled={status === "sending"} className="btn btn-primary rounded-full gap-2 mt-2 active:scale-[0.97] transition-transform">
        {status === "sending" ? <span className="loading loading-spinner loading-sm" /> : <Send size={16} />}
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
