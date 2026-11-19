"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/config/site";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Coaching individuel");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const text = [
      `Bonjour Firas, je m'appelle ${name || "___"}.`,
      `Sujet : ${subject}.`,
      message ? `Message : ${message}` : null,
      phone ? `Mon numéro : ${phone}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const inputClasses =
    "w-full rounded-lg border border-border-subtle bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground/80">
            Nom
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Votre nom"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground/80">
            Téléphone
          </label>
          <input
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+216 ..."
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-foreground/80">
          Je suis intéressé(e) par
        </label>
        <select
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={inputClasses}
        >
          <option>Coaching individuel</option>
          <option>Préparation physique</option>
          <option>Suivi à distance</option>
          <option>Abonnement salle</option>
          <option>Cours collectifs</option>
          <option>Autre demande</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground/80">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="Décris ton objectif ou ta demande..."
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 sm:w-auto"
      >
        Envoyer sur WhatsApp
      </button>
      <p className="text-xs text-muted">
        Ce formulaire ouvre WhatsApp avec ta demande pré-remplie — Firas te répond directement là-bas.
      </p>
    </form>
  );
}
