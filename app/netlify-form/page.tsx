// Hidden page for Netlify to detect form structure at build time
// This page is not linked anywhere but allows Netlify to parse the form during build
export default function NetlifyFormPage() {
  return (
    <div style={{ display: "none" }}>
      <form name="consultation" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="consultation" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="company" />
        <textarea name="message"></textarea>
        <input type="text" name="bot-field" />
      </form>
    </div>
  );
}

