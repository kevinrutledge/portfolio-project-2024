export default function ContactForm() {
  return (
    <form className="max-w-2xl mx-auto px-5">
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block font-crimson font-bold text-xl mb-2"
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          className="w-full p-3 border border-border rounded-lg font-crimson text-lg focus:outline-none focus:border-primary"
          required
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="email"
          className="block font-crimson font-bold text-xl mb-2"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-3 border border-border rounded-lg font-crimson text-lg focus:outline-none focus:border-primary"
          required
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="message"
          className="block font-crimson font-bold text-xl mb-2"
        >
          Message:
        </label>
        <textarea
          id="message"
          rows={6}
          className="w-full p-3 border border-border rounded-lg font-crimson text-lg resize-vertical focus:outline-none focus:border-primary"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white py-3 px-6 rounded-lg font-crimson text-xl hover:bg-secondary transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
