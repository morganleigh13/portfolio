import { useState } from "react";
import emailjs from "@emailjs/browser";
import PixelCard from "../components/react-bits/PixelCard";
import ProfileCard from "../components/react-bits/ProfileCard";
import toast from "react-hot-toast";

const ContactMe = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleFormat = (val) => {
    const digits = val.replace(/\D/g, "");
    let formatted = "";
    if (digits.length > 0) formatted += digits.slice(0, 3);
    if (digits.length > 3) formatted += "-" + digits.slice(3, 6);
    if (digits.length > 6) formatted += "-" + digits.slice(6, 10);

    setForm({ ...form, phone: formatted });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      toast.success(`Thank you ${form.fullName}. I will contact you soon.`);
      setForm({ fullName: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS contact form error:", error);
      toast.error("Your message could not be sent. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="sm:px-10 p-5 w-screen bg-base-300 flex lg:items-start items-center justify-around vintage tracking-wider contact-background lg:flex-row flex-col "
    >
      <ProfileCard
        className="pt-20"
        contactText="Contact Me"
        avatarUrl="/pictures/morgan.jpeg"
        onContactClick={() => console.log("Contact clicked")}
        behindGlowColor="rgba(125, 190, 255, 0.2)"
        iconUrl="/frameworks/redux.svg"
        innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
      />

      <div className="relative text-center justify-center flex lg:w-1/3 max-w-4xl lg:mt-0 mt-10">
        <PixelCard>
          <div className="max-w-xl relative z-10 sm:px-10 px-5 pt-3 lg:pt-10 ">
            <h3 className="sm:text-4xl text-3xl font-semibold text-neutral-content bg-base-300 w-fit rounded-4xl px-1 py-1">
              Bring your vision to life—reach out through this form.
            </h3>
            <p className="text-lg text-sky-200 mt-5 bg-base-300 w-fit rounded-4xl px-2 py-1">
              From launching a new website to finding the right talent for your
              company, I’m available.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-5 flex flex-col space-y-1 grow w-full relative"
            >
              <label
                htmlFor="name"
                className="space-y-3 bg-base-300 w-fit rounded-xl px-1 py-1 mt-5"
              >
                <span className="text-lg font-bold tracking-wider text-primary">
                  Full Name
                </span>{" "}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-slate-300 px-5 py-2 rounded-lg placeholder:text-zinc-500 text-lg text-zinc-800 shadow-slate-600 shadow-xl focus:outline-none mt-1"
                placeholder="Jane Robinson"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                required
              />

              <label
                htmlFor="phone"
                className="space-y-3 bg-base-300 w-fit rounded-xl px-1 py-1 mt-5"
              >
                <span className="text-lg font-bold tracking-wider text-primary">
                  Phone Number
                </span>{" "}
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                className="w-full bg-slate-300 px-5 py-2 rounded-lg placeholder:text-zinc-500 text-lg text-zinc-800 shadow-slate-600 shadow-xl focus:outline-none mt-1"
                placeholder="480-456-7890"
                value={form.phone}
                onChange={(e) => {
                  setForm({ ...form, phone: e.target.value });
                  handleFormat(e.target.value);
                }}
                maxLength={12}
                required
              />

              <label
                htmlFor="email"
                className="space-y-3 bg-base-300 w-fit rounded-xl px-1 py-1 mt-5"
              >
                <span className="text-lg font-bold tracking-wider text-primary">
                  Email
                </span>{" "}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-slate-300 px-5 py-2 rounded-lg placeholder:text-zinc-500 text-lg text-zinc-800 shadow-slate-600 shadow-xl focus:outline-none mt-1"
                placeholder="JRobinson@tech-talk.org"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />

              <label
                htmlFor="message"
                className="space-y-3 bg-base-300 w-fit rounded-xl px-1 py-1 mt-5"
              >
                <span className="text-lg font-bold tracking-wider text-primary">
                  Message
                </span>{" "}
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-slate-300 px-5 py-2 rounded-lg placeholder:text-zinc-500 text-lg text-zinc-800 shadow-slate-600 shadow-xl focus:outline-none mt-1"
                placeholder="Hi, I want to hire you for..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
              />

              <div className="justify-end flex w-full my-7">
                <button
                  className="bg-base-100 w-1/3 px-5 py-4 min-h-10 rounded-lg shadow-slate-600 shadow-lg flex justify-center items-center text-md text-seconary-content gap-3"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Sending" : "Send Message"}
                 
                </button>
              </div>
            </form>
          </div>
        </PixelCard>
      </div>
    </section>
  );
};

export default ContactMe;
