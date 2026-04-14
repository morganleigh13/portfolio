import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      emailjs.send(
        "add ServiceId from email.js",
        "tmeplateId",
        {
          from_name: form.name,
          to_name: "Morgan",
          from_email: form.email,
          to_email: "morgana@blah.org",
          message: form.message,
        },
        "publicKey from email.js"
      );
      setLoading(false);
      // do react toast to let them know it was sent
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setLoading(false);
      console.log(err);
      // do toast to say something went wrong which should never happen
    }
  };

  return (
    <section id="contactMe" className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">
            Bring your vision to life—reach out through this form.
          </h3>
          <p className="text-lg text-sky-200">
            From launching a new website to finding the right talent for your
            company, I’m ready to help you succeed.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label htmlFor="name" className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                id="name"
                name="name"
                className="field-input"
                placeholder="Jane Robinson"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>

            <label htmlFor="email" className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                id="email"
                name="email"
                className="field-input"
                placeholder="JRobinson@tech-talk.org"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>

            <label htmlFor="message" className="space-y-3">
              <span className="field-label">Message</span>
              <textarea
                id="message"
                name="message"
                className="field-input"
                placeholder="Hi, I want to hire you for..."
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
              />
            </label>

            <button
              className="field-btn"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending" : "Send Message"}{" "}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
