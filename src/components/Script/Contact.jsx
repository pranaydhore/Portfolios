import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../Style/Contact.css";
import {Mail } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_prfb9j9",   // Replace with EmailJS Service ID
        "template_g6afilq",  // Replace with EmailJS Template ID
        form.current,
        "Fac5gGWn53vFW2U35"    // Replace with EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setError(false);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setError(true);
        }
      );
  };

  return (
    <section className="contact">
      <Mail className="section-icon" />
      <h2 className="contact-title">Get in Touch</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit" className="btn-submit">Send Message</button>

        {success && <p className="success-msg">✅ Message Sent Successfully!</p>}
        {error && <p className="error-msg">❌ Failed to send. Try again.</p>}
      </form>
    </section>
  );
};

export default Contact;
