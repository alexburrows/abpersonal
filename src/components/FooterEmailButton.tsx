type FooterEmailButtonProps = {
  className?: string;
};

export function FooterEmailButton({ className }: FooterEmailButtonProps) {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
  };

  const baseClasses =
    "cursor-pointer bg-transparent p-0 text-inherit transition-colors focus-visible:outline-none";

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
