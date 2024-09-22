'use client';

import React, { useState } from 'react';
import Card from './Card';
import MailIcon from '@/assets/icons/mail-svgrepo-com.svg';
import PhoneIcon from '@/assets/icons/phone-svgrepo-com.svg';
import TechIcon from './TechIcon';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '', // Clear the error message for the current field
    });
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required.';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formData.message) {
      newErrors.message = 'Message is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus(''); // Reset status message
    setLoading(true); // Set loading state to true

    const form = e.currentTarget; // Get the form element
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus(
          'Thank you for reaching out! Your message has been received, and I will get back to you shortly.'
        );

        // Reset form state to empty values
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        const responseData = await response.json();
        if (responseData.errors) {
          setStatus(
            responseData.errors
              .map((error: { message: string }) => error.message)
              .join(', ')
          );
        } else {
          setStatus(
            'Oops! There was a problem submitting your form. Please try again later.'
          );
        }
      }
    } catch (error) {
      setStatus(
        'Oops! There was a problem submitting your form. Please try again later.'
      );
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <section className="lg:container text-white min-h-screen flex flex-col items-center py-12">
      <div className="max-w-4xl w-full p-8">
        <div className="border-b border-brand-secondary">
          <h2 className="text-4xl font-semibold mb-4">Contact</h2>
          <p className="text-lg mb-8 text-white/60">
            I'm always excited to collaborate on innovative and exciting
            projects!
          </p>
        </div>

        {/* Contact Info */}
        <div className="mb-20 mt-8 flex flex-col md:flex-row justify-between gap-5 max-w-[600px]">
          <div className="flex items-center gap-4">
            <Card className="p-2 rounded-full w-[45px] h-[45px] flex items-center justify-center">
              <TechIcon component={MailIcon} />
            </Card>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-white/50">Email</span>
              <span className="text-white/80">tanvirch7575@gmail.com</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Card className="p-2 rounded-full w-[45px] h-[45px] flex items-center justify-center">
              <TechIcon component={PhoneIcon} />
            </Card>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-white/50 pl-1">
                Phone & WhatsApp
              </span>
              <span className="text-white/80">+8801302047933</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
          Send a message
        </h3>

        <Card>
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/mqazvdpp"
            method="POST"
            className="space-y-4"
          >
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
                className={`w-full p-3 bg-brand text-white rounded-lg border ${
                  errors.name ? 'border-red-500' : 'border-brand-secondary'
                } focus:outline-none`}
                disabled={loading} // Disable input if loading
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
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
                className={`w-full p-3 bg-brand text-white rounded-lg border ${
                  errors.email ? 'border-red-500' : 'border-brand-secondary'
                } focus:outline-none`}
                disabled={loading} // Disable input if loading
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
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
                className={`w-full p-3 bg-brand text-white rounded-lg border ${
                  errors.message ? 'border-red-500' : 'border-brand-secondary'
                } focus:outline-none`}
                disabled={loading} // Disable input if loading
              />
              {errors.message && (
                <span className="text-red-500 text-sm">{errors.message}</span>
              )}
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-brand/90 hover:bg-brand/80 text-white rounded-lg"
              disabled={loading} // Disable button if loading
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
          {status && (
            <div id="my-form-status" className="mt-4 text-green-500">
              {status}
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
