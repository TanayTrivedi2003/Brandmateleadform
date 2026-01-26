import { useState } from "react";
import "./leadpage.css";
import logo from "/brandmate-logo2.png";
import logo1 from "/brandmate-logo.png";

const LeadPage = () => {
    const [form, setForm] = useState({
        name: "",
        business: "",
        email: "",
        phone: "",
        challenge: "",
        time: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        alert("Thanks! Our team will contact you shortly.");
        setIsSubmitting(false);
        // Reset form
        setForm({
            name: "",
            business: "",
            email: "",
            phone: "",
            challenge: "",
            time: "",
        });
    };

    return (
        <div className="lead-page">
            {/* ================= HEADER ================= */}
            <header className="header">
                <div className="container">
                    <div className="brand">
                        <img src={logo} alt="Brand Mate Digital" className="logo" />
                        <div className="brand-text">
                            {/* <span className="brand-name">Brand Mate Digital</span> */}
                            <span className="brand-tagline">Growth & Digital Consulting</span>
                        </div>
                    </div>
                    <div className="header-contact">
                        <span className="contact-phone">📞 +91 7909180407 </span>
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
                                                placeholder="+1 (555) 000-0000"
                                                required
                                                onChange={handleChange}
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
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="spinner"></span>
                                                Processing...
                                            </>
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
                    <div className="testimonial-card">
                        <div className="quote-icon">❝</div>
                        <blockquote>
                            "Brand Mate Digital transformed our digital strategy completely.
                            Within 3 months, we saw a 240% increase in qualified leads.
                            Their approach is both strategic and practical."
                        </blockquote>
                        <div className="quote-icon">❞</div>
                        <div className="testimonial-author">
                            <div className="author-info">
                                <strong>Vikalp Srivastava</strong>
                                <span>CEO, BrandMate Digital</span>
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
                        <div className="footer-brand">
                            <img src={logo1} alt="Brand Mate Digital" className="footer-logo" />
                            <div>
                                <h4></h4>
                                <p>Growth-focused digital consulting for modern businesses</p>
                            </div>
                        </div>

                        {/* <div className="footer-links">
                            <div className="footer-column">
                                <h5>Quick Links</h5>
                                <a href="#">Services</a>
                                <a href="#">Case Studies</a>
                                <a href="#">About Us</a>
                                <a href="#">Contact</a>
                            </div>
                            <div className="footer-column">
                                <h5>Legal</h5>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Terms of Service</a>
                                <a href="#">Cookie Policy</a>
                            </div>
                        </div> */}
                    </div>

                    <div className="footer-bottom">
                        <p>© {new Date().getFullYear()} Brand Mate Digital. All rights reserved.</p>
                        <div className="social-links">
                            <a href="#">LinkedIn</a>
                            <a href="#">Twitter</a>
                            <a href="#">Instagram</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LeadPage;