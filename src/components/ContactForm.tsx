'use client';

import React, { useState } from 'react';
import Card from './Card';
import { MailIcon, Section } from 'lucide-react';
import SectionHeader from './SectionHeader';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center py-12">
      <div className="max-w-4xl w-full p-8">
        <div className=" border-b border-brand-secondary">
          <h2 className="text-4xl font-semibold mb-4">Contact</h2>
          <p className="text-lg mb-8">
            I'm always excited to collaborate on innovative and exciting
            projects!
          </p>
        </div>

        {/* Contact Info */}
        <div className=" mb-12 mt-8">
          <div className="flex items-center space-x-2">
            <Card className="p-2 rounded-full">
              <MailIcon />
            </Card>

            <span className="text-lg text-gray-400">hello@linicki.design</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 8a6 6 0 0111.34-2.75L14 6l1.17-1.17a2 2 0 012.83 0l1.83 1.83a2 2 0 010 2.83l-7 7a2 2 0 01-2.83 0L10 16l-1.75.66A6 6 0 112 8zm12-1a5 5 0 11-5-5 5 5 0 015 5z" />
              </svg>
            </span>
            <span className="text-lg text-gray-400">+48 442 232 141</span>
          </div>
        </div>

        {/* Form */}
        <h3 className="text-2xl font-semibold mb-4">Send a message</h3>

        <Card>
          <form onSubmit={handleSubmit} className=" space-y-4">
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Smith"
                className="w-full p-3 bg-brand text-white rounded-lg border border-gray-700 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@framer.com"
                className="w-full p-3 bg-brand text-white rounded-lg border border-gray-700 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                rows={4}
                className="w-full p-3 bg-brand text-white rounded-lg border border-gray-700 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-brand/90 hover:bg-brand/80 text-white rounded-lg"
            >
              Submit
            </button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
