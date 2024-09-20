'use client';

import React, { useState } from 'react';
import Card from './Card';

import MailIcon from '@/assets/icons/mail-svgrepo-com.svg';
import PhoneIcon from '@/assets/icons/phone-svgrepo-com.svg';
import TechIcon from './TechIcon';

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
    <section className="lg:container text-white min-h-screen flex flex-col items-center py-12">
      <div className="max-w-4xl w-full p-8">
        <div className=" border-b border-brand-secondary">
          <h2 className="text-4xl font-semibold mb-4 ">Contact</h2>
          <p className="text-lg mb-8 text-white/60">
            I'm always excited to collaborate on innovative and exciting
            projects!
          </p>
        </div>

        {/* Contact Info */}
        <div className=" mb-20 mt-8 flex flex-col md:flex-row justify-between gap-5 max-w-[600px]">
          <div className="flex items-center gap-4">
            <Card className="p-2 rounded-full w-[45px] h-[45px] flex items-center justify-center">
              <TechIcon component={MailIcon} />
            </Card>
            <div className=" flex flex-col gap-1">
              <span className="text-sm text-white/50">Email</span>
              <span className="text-white/80">tanvirch7575@gmail.com</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Card className="p-2 rounded-full w-[45px] h-[45px] flex items-center justify-center">
              <TechIcon component={PhoneIcon} />
            </Card>
            <div className=" flex flex-col gap-1">
              <span className="text-sm text-white/50 pl-1">
                Phone & WhatsApp
              </span>
              <span className="text-white/80">+8801302047933</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-emerald-300 to-sky-400  text-transparent bg-clip-text">
          Send a message
        </h3>

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
                className="w-full p-3 bg-brand text-white rounded-lg border border-brand-secondary focus:outline-none"
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
                placeholder="jane@company.com"
                className="w-full p-3 bg-brand text-white rounded-lg border border-brand-secondary focus:outline-none"
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
                className="w-full p-3 bg-brand text-white rounded-lg border border-brand-secondary focus:outline-none"
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
