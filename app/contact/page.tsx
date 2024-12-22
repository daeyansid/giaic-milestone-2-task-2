// pages/contact.tsx
"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import type { NextPage } from 'next';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styles from './/Contact.module.css';

const Contact: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to an API
    console.log(formData);
    setSubmitted(true);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.main}>
        <h1>Contact Us</h1>
        {submitted ? (
          <p className={styles.thankYou}>Thank you for reaching out! We&apos;ll get back to you soon.</p>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
