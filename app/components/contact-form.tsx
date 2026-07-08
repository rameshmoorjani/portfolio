"use client";

import { FormEvent } from "react";

export function ContactForm() {
  const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        alert("Message sent successfully! I'll get back to you soon.");
        (e.target as HTMLFormElement).reset();
      } else {
        alert("Failed to send message. Please try emailing me directly.");
      }
    } catch (error) {
      // Fallback to mailto link
      const mailtoLink = `mailto:rameshmoorjani@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      window.location.href = mailtoLink;
    }
  };

  return (
    <form className="contact-form" onSubmit={handleContactSubmit}>
      <label htmlFor="name">Your Name:</label>
      <input id="name" name="name" type="text" required />

      <label htmlFor="email">Your Email:</label>
      <input id="email" name="email" type="email" required />

      <label htmlFor="message">Your Message:</label>
      <textarea id="message" name="message" rows={5} required />

      <button type="submit" className="btn-solid contact-submit">
        Send Message
      </button>
    </form>
  );
}
