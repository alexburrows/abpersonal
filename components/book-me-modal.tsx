"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCalendar,
  faEnvelope,
  faUser,
  faBuilding,
  faPaperPlane,
  faTimes,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";

export default function BookMeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = encodeURIComponent(`Consultation Request from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:hello@digidrop.io?subject=${subject}&body=${body}`;
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Floating Book Me Button */}
      <button
        onClick={() => setIsOpen(true)}
        data-book-me-modal
        className="fixed bottom-8 left-8 z-50 px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300 font-bold flex items-center gap-2 border-2 border-white/30"
      >
        <FontAwesomeIcon icon={faCalendar} className="w-5 h-5" />
        <span className="hidden sm:inline">Book Me</span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 p-8 rounded-t-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                  <FontAwesomeIcon icon={faCalendar} className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-extrabold text-white">Book a Consultation</h2>
                  <p className="text-white/80 font-medium">Let&apos;s discuss your project</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {!isSubmitted ? (
                <>
                  <p className="text-slate-700 mb-6 leading-relaxed font-medium">
                    Interested in enterprise solutions, technical leadership, or AI integration? 
                    Fill out the form below and I&apos;ll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">
                        <FontAwesomeIcon icon={faUser} className="w-4 h-4 text-blue-600 mr-2" />
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all font-medium"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                        <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-cyan-600 mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 outline-none transition-all font-medium"
                        placeholder="john@company.com"
                      />
                    </div>

                    {/* Company Field */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-bold text-slate-700 mb-2">
                        <FontAwesomeIcon icon={faBuilding} className="w-4 h-4 text-teal-600 mr-2" />
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-500/20 outline-none transition-all font-medium"
                        placeholder="Your Company"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">
                        <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4 text-emerald-600 mr-2" />
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all resize-none font-medium"
                        placeholder="Tell me about your project, timeline, and what you're looking for..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold flex items-center justify-center gap-2"
                    >
                      <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" />
                      Send Inquiry
                    </button>
                  </form>

                  <p className="text-sm text-slate-500 mt-4 text-center">
                    Or email directly at{" "}
                    <a href="mailto:hello@digidrop.io" className="text-blue-600 font-bold hover:text-cyan-600">
                      hello@digidrop.io
                    </a>
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="inline-flex p-4 bg-emerald-100 rounded-full mb-4">
                    <FontAwesomeIcon icon={faCheckCircle} className="w-12 h-12 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-600 font-medium">
                    Opening your email client. I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

