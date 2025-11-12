"use client";

type FooterEmailButtonProps = {
  className?: string;
};

export function FooterEmailButton({ className }: FooterEmailButtonProps) {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
  };

  const baseClasses =
    "cursor-pointer bg-transparent font-semibold text-cyan-200 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

  return (
    <button
      type="button"
      onClick={handleClick}
      className={[baseClasses, className].filter(Boolean).join(" ")}
      aria-label="Open consultation form"
    >
      hello@digidrop.io
    </button>
  );
}

