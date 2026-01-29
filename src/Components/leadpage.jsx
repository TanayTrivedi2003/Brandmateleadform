import { useState } from "react";
import "./leadpage.css";
import logo from "/brandmate-logo2.png";
import logo1 from "/brandmate-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedinIn,

    faFacebookF,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const LeadPage = () => {
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


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setIsSubmitting(true);

    //     // Simulate API call
    //     await new Promise(resolve => setTimeout(resolve, 1000));

    //     alert("Thanks! Our team will contact you shortly.");
    //     setIsSubmitting(false);
    //     // Reset form
    //     setForm({
    //         name: "",
    //         business: "",
    //         email: "",
    //         phone: "",
    //         challenge: "",
    //         time: "",
    //     });
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (hasSubmitted) return;

        if (
            !form.name ||
            !form.business ||
            !form.email ||
            !form.phone ||
            !form.challenge ||
            !form.time ||
            (form.challenge === "other" && !form.otherChallenge)
        ) {
            return;
        }

        // if (!isValidEmail(form.email)) return;
        // if (!isValidPhone(form.phone)) return;
        if (!isValidEmail(form.email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (!isValidPhone(form.phone)) {
            setError("Please enter a valid 10-digit phone number.");
            return;
        }


        setIsSubmitting(true);
        setHasSubmitted(true);

        try {
            await fetch("https://hook.us2.make.com/alawjdm16aqfn0wjcouj8rtsp91fy7fw", {
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
            });

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

        } catch (error) {
            console.error("Webhook error:", error);
            setHasSubmitted(false);
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="lead-page">
            {/* ================= HEADER ================= */}
            <header className="header">
                <div className="container header-inner">

                    {/* LEFT: BRAND */}
                    <div className="brand ">
                        <img src={logo} alt="Brand Mate Digital" className="logo" />
                        <div className="brand-text">

                            <span className="brand-tagline">Growth & Digital Consulting</span>
                        </div>
                    </div>

                    {/* RIGHT: CONTACT */}
                    <div className="header-contact">
                        <span className="contact-phone">
                            +91 7309180407
                        </span>
                        <span className="contact-phone">
                            +91 8081186611
                        </span>
                    </div>

                </div>
            </header>


            {/* ================= HERO ================= */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="badge">FREE CONSULTATION</div>
                        <h1 className="hero-title">
                            Transform Your Business With a Free 30-Minute Strategy Call
                        </h1>
                        <p className="hero-subtitle">
                            Get expert insights, identify growth opportunities, and receive a
                            customized roadmap — no strings attached.
                        </p>
                        <div className="trust-badges">
                            <div className="trust-badge">
                                <span className="badge-icon">✓</span>
                                <span>No Cost</span>
                            </div>
                            <div className="trust-badge">
                                <span className="badge-icon">✓</span>
                                <span>No Sales Pressure</span>
                            </div>
                            <div className="trust-badge">
                                <span className="badge-icon">✓</span>
                                <span>Expert Advice</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= MAIN CONTENT ================= */}
            <main className="main-content">
                <div className="container">
                    <div className="content-grid">
                        {/* Left Column - Benefits */}
                        <div className="benefits-section">
                            <div className="section-header">
                                <h2>What You'll Gain From This Call</h2>
                                <p>Our strategy sessions are designed to deliver immediate value</p>
                            </div>

                            <div className="benefits-list">
                                <div className="benefit-card">
                                    <div className="benefit-icon"></div>
                                    <div className="benefit-content">
                                        <h3>Clear Problem Identification</h3>
                                        <p>Pinpoint exact bottlenecks holding back your business growth</p>
                                    </div>
                                </div>

                                <div className="benefit-card">
                                    <div className="benefit-icon"></div>
                                    <div className="benefit-content">
                                        <h3>Actionable Growth Strategy</h3>
                                        <p>Receive a step-by-step roadmap tailored to your specific needs</p>
                                    </div>
                                </div>

                                <div className="benefit-card">
                                    <div className="benefit-icon"></div>
                                    <div className="benefit-content">
                                        <h3>Expert Digital Insights</h3>
                                        <p>Leverage 6+ years of digital transformation experience</p>
                                    </div>
                                </div>

                                <div className="benefit-card">
                                    <div className="benefit-icon"></div>
                                    <div className="benefit-content">
                                        <h3>Technology & Process Audit</h3>
                                        <p>Identify automation opportunities and workflow improvements</p>
                                    </div>
                                </div>
                            </div>

                            <div className="guarantee-banner">
                                <div className="guarantee-icon"></div>
                                <div className="guarantee-content">
                                    <strong>100% Confidential</strong>
                                    <span>Your information is secure and never shared</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className="form-section">
                            <div className="form-container">
                                <div className="form-header">
                                    <h3>Book Your Free Strategy Call</h3>
                                    <p>Fill in your details and we'll schedule your session</p>
                                </div>

                                <form className="form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name *</label>
                                        <input
                                            id="name"
                                            name="name"
                                            value={form.name}
                                            placeholder="Enter your full name"
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="business">Business Name</label>
                                        <input
                                            id="business"
                                            name="business"
                                            value={form.business}
                                            placeholder="Your company name"
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="email">Email *</label>
                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                placeholder="you@company.com"
                                                required
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="phone">Phone *</label>
                                            <input
                                                id="phone"
                                                name="phone"
                                                value={form.phone}
                                                maxLength={10}
                                                required
                                                onChange={(e) => {
                                                    const value = e.target.value.replace(/\D/g, "");
                                                    setForm({ ...form, phone: value });
                                                }}
                                            />

                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="challenge">Main Business Challenge</label>
                                        <select
                                            id="challenge"
                                            name="challenge"
                                            value={form.challenge}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select your primary challenge</option>
                                            <option value="low-leads">Low Leads / Sales</option>
                                            <option value="website">Website / App Issues</option>
                                            <option value="marketing">Marketing Not Working</option>
                                            <option value="branding">Branding & Positioning</option>
                                            <option value="automation">Automation / CRM Setup</option>
                                            <option value="other">Other Challenge</option>
                                        </select>
                                        {form.challenge === "other" && (
                                            <div className="form-group">
                                                <label>Please specify *</label>
                                                <input
                                                    name="otherChallenge"
                                                    value={form.otherChallenge}
                                                    required
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        )}

                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="time">Preferred Call Time</label>
                                        <select
                                            id="time"
                                            name="time"
                                            value={form.time}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select preferred time slot</option>
                                            <option value="morning">Morning (9 AM - 12 PM)</option>
                                            <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                                            <option value="evening">Evening (4 PM - 7 PM)</option>
                                        </select>
                                    </div>

                                    <button
                                        type="submit"
                                        className="submit-btn"
                                        disabled={isSubmitting || hasSubmitted}
                                    >

                                        {isSubmitting ? (
                                            <>
                                                <span className="spinner"></span>
                                                Processing...
                                            </>
                                        ) : hasSubmitted ? (
                                            "Already Submitted"
                                        ) : (
                                            "Book Your Free Strategy Call"
                                        )}

                                    </button>

                                    <p className="form-footer">
                                        By submitting, you agree to our <a href="#">Privacy Policy</a>.
                                        We'll contact you within 24 hours.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {showSuccess && (
                <div className="success-overlay">
                    <div className="success-modal">
                        <h2>🎉 Congratulations!</h2>
                        <p>
                            Your form has been submitted successfully.<br />
                            Our team will contact you within 24 hours.
                        </p>
                        <button onClick={() => setShowSuccess(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}


            {/* ================= STATS ================= */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-number">6+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">600+</div>
                            <div className="stat-label">Businesses Transformed</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">98%</div>
                            <div className="stat-label">Client Satisfaction</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">12h</div>
                            <div className="stat-label">Average Response Time</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= TESTIMONIAL ================= */}
            <section className="testimonial-section">
                <div className="container">
                    <div className="testimonial-grid">

                        <div className="testimonial-card">
                            <div className="quote-icon">❝</div>
                            <blockquote>
                                “Brand Mate Digital completely transformed our digital marketing strategy.
                                As a business owner, working with one of the best marketing agencies gave us clarity, confidence, and real execution.
                                Within just 3 months, we achieved 240% growth in qualified leads, delivering some of the best results we’ve seen so far.
                                Their strategic approach, transparency, and performance-driven mindset truly set Brand Mate Digital apart.”
                            </blockquote>
                            <div className="testimonial-author">
                                <strong>Amit Vikram Dubey</strong>
                                <span>CEO, Smelita Aromas</span>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="quote-icon">❝</div>
                            <blockquote>
                                “Brand Mate Digital’s strategic clarity and execution enabled us to scale faster than anticipated.
                                The consultation alone delivered powerful direction and a roadmap we could implement instantly.”
                            </blockquote>
                            <div className="testimonial-author">
                                <strong>Sahil Chauhan</strong>
                                <span>Founder, Verelios Labs</span>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="quote-icon">❝</div>
                            <blockquote>
                                “Working with Brand Mate Digital was a game-changer for our business.
                                Their data-driven strategy, honest guidance, and clear execution delivered measurable growth in a very short time.
                                We finally saw real traction, consistent leads, and results that actually mattered.”
                            </blockquote>
                            <div className="testimonial-author">
                                <strong>Kamlesh Srivastava</strong>
                                <span>Founder, Madvantage Health Care </span>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="quote-icon">❝</div>
                            <blockquote>
                                “As a trading business owner, clarity and trust matter the most to us.
                                Brand Mate Digital helped us build a strong digital presence and a structured lead system that attracted serious, high-intent clients.
                                Their strategic guidance and execution brought consistency and professionalism to our growth journey.”
                            </blockquote>
                            <div className="testimonial-author">
                                <strong>Ashish Paliwal</strong>
                                <span>Founder & CEO, Profinity</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ================= CLIENTS ================= */}
            <section className="clients-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Trusted by Industry Leaders</h2>
                        <p>We've helped businesses of all sizes achieve digital excellence</p>
                    </div>

                    <div className="clients-grid">
                        {[
                            { name: "Apollo", logo: "./Apollo.jpeg" },
                            { name: "Raymond", logo: "/Raymond.jpeg" },
                            { name: "Royal Enfield", logo: "/RoyalEnfield.jpeg" },
                            { name: "Lee Cooper", logo: "/LeeCooper.jpeg" },
                            { name: "Tata", logo: "/Tata.jpeg" },
                            { name: "Verelios Labs", logo: "/verelios.png" },
                            { name: "Curry Cave", logo: "/CurryCave.jpeg" },
                            { name: "Build Option", logo: "/Bild.jpeg" },
                            { name: "KyonKat", logo: "/KyonKat.jpeg" },
                            { name: "Profinity", logo: "/Profinity.jpeg" },
                            { name: "Pragyan School", logo: "/Pragyan.jpeg" },
                            { name: "Realme", logo: "/Realme.jpeg" },
                            { name: "Medvantage Health Care", logo: "/medvantage.jpeg" },
                            { name: "CEAT", logo: "/ceat.jpeg" },
                            { name: "Mr n Mrs Pet ", logo: "/mr.jpeg" },
                            { name: "JAWA ", logo: "/jawa.jpeg" },
                            { name: "Killer", logo: "/killer.jpeg" },
                            { name: "Varun Electric Works ", logo: "/vew.jpeg" },
                            { name: "Smelita Aromas ", logo: "/smelita.jpeg" },
                            { name: "Kashviha Private Limited", logo: "/krishna.jpeg" },
                        ].map((client) => (
                            <div key={client.name} className="client-logo">
                                <img src={client.logo} alt={client.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ================= FOOTER ================= */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">

                        {/* BRAND */}
                        <div className="footer-brand">
                            <img src={logo1} alt="Brand Mate Digital" className="footer-logo" />
                            <div>

                                <p>Growth-focused digital consulting for modern businesses</p>
                            </div>
                        </div>

                        {/* OFFICE ADDRESS */}
                        <div className="footer-address">
                            <h5>Office Address</h5>
                            <p>
                                Kanpur Nagar, UP <br />
                                Gurugao, Haryana <br />
                                Bangalore, Karnataka<br />
                                Mumbai, Maharashtra<br />


                            </p>
                        </div>

                    </div>


                    <div className="footer-bottom">
                        <p>© {new Date().getFullYear()} Brand Mate Digital. All rights reserved.</p>

                        <div className="social-links">
                            <a href="https://www.linkedin.com/company/brandmate-digital/" className="social-icon linkedin">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a href="https://www.instagram.com/thebrandmate.digital/" className="social-icon instagram">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61578585032186" className="social-icon facebook">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>

                        </div>

                    </div>
                </div>
            </footer>

        </div>
    );
};

export default LeadPage;