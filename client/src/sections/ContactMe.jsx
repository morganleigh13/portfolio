import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PixelCard from "../components/react-bits/PixelCard";
import { createMessage, successState } from "../redux/messageSlice";
import ProfileCard from "../components/react-bits/ProfileCard";
import toast from "react-hot-toast"


const ContactMe = () => {
  const dispatch = useDispatch();

  const { loading, success } = useSelector((state) => state.messages);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });
  useEffect(() => {
    if(success === "message created"){
      toast.success(`Thank you ${form.fullName}.  I will contact you soon.`)
      setForm({ fullName: '', phone: '', email: '', message: ''})
      dispatch(successState())
    }
  
  }, [success]);

  const handleFormat = (val) => {
    if (val.length === 3 || val.length % 5 === 0) {
      val += '-';
    } else if (val.length > 3 && val.length % 2 === 0) {
      val = `${val.slice(0, -1)}-${val.slice(-1)}`;
    }
    return val;
  }
 

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createMessage(form));
  };

  return (
    <section
      id="contact"
      className="sm:px-10 p-5 w-screen bg-base-300 flex items-start justify-around vintage tracking-wider contact-background"
    >
  
  <ProfileCard
  className='pt-20'
    contactText="Contact Me"
    avatarUrl="/pictures/girlProfile.jpg"
    onContactClick={() => console.log('Contact clicked')}
    behindGlowColor="rgba(125, 190, 255, 0.2)"
    iconUrl="/frameworks/redux.svg"
    innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
  />
      
      <div className="relative text-center justify-center flex w-1/3 max-w-4xl">
        <PixelCard>
          <div className="max-w-xl relative z-10 sm:px-10 px-5 pt-3 lg:pt-10 ">
            <h3 className="sm:text-4xl text-3xl font-semibold text-neutral-content bg-base-300 w-fit rounded-4xl px-1 py-1">
              Bring your vision to life—reach out through this form.
            </h3>
            <p className="text-lg text-sky-200 mt-5 bg-base-300 w-fit rounded-4xl px-2 py-1">
              From launching a new website to finding the right talent for your
              company, I’m ready to help you succeed.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-5 flex flex-col space-y-1 grow w-full relative"
            >
              <label htmlFor="name" className="space-y-3 bg-base-300 w-fit rounded-xl px-1 py-1 mt-5">
                <span className="text-lg font-bold tracking-wider text-primary">
                  Full Name
                </span> </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-slate-300 px-5 py-2 rounded-lg placeholder:text-zinc-500 text-lg text-zinc-800 shadow-slate-600 shadow-xl focus:outline-none mt-1"
                  placeholder="Jane Robinson"
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })}
                  required
                />
             
              <label htmlFor="phone" className="space-y-3 bg-base-300 w-fit rounded-xl px-1 py-1 mt-5">
                <span className="text-lg font-bold tracking-wider text-primary">
                  Phone Number
                </span> </label>
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  className="w-full bg-slate-300 px-5 py-2 rounded-lg placeholder:text-zinc-500 text-lg text-zinc-800 shadow-slate-600 shadow-xl focus:outline-none mt-1"
                  placeholder="480-456-7890"
                  value={form.phone}             
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  maxLength={12}
                  required
                />
             

              <label htmlFor="email" className="space-y-3 bg-base-300 w-fit rounded-xl px-1 py-1 mt-5">
                <span className="text-lg font-bold tracking-wider text-primary">
                  Email
                </span> </label>
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
            

              <label htmlFor="message" className="space-y-3 bg-base-300 w-fit rounded-xl px-1 py-1 mt-5">
                <span className="text-lg font-bold tracking-wider text-primary">
                  Message
                </span> </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-slate-300 px-5 py-2 rounded-lg placeholder:text-zinc-500 text-lg text-zinc-800 shadow-slate-600 shadow-xl focus:outline-none mt-1"
                  placeholder="Hi, I want to hire you for..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
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
                  <img
                    src="/mobile.svg"
                    alt="arrow-up"
                    className={`bg-secondary px-2 py-2 min-h-12 rounded-lg shadow-slate-600 shadow-xl flex justify-center items-center text-lg text-primary gap-3_arrow ${!loading ? "animate-bounce " : ""}`}
                  />
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
