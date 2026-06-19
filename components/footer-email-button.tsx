"use client";

type FooterEmailButtonProps = {
  className?: string;
};

export function FooterEmailButton({ className }: FooterEmailButtonProps) {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
  };

  const baseClasses =
    "cursor-pointer bg-transparent text-inherit no-underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  return (
    <button
      type="button"
      onClick={handleClick}
      className={[baseClasses, className].filter(Boolean).join(" ")}
      aria-label="Open contact form"
    >
      hello@alexburrows.net
    </button>
  );
}
