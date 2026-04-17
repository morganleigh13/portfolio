import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PixelCard from "../components/react-bits/PixelCard";

const ContactMe = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.messages);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });
  useEffect(() => {
    console.log(form)
  }, [form])



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting");
  };

  return (
    <section
      id="contact"
      className="sm:px-10 px-5 my-0 w-screen bg-base-300 flex items-center justify-center flex-col vintage tracking-wider mt-20"
    >
      <div className="relative min-h-screen text-center justify-center flex w-1/2">
        <PixelCard>
          <div className="max-w-3xl relative z-10 sm:px-10 px-5 pt-3 lg:pt-15">
            <h3 className="sm:text-5xl text-4xl font-semibold text-neutral-content">
              Bring your vision to life—reach out through this form.
            </h3>
            <p className="text-xl text-sky-200 mt-5">
              From launching a new website to finding the right talent for your
              company, I’m ready to help you succeed.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col space-y-7"
            >
              <label htmlFor="name" className="space-y-3">
                <span className="text-2xl font-bold tracking-wider text-primary">Full Name</span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-slate-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-zinc-500 text-lg text-zinc-800 shadow-slate-200 shadow-2xl focus:outline-none mt-1"
                  placeholder="Jane Robinson"
                  value={form.fullName}
                  onChange={(e) => setForm({...form, fullName: e.target.value})}
                  required
                />
              </label>
              <label htmlFor="phone" className="space-y-3">
                <span className="text-2xl font-bold tracking-wider text-primary">Phone Number</span>
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  className="w-full bg-slate-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-zinc-500 text-lg text-zinc-800 shadow-slate-200 shadow-2xl focus:outline-none mt-1"
                  placeholder="480-456-7890"
                  value={form.phone}
                  onChange={(e) => setForm({...form, phone: e.target.value})}
                  required
                />
              </label>

              <label htmlFor="email" className="space-y-3">
                <span className="text-2xl font-bold tracking-wider text-primary">Email</span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-slate-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-zinc-500 text-lg text-zinc-800 shadow-slate-200 shadow-2xl focus:outline-none mt-1"
                  placeholder="JRobinson@tech-talk.org"
                  value={form.email}
                  onChange={(e) => setForm({...form, email: e.target.value})}
                  required
                />
              </label>

              <label htmlFor="message" className="space-y-3">
                <span className="text-2xl font-bold tracking-wider text-primary">Message</span>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-slate-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-zinc-500 text-lg text-zinc-800 shadow-slate-200 shadow-2xl focus:outline-none mt-1"
                  placeholder="Hi, I want to hire you for..."
                  value={form.message}
                  onChange={(e) => setForm({...form, message: e.target.value})}
                  required
                  rows={5}
                />
              </label>

              <button
                className="bg-slate-500 px-5 py-2 min-h-12 rounded-lg shadow-slate-200 shadow-2xl flex justify-center items-center text-lg text-white gap-3"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending" : "Send Message"}
                <img
                  src="/assets/arrow-up.png"
                  alt="arrow-up"
                  className="bg-slate-500 px-5 py-2 min-h-12 rounded-lg shadow-slate-200 shadow-2xl flex justify-center items-center text-lg text-white gap-3_arrow"
                />
              </button>
            </form>
          </div>
        </PixelCard>
      </div>
    </section>
  );
};

export default ContactMe;
