export default function NetlifyForms() {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      hidden
    >
      <input type="hidden" name="form-name" value="contact" />
      <input name="name" />
      <input name="email" />
      <input name="role" />
      <textarea name="message" />
    </form>
  );
}
