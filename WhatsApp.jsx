import "./WhatsApp.css";

function WhatsApp() {
  return (
    <a
      className="whatsapp-button"
      href="https://wa.me/9666819426"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Venkatesh on WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 3.2a12.6 12.6 0 0 0-10.8 19L3.5 28.8l6.8-1.7A12.7 12.7 0 1 0 16 3.2Zm0 22.9c-1.8 0-3.6-.5-5.1-1.5l-.4-.2-4 .9.9-3.8-.3-.4a10.2 10.2 0 1 1 8.9 5Zm5.6-7.6c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2c-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1a8.4 8.4 0 0 1-2.5-1.5 9.4 9.4 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-1-2.3c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 3 1.3 3.2c.2.2 2.3 3.5 5.5 4.9.8.3 1.4.5 1.9.6.8.3 1.6.2 2.1.1.7-.1 1.9-.8 2.1-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4Z" />
      </svg>
      <span>WhatsApp</span>
    </a>
  );
}

export default WhatsApp;
