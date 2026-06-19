"use client";

import { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faCheckCircle,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const initialFormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export default function BookMeModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");
  const [formData, setFormData] = useState(initialFormState);

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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          honeypot,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          typeof result.error === "string"
            ? result.error
            : "Form submission failed"
        );
      }

      setIsSubmitted(true);
      setFormData(initialFormState);
      window.setTimeout(() => {
        hideDrawer();
      }, 10000);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const inputClasses =
    "w-full border-b border-border bg-transparent py-2.5 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-accent-bright";

  return (
    <>
      <button
        type="button"
        onClick={showDrawer}
        data-book-me-modal
        className="btn btn-primary fixed bottom-6 right-6 z-40 hidden sm:inline-flex"
        aria-label="Open contact form"
      >
        Contact
      </button>

      {isVisible && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className={`absolute inset-0 bg-background/80 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
            onClick={hideDrawer}
            aria-hidden="true"
          />

          <aside
            className={`relative z-10 flex h-full w-full max-w-md flex-col overflow-y-auto border-l border-border bg-surface transition-transform duration-300 ease-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="consultation-drawer-title"
          >
            <div className="flex items-start justify-between border-b border-border px-6 py-5">
              <div>
                <h2
                  id="consultation-drawer-title"
                  className="text-base font-medium"
                >
                  Get in touch
                </h2>
                <p className="mt-1 text-sm text-text-muted">
                  I usually reply within one working day.
                </p>
              </div>
              <button
                type="button"
                onClick={hideDrawer}
                className="p-1 text-text-muted hover:text-text-primary"
                aria-label="Close form"
              >
                <FontAwesomeIcon icon={faTimes} className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 px-6 py-6">
              {!isSubmitted ? (
                <>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="hidden" aria-hidden="true">
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

                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1 block text-xs text-text-muted"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1 block text-xs text-text-muted"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="mb-1 block text-xs text-text-muted"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1 block text-xs text-text-muted"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={`${inputClasses} resize-none`}
                        placeholder="A short summary of your project or enquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? "Sending..." : "Send message"}
                    </button>
                  </form>

                  {errorMessage && (
                    <div className="mt-4 flex items-center gap-2 text-sm text-red-400">
                      <FontAwesomeIcon
                        icon={faTriangleExclamation}
                        className="h-3.5 w-3.5 shrink-0"
                      />
                      {errorMessage}
                    </div>
                  )}
                </>
              ) : (
                <div className="py-8">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="h-6 w-6 text-emerald-500"
                  />
                  <p className="mt-3 text-sm font-medium text-text-primary">
                    Message sent
                  </p>
                  <p className="mt-1 text-sm text-text-muted">
                    Thank you. I will be in touch shortly.
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
