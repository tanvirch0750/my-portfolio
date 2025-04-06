'use client';

import {
  AlertCircle,
  ArrowRight,
  CheckCircle,
  Loader2,
  Mail,
  MessageSquare,
  Phone,
  Send,
  User,
} from 'lucide-react';
import Link from 'next/link';
import type React from 'react';
import { useState } from 'react';
import Card from './Card';

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
  const [submitted, setSubmitted] = useState<boolean>(false);

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
        setSubmitted(true);

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
    <section className="lg:container text-white min-h-screen flex flex-col items-center py-12 px-4 md:px-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Get in Touch
          </h2>
          <p className="text-lg mb-4 text-white/70 max-w-2xl mx-auto">
            I'm always excited to collaborate on innovative projects! Whether
            you have a question, proposal, or just want to say hello, I'd love
            to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Contact Info Cards */}
          <Card className="border-emerald-300/20 hover:border-emerald-300/40 transition-all duration-300 flex flex-col items-center p-6 text-center">
            <div className="bg-emerald-500/10 p-4 rounded-full mb-4">
              <Mail className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="font-medium mb-2">Email</h3>
            <p className="text-white/70 mb-4 break-all">
              tanvirch7575@gmail.com
            </p>
            <Link
              href="mailto:tanvirch7575@gmail.com"
              className="text-emerald-400 flex items-center gap-1 text-sm hover:text-emerald-300 transition-colors"
            >
              Send an email <ArrowRight className="w-3 h-3" />
            </Link>
          </Card>

          <Card className="border-emerald-300/20 hover:border-emerald-300/40 transition-all duration-300 flex flex-col items-center p-6 text-center">
            <div className="bg-emerald-500/10 p-4 rounded-full mb-4">
              <Phone className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="font-medium mb-2">Phone & WhatsApp</h3>
            <p className="text-white/70 mb-4">+8801302047933</p>
            <Link
              href="tel:+8801302047933"
              className="text-emerald-400 flex items-center gap-1 text-sm hover:text-emerald-300 transition-colors"
            >
              Call me <ArrowRight className="w-3 h-3" />
            </Link>
          </Card>

          <Card className="border-emerald-300/20 hover:border-emerald-300/40 transition-all duration-300 flex flex-col items-center p-6 text-center">
            <div className="bg-emerald-500/10 p-4 rounded-full mb-4">
              <MessageSquare className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="font-medium mb-2">Response Time</h3>
            <p className="text-white/70 mb-4">Within 24 hours</p>
            <span className="text-emerald-400 flex items-center gap-1 text-sm">
              Fast replies guaranteed
            </span>
          </Card>
        </div>

        {/* Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-4">
              Let's Discuss Your Project
            </h3>
            <p className="text-white/70 mb-6">
              Fill out the form with your details and project requirements. I'll
              analyze your needs and get back to you with insights on how we can
              work together.
            </p>

            <div className="space-y-4 text-white/70">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p>Detailed project analysis and consultation</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p>Custom solutions tailored to your specific needs</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p>Transparent communication throughout the process</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <Card className="border-emerald-300/20 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

              {submitted ? (
                <div className="relative z-10 py-8 flex flex-col items-center text-center">
                  <div className="bg-emerald-500/10 p-4 rounded-full mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-white/70 mb-6 max-w-md">
                    Thank you for reaching out! Your message has been received,
                    and I will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-black font-medium rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  action="https://formspree.io/f/mqazvdpp"
                  method="POST"
                  className="relative z-10 space-y-5"
                >
                  <div>
                    <label
                      className="block text-white/80 mb-2 font-medium"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <User className="w-5 h-5 text-white/40" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className={`w-full p-3 pl-10 bg-white/5 text-white rounded-lg border ${
                          errors.name ? 'border-red-500' : 'border-white/10'
                        } focus:outline-none focus:border-emerald-500 transition-colors`}
                        disabled={loading}
                      />
                    </div>
                    {errors.name && (
                      <div className="flex items-center gap-1 mt-1 text-red-400 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-white/80 mb-2 font-medium"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Mail className="w-5 h-5 text-white/40" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className={`w-full p-3 pl-10 bg-white/5 text-white rounded-lg border ${
                          errors.email ? 'border-red-500' : 'border-white/10'
                        } focus:outline-none focus:border-emerald-500 transition-colors`}
                        disabled={loading}
                      />
                    </div>
                    {errors.email && (
                      <div className="flex items-center gap-1 mt-1 text-red-400 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-white/80 mb-2 font-medium"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none">
                        <MessageSquare className="w-5 h-5 text-white/40" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or inquiry..."
                        rows={5}
                        className={`w-full p-3 pl-10 bg-white/5 text-white rounded-lg border ${
                          errors.message ? 'border-red-500' : 'border-white/10'
                        } focus:outline-none focus:border-emerald-500 transition-colors`}
                        disabled={loading}
                      />
                    </div>
                    {errors.message && (
                      <div className="flex items-center gap-1 mt-1 text-red-400 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full p-3 bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-black font-medium rounded-lg flex items-center justify-center gap-2 transition-all"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  {status && !submitted && (
                    <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{status}</span>
                    </div>
                  )}
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
