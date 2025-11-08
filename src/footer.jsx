import "./footer.css";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/yourgithub",
            icon: "🐙",
            description: "View my projects"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/yourlinkedin",
            icon: "💼",
            description: "Connect professionally"
        },
        {
            name: "Email",
            url: "mailto:partiasmwende@gmail.com",
            icon: "📧",
            description: "Get in touch"
        },
        {
            name: "Twitter",
            url: "https://twitter.com/yourtwitter",
            icon: "🐦",
            description: "Follow updates"
        }
    ];

    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "Skills", path: "/skills" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <footer className="site-footer">
            <div className="footer-background">
                <div className="footer-grid"></div>
            </div>
            
            <div className="footer-container">
                {/* Main Footer Content */}
                <div className="footer-content">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <div className="brand-logo">
                            <span className="logo-icon">🛡️</span>
                            <span className="logo-text">Mwende Partias</span>
                        </div>
                        <p className="brand-tagline">
                            Cybersecurity Specialist dedicated to building a safer digital world
                        </p>
                        <div className="security-badge">
                            <span className="badge-icon">🔒</span>
                            <span>Securing Digital Futures</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4 className="section-title">Quick Links</h4>
                        <ul className="footer-nav">
                            {quickLinks.map((link, index) => (
                                <li key={index} className="nav-item">
                                    <a href={link.path} className="nav-link">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect Section */}
                    

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h4 className="section-title">Get In Touch</h4>
                        <div className="contact-info">
                            <div className="contact-item">
                                <span className="contact-icon">📧</span>
                                <a href="mailto:partiasmwende@gmail.com" className="contact-link">
                                    partiasmwende@gmail.com
                                </a>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📍</span>
                                <span className="contact-text">Nairobi, Kenya</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">🕒</span>
                                <span className="contact-text">Available for projects</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="footer-divider"></div>
                    <div className="bottom-content">
                        <div className="copyright">
                            <p className="copyright-text">
                                &copy; {currentYear} <span className="highlight-name">Mwende Partias</span>. All Rights Reserved.
                            </p>
                            <p className="copyright-subtext">
                                Built with passion for cybersecurity and digital protection
                            </p>
                        </div>
                        
                        <div className="footer-extra">
                            <div className="tech-stack">
                                <span className="tech-label">Secured with:</span>
                                <span className="tech-items">React • CSS3 • Modern Security Practices</span>
                            </div>
                            <div className="footer-actions">
                                <button 
                                    className="back-to-top"
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    aria-label="Scroll back to top"
                                >
                                    <span className="top-icon">↑</span>
                                    Back to Top
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};