"use client";

import { FormEvent, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID as string;

export default function ContactForm() {
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          user_name: formData.get("name"),
          user_email: formData.get("email"),
          message: formData.get("message"),
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Email send failed:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto px-5">
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block font-crimson font-bold text-xl mb-2"
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-3 border border-border rounded-lg font-crimson text-lg focus:outline-none focus:border-primary"
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="email"
          className="block font-crimson font-bold text-xl mb-2"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-3 border border-border rounded-lg font-crimson text-lg focus:outline-none focus:border-primary"
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="message"
          className="block font-crimson font-bold text-xl mb-2"
        >
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="w-full p-3 border border-border rounded-lg font-crimson text-lg resize-vertical focus:outline-none focus:border-primary"
          required
          disabled={isSubmitting}
        />
      </div>

      {status === "success" && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg font-crimson">
          Message sent successfully! Thank you for contacting me.
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg font-crimson">
          Failed to send message. Please try again or contact me directly via
          email.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-white py-3 px-6 rounded-lg font-crimson text-xl 
                 hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
