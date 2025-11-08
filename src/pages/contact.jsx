import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus("Sending...");

        emailjs
            .sendForm(
                "service_hbegjp9",
                "template_z54ednj",
                form.current,
                "csr_Hi4vpMV4zIHf9"
            )
            .then(
                (result) => {
                    console.log("Success:", result.text);
                    setStatus("🎉 Message sent successfully!");
                    form.current.reset();
                    setIsLoading(false);
                },
                (error) => {
                    console.log("Error:", error.text);
                    setStatus("❌ Failed to send message. Please try again.");
                    setIsLoading(false);
                }
            );
    };

    const contactInfo = [
        {
            icon: "📧",
            title: "Email",
            value: "partiasmwende@gmail.com",
            link: "mailto:partiasmwende@gmail.com"
        },
        {
            icon: "📍",
            title: "Location",
            value: "Nairobi, Kenya",
            link: null
        },
        {
            icon: "💼",
            title: "LinkedIn",
            value: "Connect with me",
            link: "https://www.linkedin.com"
        },
        {
            icon: "🐙",
            title: "GitHub",
            value: "View my projects",
            link: "https://github.com"
        }
    ];

    return (
        <div className="contact-container" id="contact">
            <div className="contact-background">
                <div className="contact-grid"></div>
            </div>
            
            <div className="contact-content">
                {/* Header Section */}
                <div className="contact-header">
                    <h2 className="contact-title">Let's Connect</h2>
                    <div className="contact-divider"></div>
                    <p className="contact-subtitle">
                        Ready to secure your digital assets? Let's discuss how we can work together to protect your systems and data.
                    </p>
                </div>

                <div className="contact-body">
                    {/* Contact Information */}
                    <div className="contact-info-section">
                        <h3>Get In Touch</h3>
                        <p className="info-description">
                            Feel free to reach out for cybersecurity consultations, project collaborations, or just to chat about technology.
                        </p>
                        
                        <div className="contact-details">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="contact-detail-item">
                                    <div className="detail-icon">{item.icon}</div>
                                    <div className="detail-content">
                                        <h4>{item.title}</h4>
                                        {item.link ? (
                                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p>{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="social-section">
                            <h4>Follow Me</h4>
                            <div className="social-links">
                                <a 
                                    href="https://www.linkedin.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="social-link"
                                >
                                    <span className="social-icon">💼</span>
                                    LinkedIn
                                </a>
                                <a 
                                    href="https://twitter.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="social-link"
                                >
                                    <span className="social-icon">🐦</span>
                                    Twitter
                                </a>
                                <a 
                                    href="https://github.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="social-link"
                                >
                                    <span className="social-icon">🐙</span>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-section">
                        <div className="form-container">
                            <h3>Send Me a Message</h3>
                            <form className="contact-form" ref={form} onSubmit={sendEmail}>
                                <div className="form-group">
                                    <div className="input-wrapper">
                                        <input 
                                            type="text" 
                                            name="user_name" 
                                            placeholder=" " 
                                            required 
                                            className="form-input"
                                        />
                                        <label className="form-label">Your Name</label>
                                        <div className="input-icon">👤</div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-wrapper">
                                        <input 
                                            type="email" 
                                            name="user_email" 
                                            placeholder=" " 
                                            required 
                                            className="form-input"
                                        />
                                        <label className="form-label">Your Email</label>
                                        <div className="input-icon">📧</div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-wrapper">
                                        <textarea 
                                            name="message" 
                                            placeholder=" " 
                                            rows="5" 
                                            required 
                                            className="form-input textarea"
                                        ></textarea>
                                        <label className="form-label">Your Message</label>
                                        <div className="input-icon">💬</div>
                                    </div>
                                </div>

                                <button 
                                    type="submit" 
                                    className={`submit-btn ${isLoading ? 'loading' : ''}`}
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="spinner"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <span className="btn-icon">🚀</span>
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>

                            {status && (
                                <div className={`status-message ${status.includes('❌') ? 'error' : 'success'}`}>
                                    {status}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};