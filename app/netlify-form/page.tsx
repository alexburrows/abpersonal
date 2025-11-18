/**
 * This page exists solely for Netlify to detect the form at build time.
 * It is not linked anywhere and is hidden from users.
 */
export default function NetlifyFormPage() {
  return (
    <div style={{ display: "none" }}>
      <form
        name="consultation"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="consultation" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="company" />
        <input type="date" name="preferredDate" />
        <input type="time" name="preferredTime" />
        <textarea name="message"></textarea>
        <input type="text" name="bot-field" />
      </form>
    </div>
  );
}

