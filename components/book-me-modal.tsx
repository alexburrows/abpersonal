"use client";

import { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCalendar,
  faEnvelope,
  faUser,
  faBuilding,
  faPaperPlane,
  faTimes,
  faCheckCircle,
  faTriangleExclamation,
  faClock
} from "@fortawesome/free-solid-svg-icons";

const FORM_NAME = "consultation";
const initialFormState = {
  name: "",
  email: "",
  company: "",
  preferredDate: "",
  preferredTime: "",
  message: ""
};

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");

export default function BookMeModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");
  const [formData, setFormData] = useState(initialFormState);
  const today = new Date().toISOString().split("T")[0];

  const showDrawer = useCallback(() => {
    setIsVisible(true);
    requestAnimationFrame(() => setIsOpen(true));
  }, []);

  const hideDrawer = () => {
    setIsOpen(false);
    window.setTimeout(() => {
      setIsVisible(false);
      setIsSubmitted(false);
      setIsSubmitting(false);
      setErrorMessage(null);
      setHoneypot("");
      setFormData(initialFormState);
    }, 300);
  };

  useEffect(() => {
    const handleOpen = () => showDrawer();
    window.addEventListener("open-consultation-modal", handleOpen);
    return () => window.removeEventListener("open-consultation-modal", handleOpen);
  }, [showDrawer]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (honeypot) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": FORM_NAME,
          ...formData
        })
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setIsSubmitted(true);
      setFormData(initialFormState);
      window.setTimeout(() => {
        hideDrawer();
      }, 2500);
    } catch {
      setErrorMessage("Something went wrong while sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value) {
      const day = new Date(`${value}T00:00:00`);
      const dayNumber = day.getDay();
      const isWeekend = dayNumber === 0 || dayNumber === 6;

      if (isWeekend) {
        setErrorMessage("Please choose a weekday for your consultation.");
        setFormData((prev) => ({
          ...prev,
          preferredDate: ""
        }));
        return;
      }
    }

    setErrorMessage(null);
    setFormData((prev) => ({
      ...prev,
      preferredDate: value
    }));
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value) {
      const [hours, minutes] = value.split(":").map(Number);
      const totalMinutes = hours * 60 + minutes;
      const startMinutes = 9 * 60;
      const endMinutes = 17 * 60;

      if (Number.isFinite(totalMinutes) && (totalMinutes < startMinutes || totalMinutes > endMinutes)) {
        setErrorMessage("Please choose a time between 09:00 and 17:00.");
        setFormData((prev) => ({
          ...prev,
          preferredTime: ""
        }));
        return;
      }
    }

    setErrorMessage(null);
    setFormData((prev) => ({
      ...prev,
      preferredTime: value
    }));
  };

  return (
    <>
      {/* Floating Consultation Button */}
      <button
        onClick={showDrawer}
        data-book-me-modal
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 px-6 py-4 bg-gradient-to-r from-black via-blue-950 to-blue-800 text-white rounded-2xl shadow-2xl hover:shadow-blue-700/60 hover:scale-110 transition-all duration-300 font-bold flex items-center gap-3 border-2 border-white/10 group"
        aria-label="Book a consultation"
      >
        <FontAwesomeIcon icon={faCalendar} className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline text-base">Book Consultation</span>
        <span className="sm:hidden text-sm">Book</span>
      </button>

      {isVisible && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <div
            className={`absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
            onClick={hideDrawer}
            aria-hidden="true"
          />

          <aside
            className={`relative z-[70] flex h-full w-full max-w-xl flex-col overflow-y-auto bg-slate-950 shadow-2xl transition-transform duration-300 ease-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="consultation-drawer-title"
          >
            {/* Close Button */}
            <button
              onClick={hideDrawer}
              className="absolute right-5 top-5 z-10 rounded-xl p-3 text-slate-100 transition-all duration-200 hover:scale-110 hover:bg-white/10"
              aria-label="Close consultation form"
            >
              <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
            </button>

            {/* Header */}
            <div className="p-8 sm:p-10">
              <div className="relative overflow-hidden text-white">
                <div className="absolute right-0 top-0 h-24 w-24" />
                <div className="relative flex items-start gap-4">
                  <div>
                    <h2 id="consultation-drawer-title" className="mb-2 text-3xl font-extrabold text-white sm:text-4xl">
                      Book a Consultation
                    </h2>
                    <p className="text-lg font-medium text-white/90">
                      Let&apos;s discuss your enterprise project.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-6 overflow-y-auto p-8 sm:p-10 text-slate-100">
              {!isSubmitted ? (
                <>
                  <p className="text-lg font-medium leading-relaxed text-slate-200">
                    Interested in enterprise solutions, technical leadership, or AI integration? Fill out the form
                    below and I&apos;ll respond within 24 hours.
                  </p>

                  <form
                    name={FORM_NAME}
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <input type="hidden" name="form-name" value={FORM_NAME} />
                    <div className="hidden">
                      <label>
                        Do not fill this in:
                        <input
                          name="bot-field"
                          value={honeypot}
                          onChange={(event) => setHoneypot(event.target.value)}
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </label>
                    </div>

                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-bold text-slate-200">
                        <FontAwesomeIcon icon={faUser} className="mr-2 h-4 w-4 text-blue-300" />
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border-2 border-slate-700 bg-slate-900/40 px-4 py-3 font-medium text-white outline-none transition-all placeholder-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-bold text-slate-200">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2 h-4 w-4 text-blue-200" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border-2 border-slate-700 bg-slate-900/40 px-4 py-3 font-medium text-white outline-none transition-all placeholder-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20"
                        placeholder="john@company.com"
                      />
                    </div>

                    {/* Company Field */}
                    <div>
                      <label htmlFor="company" className="mb-2 block text-sm font-bold text-slate-200">
                        <FontAwesomeIcon icon={faBuilding} className="mr-2 h-4 w-4 text-sky-300" />
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full rounded-xl border-2 border-slate-700 bg-slate-900/40 px-4 py-3 font-medium text-white outline-none transition-all placeholder-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/20"
                        placeholder="Your Company"
                      />
                    </div>

                    {/* Preferred Date Field */}
                    <div>
                      <label htmlFor="preferredDate" className="mb-2 block text-sm font-bold text-slate-200">
                        <FontAwesomeIcon icon={faCalendar} className="mr-2 h-4 w-4 text-blue-200" />
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        min={today}
                        required
                        value={formData.preferredDate}
                        onChange={handleDateChange}
                        className="w-full rounded-xl border-2 border-slate-700 bg-slate-900/40 px-4 py-3 font-medium text-white outline-none transition-all placeholder-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
                      />
                      <p className="mt-2 text-sm font-medium text-slate-400">
                        Consultations are available Monday to Friday. Weekends are excluded.
                      </p>
                    </div>

                    {/* Preferred Time Field */}
                    <div>
                      <label htmlFor="preferredTime" className="mb-2 block text-sm font-bold text-slate-200">
                        <FontAwesomeIcon icon={faClock} className="mr-2 h-4 w-4 text-blue-200" />
                        Preferred Time *
                      </label>
                      <input
                        type="time"
                        id="preferredTime"
                        name="preferredTime"
                        min="09:00"
                        max="17:00"
                        required
                        value={formData.preferredTime}
                        onChange={handleTimeChange}
                        className="w-full rounded-xl border-2 border-slate-700 bg-slate-900/40 px-4 py-3 font-medium text-white outline-none transition-all placeholder-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20"
                      />
                      <p className="mt-2 text-sm font-medium text-slate-400">
                        Please choose a time between 09:00 and 17:00 in your local timezone. I&apos;ll confirm availability shortly.
                      </p>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-bold text-slate-200">
                        <FontAwesomeIcon icon={faPaperPlane} className="mr-2 h-4 w-4 text-blue-200" />
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full resize-none rounded-xl border-2 border-slate-700 bg-slate-900/40 px-4 py-3 font-medium text-white outline-none transition-all placeholder-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
                        placeholder="Tell me about your project, timeline, and what you're looking for..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative flex w-full items-center justify-center gap-3 rounded-xl border-2 border-white/30 px-8 py-5 text-lg font-bold text-white transition-all duration-300 hover:border-white/60 hover:scale-105 hover:shadow-2xl hover:shadow-blue-800/50 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <FontAwesomeIcon icon={faPaperPlane} className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      {isSubmitting ? "Sending..." : "Send Consultation Request"}
                    </button>
                  </form>

                  {errorMessage && (
                    <div className="flex items-center justify-center gap-3 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-300">
                      <FontAwesomeIcon icon={faTriangleExclamation} className="h-4 w-4" />
                      <span>{errorMessage}</span>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center text-slate-100">
                  <div className="mb-6 inline-flex rounded-full bg-emerald-500/10 p-4">
                    <FontAwesomeIcon icon={faCheckCircle} className="h-12 w-12 text-emerald-400" />
                  </div>
                  <h3 className="mb-3 text-2xl font-extrabold text-white">
                    Message Sent!
                  </h3>
                  <p className="max-w-md text-base font-medium text-slate-300">
                    Thank you for reaching out. I&apos;ll respond within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

