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
    <section id="contact" className="sm:px-10 px-5 my-0 w-screen">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="max-w-2xl relative z-10 sm:px-10 px-5 mt-12 pt-20">
          <h3 className="sm:text-4xl text-3xl font-semibold text-neutral-content">
            Bring your vision to life—reach out through this form.
          </h3>
          <p className="text-lg text-sky-200 mt-5">
            From launching a new website to finding the right talent for your
            company, I’m ready to help you succeed.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col space-y-7"
          >
            <label htmlFor="name" className="space-y-3">
              <span className="text-lg text-primary">Full Name</span>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-slate-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-zinc-500 text-lg text-zinc-800 shadow-slate-200 shadow-2xl focus:outline-none mt-1"
                placeholder="Jane Robinson"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>

            <label htmlFor="email" className="space-y-3">
              <span className="text-lg text-primary">Email</span>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-slate-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-zinc-500 text-lg text-zinc-800 shadow-slate-200 shadow-2xl focus:outline-none mt-1"
                placeholder="JRobinson@tech-talk.org"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>

            <label htmlFor="message" className="space-y-3">
              <span className="text-lg text-primary">Message</span>
              <textarea
                id="message"
                name="message"
                className="w-full bg-slate-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-zinc-500 text-lg text-zinc-800 shadow-slate-200 shadow-2xl focus:outline-none mt-1"
                placeholder="Hi, I want to hire you for..."
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
              />
            </label>

            <button
              className="bg-slate-500 px-5 py-2 min-h-12 rounded-lg shadow-slate-200 shadow-2xl flex justify-center items-center text-lg text-white gap-3"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending" : "Send Message"}{" "}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="bg-slate-500 px-5 py-2 min-h-12 rounded-lg shadow-slate-200 shadow-2xl flex justify-center items-center text-lg text-white gap-3_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
