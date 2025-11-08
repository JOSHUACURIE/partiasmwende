import "./About.css";

export const About = () => {
    return (
        <div className="about-section">
            <div className="about-wrapper">
                <div className="about-header">
                    <h2 className="about-main-title">About Me</h2>
                    <div className="title-underline"></div>
                </div>
                
                <div className="about-layout">
                    <div className="profile-image-container">
                        <div className="image-frame">
                            <img 
                                src="admin.jpg" 
                                alt="Mwende Partias - Cybersecurity Professional" 
                                className="profile-photo" 
                            />
                            <div className="image-overlay"></div>
                        </div>
                    </div>

                    <div className="personal-bio">
                        <div className="bio-intro">
                            <p className="bio-text">
                                Hi, I'm <span className="name-emphasis">Mwende Partias</span>, a passionate 
                                <strong className="role-highlight"> Cyber Security Expert</strong> from Nairobi, Kenya. 
                                I specialize in penetration testing, network security, and ethical hacking. 
                                With a strong background in computer science and information technology, 
                                I thrive on solving complex security challenges.
                            </p>

                            <p className="bio-text">
                                Beyond cybersecurity, I enjoy drawing, dancing, and exploring new technologies. 
                                My goal is to enhance digital security and protect organizations from cyber threats.
                            </p>
                        </div>

                        <div className="expertise-section">
                            <h3 className="skills-heading">Core Competencies</h3>
                            <ul className="expertise-list">
                                <li className="expertise-item">
                                    <span className="check-mark">✅</span>
                                    Ethical Hacking & Penetration Testing
                                </li>
                                <li className="expertise-item">
                                    <span className="check-mark">✅</span>
                                    Network & Web Security
                                </li>
                                <li className="expertise-item">
                                    <span className="check-mark">✅</span>
                                    Cryptography & Data Encryption
                                </li>
                                <li className="expertise-item">
                                    <span className="check-mark">✅</span>
                                    Python & Linux Security
                                </li>
                                <li className="expertise-item">
                                    <span className="check-mark">✅</span>
                                    Incident Response & Risk Analysis
                                </li>
                            </ul>
                        </div>

                        <div className="action-buttons">
                            <button className="cta-button primary-action">
                                <span className="button-icon">📄</span>
                                Download Resume
                            </button>
                            <button className="cta-button secondary-action">
                                <span className="button-icon">💬</span>
                                Get In Touch
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};