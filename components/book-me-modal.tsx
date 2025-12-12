"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
  faArrowUp
} from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

const FORM_NAME = "consultation";
const initialFormState = {
  name: "",
  email: "",
  company: "",
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
  const [showScrollTop, setShowScrollTop] = useState(false);
  const buttonTextRef = useRef<HTMLSpanElement>(null);
  const hasMeasuredButtonText = useRef(false);
  const buttonTextWidthRef = useRef(0);

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

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 320);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const textEl = buttonTextRef.current;
    if (!textEl || hasMeasuredButtonText.current) {
      return;
    }

    buttonTextWidthRef.current = textEl.scrollWidth;
    gsap.set(textEl, {
      width: showScrollTop ? 0 : buttonTextWidthRef.current,
      marginLeft: showScrollTop ? 0 : 12,
      opacity: showScrollTop ? 0 : 1
    });
    hasMeasuredButtonText.current = true;
  }, [showScrollTop]);

  useEffect(() => {
    const textEl = buttonTextRef.current;
    if (!textEl || !hasMeasuredButtonText.current) {
      return;
    }

    gsap.to(textEl, {
      width: showScrollTop ? 0 : buttonTextWidthRef.current,
      marginLeft: showScrollTop ? 0 : 12,
      opacity: showScrollTop ? 0 : 1,
      duration: 0.35,
      ease: "power2.out"
    });
  }, [showScrollTop]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (honeypot) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Submit directly to Netlify Forms endpoint
      // Netlify will process forms submitted to the site root with form-name
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": FORM_NAME,
          ...formData,
          "bot-field": honeypot
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


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* Floating Consultation Button */}
      <div className="fixed bottom-6 right-6 z-40 sm:bottom-8 sm:right-8">
        <div
          className={`flex overflow-hidden rounded-2xl border-2 border-white/10 bg-black/60 shadow-2xl transition-transform duration-300 ${
            showScrollTop ? "hover:scale-105" : "hover:scale-110"
          }`}
        >
          {showScrollTop && (
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center justify-center border-r border-white/10 bg-gradient-to-b from-black via-slate-950 to-slate-800 px-4 py-4 text-white transition duration-300 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label="Scroll to top"
            >
              <FontAwesomeIcon icon={faArrowUp} className="h-5 w-5" />
            </button>
          )}
          <button
            onClick={showDrawer}
            data-book-me-modal
            className="group flex flex-1 items-center bg-gradient-to-b from-black via-slate-950 to-slate-800 px-6 py-4 font-bold text-white transition duration-300 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label="Book a consultation"
          >
            <FontAwesomeIcon icon={faCalendar} className="h-5 w-5 transition-transform group-hover:rotate-12" />
            <span
              ref={buttonTextRef}
              className="ml-3 inline-flex items-center overflow-hidden whitespace-nowrap"
              style={{ willChange: "width, margin-left, opacity" }}
            >
              <span className="hidden text-base sm:inline">Book Consultation</span>
              <span className="text-sm sm:hidden">Book</span>
            </span>
          </button>
        </div>
      </div>

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
                      Let&apos;s discuss your next project.
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
                    below and I&apos;ll get back to you to arrange a consultation.
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
                      />
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

