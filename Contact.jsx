import { useState } from "react";

const CONTACT_EMAIL = "venkateshmamidala426@gmail.com";

function Contact() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSending(true);
    setStatus({ type: "", message: "" });

    const formData = new FormData(event.currentTarget);
    const submission = Object.fromEntries(formData.entries());
    submission._replyto = submission.email;
    submission._url = window.location.href;

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submission),
      });

      const responseText = await response.text();
      let result;

      try {
        result = JSON.parse(responseText);
      } catch {
        throw new Error(
          `FormSubmit returned an unexpected response (${response.status}).`,
        );
      }

      if (
        !response.ok ||
        result.success === false ||
        result.success === "false"
      ) {
        throw new Error(
          result.message || `FormSubmit rejected the message (${response.status}).`,
        );
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Thanks for reaching out. Your message has been sent.",
      });
    } catch (error) {
      console.error("Portfolio contact form submission failed:", error);
      setStatus({
        type: "error",
        message: error instanceof TypeError
          ? "Could not reach the form service. Check your internet connection and make sure the portfolio is open through its web server."
          : error.message || "Sorry, your message could not be sent. Please email me directly.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-intro-block">
        <p className="eyebrow">05 — Contact</p>
        <h2>
          Let’s create
          <br />
          <em>something useful.</em>
        </h2>
        <p className="contact-intro">
          Have an opportunity or a project in mind? Send me a message.
        </p>
        <a className="contact-email" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL} <span aria-hidden="true">↗</span>
        </a>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-field">
          <label htmlFor="contact-name">Your name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            required
          />
        </div>

        <div className="contact-field">
          <label htmlFor="contact-email">Email address</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jane@example.com"
            required
          />
        </div>

        <div className="contact-field">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows="5"
            placeholder="Tell me a little about what you have in mind..."
            required
          />
        </div>

        <input
          type="hidden"
          name="_subject"
          value="New message from your portfolio"
        />
        <button className="button button-light contact-submit" type="submit" disabled={isSending}>
          {isSending ? "Sending…" : "Send message"}
          <span aria-hidden="true">↗</span>
        </button>

        {status.message && (
          <p className={`form-status ${status.type}`} role="status" aria-live="polite">
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
