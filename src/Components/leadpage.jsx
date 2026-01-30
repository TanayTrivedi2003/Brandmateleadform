import logo from "/brandmate-logo.png";
import logo1 from "/brandmate-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef } from "react";

import {
    faLinkedinIn,
    faFacebookF,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";





const LeadPage = () => {




    const formRef = useRef(null);

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const [form, setForm] = useState({
        name: "",
        business: "",
        email: "",
        phone: "",
        challenge: "",
        otherChallenge: "",
        time: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const isValidEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const isValidPhone = (phone) =>
        /^[0-9]{10}$/.test(phone);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (hasSubmitted) return;

        if (
            !form.name ||
            !form.email ||
            !form.phone ||
            !form.challenge ||
            !form.time ||
            (form.challenge === "other" && !form.otherChallenge)
        ) return;

        if (!isValidEmail(form.email)) {
            setError("Enter a valid email");
            return;
        }

        if (!isValidPhone(form.phone)) {
            setError("Enter a valid 10-digit phone number");
            return;
        }

        setIsSubmitting(true);
        setHasSubmitted(true);

        try {
            await fetch(
                "https://hook.us2.make.com/alawjdm16aqfn0wjcouj8rtsp91fy7fw",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name: form.name,
                        business: form.business,
                        email: form.email,
                        phone: form.phone,
                        challenge:
                            form.challenge === "other"
                                ? form.otherChallenge
                                : form.challenge,
                        callTime: form.time,
                    }),
                }
            );

            setShowSuccess(true);
            setForm({
                name: "",
                business: "",
                email: "",
                phone: "",
                challenge: "",
                otherChallenge: "",
                time: "",
            });
        } catch {
            setHasSubmitted(false);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-[#0B0F1A] text-white min-h-screen">

            {/* ================= HEADER ================= */}
            <header className="border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <img src={logo} className="h-10" />
                    <div className="text-sm text-gray-300 space-x-4 hidden md:block">
                        <span>+91 7309180407</span>
                        <span>+91 8081186611</span>
                    </div>
                </div>
            </header>

            {/* ================= HERO ================= */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <button
                        onClick={scrollToForm}
                        className="inline-block bg-blue-600 hover:bg-blue-700
             text-white px-5 py-2 rounded-full text-sm font-semibold
             animate-bounce"
                    >
                        FREE CONSULTATION
                    </button>




                    <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
                        Transform Your Business With a
                        <span className="text-blue-500"> Free 30-Minute Strategy Call</span>

                    </h1>

                    <p className="mt-6 text-gray-300 text-lg">
                        Get expert insights, identify growth bottlenecks, and receive a
                        clear roadmap tailored to your business.
                    </p>

                    <div className="mt-8 flex justify-center gap-6 text-sm text-gray-300">
                        <span>✔ No Cost</span>
                        <span>✔ No Sales Pressure</span>
                        <span>✔ Real Experts</span>
                    </div>
                </div>
            </section>

            {/* ================= HERO VIDEO INFO ================= */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT: VIDEO */}
                    <div
                        className="relative w-full max-w-md mx-auto lg:mx-0
             aspect-[9/16] max-h-[520px]
             rounded-2xl overflow-hidden
             shadow-2xl border border-white/10 bg-black flex items-center justify-center"
                    >
                        <video
                            src="/Video.mp4"
                            autoPlay
                            muted
                            loop
                            controls
                            playsInline
                            preload="metadata"
                            poster="/thumbnail.png"
                            className="w-full h-full object-contain"
                        />
                    </div>




                    {/* RIGHT: INFO */}
                    <div className="space-y-6">

                        {/* Info cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { title: "Date", value: "1 Febraury 2025 - 15 Febraury 2025 " },
                                { title: "Time", value: "10:00 AM to 06:00 PM " },
                                { title: "Language", value: "Hindi/English" },
                                { title: "Duration", value: "30 Minutes" },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-5"
                                >
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600/20 text-blue-500 font-bold">
                                        ⏱
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">{item.title}</p>
                                        <p className="font-semibold text-white">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <button
                            onClick={scrollToForm}
                            className="w-full sm:w-auto mt-4 px-10 py-4
             bg-blue-600 hover:bg-blue-700
             rounded-xl font-semibold text-white text-lg
             shadow-lg shadow-blue-600/30
             animate-bounce"
                        >
                            Grab Your FREE Strategy Call
                        </button>


                    </div>
                </div>
            </section>

            {/* ================= 30 MIN STRATEGY SECTION ================= */}
            <section className="py-24 bg-[#0B0F1A] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            What We’ll Discuss in{" "}
                            <span className="text-blue-500">30 Minutes</span>
                        </h2>
                        <p className="mt-4 text-gray-300 text-lg">
                            In this focused strategy call, we deep-dive into your business,
                            identify growth blockers, and outline a clear action plan — no fluff,
                            only execution-ready insights.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Card 1 */}
                        <div className="relative bg-[#111827] border border-white/10 rounded-2xl p-8 shadow-xl">
                            <span className="absolute -top-4 left-6 bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                                Step #1
                            </span>
                            <h3 className="mt-4 text-xl font-semibold text-white">
                                Business & Growth Audit
                            </h3>
                            <p className="mt-3 text-gray-300">
                                We analyse your current business model, offers, digital presence,
                                and identify the exact gaps stopping consistent leads or sales.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="relative bg-[#111827] border border-white/10 rounded-2xl p-8 shadow-xl">
                            <span className="absolute -top-4 left-6 bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                                Step #2
                            </span>
                            <h3 className="mt-4 text-xl font-semibold text-white">
                                Lead Generation Strategy
                            </h3>
                            <p className="mt-3 text-gray-300">
                                We design a custom lead generation or performance marketing strategy
                                tailored to your industry, budget, and growth goals.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="relative bg-[#111827] border border-white/10 rounded-2xl p-8 shadow-xl">
                            <span className="absolute -top-4 left-6 bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                                Step #3
                            </span>
                            <h3 className="mt-4 text-xl font-semibold text-white">
                                Clear Action Roadmap
                            </h3>
                            <p className="mt-3 text-gray-300">
                                You walk away with a step-by-step roadmap covering funnels, ads,
                                automation, and next actions to scale faster with clarity.
                            </p>
                        </div>

                    </div>

                    {/* CTA */}
                    <div className="mt-16 flex justify-center">
                        <button
                            onClick={scrollToForm}
                            className="w-full max-w-2xl bg-blue-600 hover:bg-blue-700
             text-white text-lg font-semibold py-4 rounded-xl
             shadow-lg shadow-blue-600/30
             animate-bounce
             hover:scale-105 active:scale-95
             transition-transform"
                        >
                            Grab Your FREE 30-Minute Strategy Call
                        </button>


                    </div>

                </div>
            </section>
            {/* ================= OUR CLIENTS ================= */}
            <section className="py-24 bg-[#0B0F1A] border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Trusted by <span className="text-blue-500">Leading Brands</span>
                        </h2>
                        <p className="mt-4 text-gray-300 text-lg">
                            We’ve worked with startups, enterprises, and growing businesses
                            across industries.
                        </p>
                    </div>

                    {/* Logos Grid */}
                    <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">

                        {[
                            { name: "Apollo", logo: "/Apollo.jpeg" },
                            { name: "Tata", logo: "/Tata.jpeg" },
                            { name: "Raymond", logo: "/Raymond.jpeg" },
                            { name: "Royal Enfield", logo: "/RoyalEnfield.jpeg" },
                            { name: "Realme", logo: "/Realme.jpeg" },
                            { name: "CEAT", logo: "/ceat.jpeg" },
                            { name: "Jawa", logo: "/jawa.jpeg" },
                            { name: "Killer", logo: "/killer.jpeg" },
                            { name: "Smelita", logo: "/smelita.jpeg" },
                            { name: "Profinity", logo: "/Profinity.jpeg" },
                            { name: "Medvanatge", logo: "/medvantage.jpeg" },
                            { name: "Curry Cave", logo: "/CurryCave.jpeg" },
                            { name: "LeeCooper", logo: "/LeeCooper.jpeg" },
                            { name: "KyonKAt", logo: "/KyonKat.jpeg" },
                            { name: "Build-O-Option", logo: "/Bild.jpeg" },
                            { name: "Adani", logo: "/Adanai.jpeg" },
                            { name: "kashviha pvt. lmt.", logo: "/krishna.jpeg" },
                            { name: "Mr", logo: "/mr.jpeg" },
                            { name: "verelios", logo: "/verelios.png" },
                            { name: "VeW", logo: "/vew.jpeg" },
                        ].map((client) => (
                            <div
                                key={client.name}
                                className="flex items-center justify-center
                     h-24 bg-white/5 border border-white/10
                     rounded-xl p-4
                     transition "
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-h-12 w-auto object-contain transition"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </section>



            {/* ================= MAIN ================= */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

                    {/* BENEFITS */}
                    <div>
                        <h2 className="text-3xl font-semibold">
                            What You’ll Gain From This Call
                        </h2>
                        <p className="mt-3 text-gray-400">
                            Immediate clarity. No fluff. Actionable direction.
                        </p>

                        <div className="mt-8 space-y-6">
                            {[
                                ["Clear Bottlenecks", "Identify what’s stopping growth"],
                                ["Action Plan", "Step-by-step growth roadmap"],
                                ["Digital Expertise", "6+ years real experience"],
                                ["Automation Insights", "Save time & scale faster"],
                            ].map(([title, desc]) => (
                                <div
                                    key={title}
                                    className="p-5 bg-white/5 border border-white/10 rounded-xl"
                                >
                                    <h4 className="font-semibold">{title}</h4>
                                    <p className="text-gray-400 text-sm mt-1">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>



                    {/* FORM */}
                    <div
                        ref={formRef}
                        className="bg-white text-black rounded-2xl p-8 shadow-xl"
                    >

                        <h3 className="text-2xl font-semibold">
                            Book Your Free Strategy Call
                        </h3>
                        <p className="text-gray-600 mt-1">
                            We’ll contact you within 24 hours
                        </p>

                        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                            <input
                                name="name"
                                placeholder="Full Name *"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-3"
                            />

                            <input
                                name="business"
                                placeholder="Business Name"
                                value={form.business}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-3"
                            />

                            <input
                                name="email"
                                placeholder="Email *"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-3"
                            />

                            <input
                                name="phone"
                                placeholder="Phone *"
                                maxLength={10}
                                value={form.phone}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        phone: e.target.value.replace(/\D/g, ""),
                                    })
                                }
                                className="w-full border rounded-lg px-4 py-3"
                            />

                            <select
                                name="challenge"
                                value={form.challenge}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-3"
                            >
                                <option value="">Main Challenge</option>
                                <option value="low-leads">Low Leads / Sales</option>
                                <option value="website">Website / App Issues</option>
                                <option value="marketing">Marketing Not Working</option>
                                <option value="branding">Branding</option>
                                <option value="automation">Automation / CRM</option>
                                <option value="other">Other</option>
                            </select>

                            {form.challenge === "other" && (
                                <input
                                    name="otherChallenge"
                                    placeholder="Describe your challenge"
                                    value={form.otherChallenge}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-3"
                                />
                            )}

                            <select
                                name="time"
                                value={form.time}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-3"
                            >
                                <option value="">Preferred Call Time</option>
                                <option value="morning">Morning (10:00AM - 12:00PM)</option>
                                <option value="afternoon">Afternoon (12:00PM - 03:00PM)</option>
                                <option value="evening">Evening (03:00PM - 06:00PM)</option>
                            </select>

                            {error && (
                                <p className="text-red-500 text-sm">{error}</p>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting || hasSubmitted}
                                className={`w-full font-semibold py-3 rounded-lg
  transition-all duration-300
  ${hasSubmitted
                                        ? "bg-green-600 text-white"
                                        : "bg-blue-600 hover:bg-blue-700 text-white animate-bounce hover:scale-105 active:scale-95"}
  ${isSubmitting ? "cursor-not-allowed opacity-80" : ""}
`}
                            >
                                {isSubmitting && (
                                    <span className="inline-flex items-center gap-2">
                                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                        Submitting...
                                    </span>
                                )}

                                {!isSubmitting && hasSubmitted && (
                                    <span className="inline-flex items-center gap-2 animate-pulse">
                                        ✅ Submitted Successfully
                                    </span>
                                )}

                                {!isSubmitting && !hasSubmitted && "Book Free Strategy Call"}
                            </button>


                        </form>
                    </div>
                </div>
            </section >



            {/* ================= CLIENT TESTIMONIALS ================= */}
            <section className="py-24 bg-[#0B0F1A] border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            What Our <span className="text-blue-500">Clients Say</span>
                        </h2>
                        <p className="mt-4 text-gray-300 text-lg">
                            Honest feedback from business owners across different services.
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* SOCIAL MEDIA MARKETING */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <p className="text-gray-300 text-sm leading-relaxed">
                                “Our social media presence was inconsistent and not driving any real engagement.
                                Brand Mate Digital completely changed the game for us.
                                From content strategy to creatives and posting structure,
                                everything became more professional and growth-focused.
                                Within a few weeks, we started seeing better engagement,
                                brand recall, and genuine inbound queries from social platforms.”
                            </p>
                            <div className="mt-6">
                                <p className="font-semibold text-white">Amit Vikram Dubey</p>
                                <p className="text-sm text-gray-400">Founder, Smelita Aromas</p>
                            </div>
                        </div>

                        {/* DIGITAL MARKETING */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <p className="text-gray-300 text-sm leading-relaxed">
                                “Brand Mate Digital’s digital marketing strategy gave us clarity we were missing for a long time.
                                Their performance-focused approach, targeting, and funnel planning
                                helped us move away from guesswork.
                                The results were visible not just in leads,
                                but in the quality of inquiries and conversion-ready prospects.”
                            </p>
                            <div className="mt-6">
                                <p className="font-semibold text-white">Sahil Chauhan</p>
                                <p className="text-sm text-gray-400">Founder, Verelios Labs</p>
                            </div>
                        </div>

                        {/* WEBSITE DEVELOPMENT */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <p className="text-gray-300 text-sm leading-relaxed">
                                “Our website earlier looked outdated and failed to communicate trust.
                                Brand Mate Digital redesigned our website with a clear structure,
                                better user flow, and conversion-focused layout.
                                After the new website launch, we noticed improved credibility,
                                longer user sessions, and more serious inquiries from clients.”
                            </p>
                            <div className="mt-6">
                                <p className="font-semibold text-white">Kamlesh Srivastava</p>
                                <p className="text-sm text-gray-400">Founder, Medvantage Healthcare</p>
                            </div>
                        </div>

                        {/* AFFILIATE / LEAD PARTNERSHIP */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <p className="text-gray-300 text-sm leading-relaxed">
                                “As a trading business, consistency and trust are extremely important.
                                Brand Mate Digital helped us set up a structured affiliate
                                and lead partnership model that brought in high-intent clients.
                                Their transparency, reporting, and execution
                                made the entire process smooth and reliable for long-term growth.”
                            </p>
                            <div className="mt-6">
                                <p className="font-semibold text-white">Ashish Paliwal</p>
                                <p className="text-sm text-gray-400">Founder, Profinity</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ================= FOOTER ================= */}
            {/* ================= FOOTER ================= */}
            <footer className="bg-[#0B0F1A] border-t border-white/10 pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Top Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

                        {/* BRAND */}
                        <div>
                            <img src={logo1} alt="Brand Mate Digital" className="h-10 mb-4" />
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Growth-focused digital consulting for modern businesses.
                                We help brands scale with clarity, performance marketing,
                                and execution-driven strategy.
                            </p>
                        </div>

                        {/* OFFICE LOCATIONS */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Our Offices</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li>📍 Kanpur, Uttar Pradesh</li>
                                <li>📍 Gurugram, Haryana</li>
                                <li>📍 Bangalore, Karnataka</li>
                                <li>📍 Mumbai, Maharashtra</li>
                            </ul>
                        </div>

                        {/* SOCIAL */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>

                            {/* Social Icons */}
                            <div className="flex gap-4 text-xl justify-start mb-4">
                                <a
                                    href="https://www.linkedin.com/company/brandmate-digital"
                                    target="_blank"
                                    className="w-11 h-11 flex items-center justify-center rounded-full
      bg-white/5 border border-white/10 text-white
      hover:bg-[#0A66C2] hover:shadow-lg hover:shadow-[#0A66C2]/40
      animate-bounce hover:scale-110 active:scale-95
      transition-all duration-300"
                                >
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>

                                <a
                                    href="https://www.instagram.com/thebrandmate.digital/"
                                    target="_blank"
                                    className="w-11 h-11 flex items-center justify-center rounded-full
      bg-white/5 border border-white/10 text-white
      hover:bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-500
      hover:shadow-lg hover:shadow-pink-500/40
      animate-bounce [animation-delay:0.15s]
      hover:scale-110 active:scale-95
      transition-all duration-300"
                                >
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>

                                <a
                                    href="https://www.facebook.com/profile.php?id=61578585032186"
                                    target="_blank"
                                    className="w-11 h-11 flex items-center justify-center rounded-full
      bg-white/5 border border-white/10 text-white
      hover:bg-[#1877F2] hover:shadow-lg hover:shadow-[#1877F2]/40
      animate-bounce [animation-delay:0.3s]
      hover:scale-110 active:scale-95
      transition-all duration-300"
                                >
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-1 text-sm text-gray-400">
                                <a
                                    href="tel:+917309180407"
                                    className="block hover:text-blue-500 transition"
                                >
                                    📞 +91 73091 80407
                                </a>

                                <a
                                    href="tel:+918081186611"
                                    className="block hover:text-blue-500 transition"
                                >
                                    📞 +91 80811 86611
                                </a>

                                <a
                                    href="mailto:info@brandmatedigital.com"
                                    className="block hover:text-blue-500 transition"
                                >
                                    📧 info@brandmatedigital.com
                                </a>
                            </div>
                        </div>



                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} Brand Mate Digital. All rights reserved.
                        </p>

                        <p className="text-gray-500 text-sm">
                            Designed & powered by <span className="text-blue-500 font-medium">Brand Mate Digital</span>
                        </p>
                    </div>

                </div>
            </footer>

        </div >
    );
};

export default LeadPage;
