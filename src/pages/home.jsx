import "./Home.css";
import HireMeButton from "./HireMeButton";
import './Contact.css'

export const Home = () => {
    const introduction = {
        name: "Mwende Partias",
        career: "Cyber Security Expert",
        description: "I'm a passionate cybersecurity specialist with expertise in threat detection, network security, and vulnerability assessment. With a strong foundation in computer science and hands-on experience in ethical hacking, I'm dedicated to creating secure digital environments and protecting organizations from evolving cyber threats.",
        age: 20,
        location: "Nairobi, Kenya",
        hobby: "Drawing and Dancing",
        education: "Bachelor of Science in Cybersecurity",
        certifications: ["CompTIA Security+", "Certified Ethical Hacker (CEH)", "Cisco CCNA Security"]
    };

    const projects = [
        {
            title: "AI-Powered Threat Detection System",
            description: "Developed an intelligent system that uses machine learning algorithms to detect and mitigate sophisticated cyber threats in real-time.",
            techStack: ["Python", "TensorFlow", "Scikit-learn", "Cybersecurity"],
            liveLink: "#",
            githubLink: "#",
            icon: "🤖"
        },
        {
            title: "Network Vulnerability Scanner",
            description: "Built a comprehensive tool for scanning networks, identifying security weaknesses, and generating detailed vulnerability reports.",
            techStack: ["Kali Linux", "Wireshark", "Python", "Bash"],
            liveLink: "#",
            githubLink: "#",
            icon: "🔍"
        },
        {
            title: "Secure Authentication Protocol",
            description: "Implemented a multi-factor authentication system with biometric verification for enhanced security in enterprise applications.",
            techStack: ["Node.js", "React", "OAuth 2.0", "Biometrics"],
            liveLink: "#",
            githubLink: "#",
            icon: "🔐"
        },
        {
            title: "Incident Response Framework",
            description: "Designed and deployed a structured incident response framework for rapid detection, analysis, and containment of security breaches.",
            techStack: ["SIEM", "Splunk", "Incident Response", "Forensics"],
            liveLink: "#",
            githubLink: "#",
            icon: "🚨"
        },
        {
            title: "Security Awareness Training Platform",
            description: "Created an interactive e-learning platform to educate employees about cybersecurity best practices and threat recognition.",
            techStack: ["React", "Node.js", "MongoDB", "Cybersecurity"],
            liveLink: "#",
            githubLink: "#",
            icon: "🎓"
        },
        {
            title: "Blockchain-Based Data Integrity System",
            description: "Developed a blockchain solution to ensure data integrity and prevent tampering in critical information systems.",
            techStack: ["Blockchain", "Solidity", "Web3.js", "Cryptography"],
            liveLink: "#",
            githubLink: "#",
            icon: "⛓️"
        }
    ];

const skills = {
  "Cybersecurity": [
    "Ethical Hacking",
    "Penetration Testing",
    "Vulnerability Assessment",
    "Incident Response",
    "Digital Forensics"
  ],
  "Programming": [
    "Python",
    "JavaScript",
    "Bash Scripting",
    "SQL",
    "C++"
  ],
  "Tools & Platforms": [
    "Kali Linux",
    "Wireshark",
    "Metasploit",
    "Burp Suite",
    "Nmap",
    "Splunk"
  ],
  "Networking": [
    "TCP/IP",
    "Firewalls",
    "VPNs",
    "Network Protocols",
    "Cloud Security"
  ],
  "Web Technologies": [
    "React",
    "Node.js",
    "REST APIs",
    "OAuth",
    "HTTPS/TLS"
  ],
  "Soft Skills": [
    "Problem Solving",
    "Communication",
    "Critical Thinking",
    "Teamwork",
    "Adaptability"
  ]
};

    const stats = [
        { number: "15+", label: "Projects Completed", icon: "🚀" },
        { number: "3", label: "Certifications", icon: "🏆" },
        { number: "2", label: "Years Experience", icon: "💼" },
        { number: "10+", label: "Technologies", icon: "🛠️" }
    ];

    const tools = [
        { name: "Kali Linux", category: "Security" },
        { name: "Wireshark", category: "Network" },
        { name: "Metasploit", category: "Penetration" },
        { name: "Burp Suite", category: "Web Security" },
        { name: "Nmap", category: "Network" },
        { name: "Python", category: "Programming" },
        { name: "React", category: "Frontend" },
        { name: "Node.js", category: "Backend" },
        { name: "Docker", category: "DevOps" },
        { name: "Git", category: "Version Control" }
    ];

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background">
                    <div className="hero-grid"></div>
                </div>
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="greeting">
                            <span className="wave">👋</span> Hello, I'm
                        </div>
                        <h1>
                            <span className="name-gradient">{introduction.name}</span>
                        </h1>
                        <h2>
                            <span className="career-typing">{introduction.career}</span>
                        </h2>
                        <p>{introduction.description}</p>
                        
                        {/* Stats */}
                        <div className="stats">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-item">
                                    <div className="stat-icon">{stat.icon}</div>
                                    <div className="stat-content">
                                        <div className="stat-number">{stat.number}</div>
                                        <div className="stat-label">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="hero-buttons">
                            <HireMeButton />
                            <button className="btn secondary">
                                <span className="btn-icon">📄</span>
                                Download Resume
                            </button>
                        </div>
                    </div>
                    
                    {/* Image */}
                    <div className="hero-image">
                        <div className="image-container">
                            <div className="image-wrapper">
                                <img 
                                    src="admin.jpg" 
                                    alt="Mwende Partias - Cyber Security Expert" 
                                    className="profile-image" 
                                />
                                <div className="image-glow"></div>
                            </div>
                            <div className="floating-elements">
                                <div className="floating-element element-1">
                                    <span>🛡️</span> Security
                                </div>
                                <div className="floating-element element-2">
                                    <span>🐍</span> Python
                                </div>
                                <div className="floating-element element-3">
                                    <span>🐧</span> Kali Linux
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Scroll Indicator */}
                <div className="scroll-indicator">
                    <span>Explore More</span>
                    <div className="arrow"></div>
                </div>
            </section>

            {/* About Section */}
            <section className="about" id="about">
                <div className="container">
                    <div className="section-header">
                        <h2>About Me</h2>
                        <div className="section-divider"></div>
                        <p className="section-subtitle">Get to know more about my journey and background</p>
                    </div>
                    <div className="about-content">
                        <div className="about-text">
                            <p>I'm an 18-year-old cybersecurity enthusiast based in Nairobi, Kenya, currently pursuing my Bachelor's degree in Cybersecurity. My journey in technology began at a young age, and I've developed a deep passion for protecting digital assets and understanding how systems can be secured against threats.</p>
                            
                            <div className="about-details">
                                <div className="detail-item">
                                    <div className="detail-icon">🎂</div>
                                    <div>
                                        <strong>Age</strong>
                                        <span>{introduction.age}</span>
                                    </div>
                                </div>
                                <div className="detail-item">
                                    <div className="detail-icon">📍</div>
                                    <div>
                                        <strong>Location</strong>
                                        <span>{introduction.location}</span>
                                    </div>
                                </div>
                                <div className="detail-item">
                                    <div className="detail-icon">🎓</div>
                                    <div>
                                        <strong>Education</strong>
                                        <span>{introduction.education}</span>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="certifications">
                                <h3>Certifications</h3>
                                <div className="cert-badges">
                                    {introduction.certifications.map((cert, index) => (
                                        <div key={index} className="cert-badge">
                                            <span className="cert-icon">✅</span>
                                            {cert}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="skills" id="skills">
                <div className="container">
                    <div className="section-header">
                        <h2>Skills & Expertise</h2>
                        <div className="section-divider"></div>
                        <p className="section-subtitle">Comprehensive overview of my technical capabilities</p>
                    </div>
                    <div className="skill-container">
                        {Object.entries(skills).map(([category, skillList], index) => (
                            <div key={index} className="skilll-category">
                                <div className="cattegory-header">
                                    <h3>{category}</h3>
                                    <div className="cattegory-progress">
                                        <div className="proggress-bar">
                                            <div 
                                                className="progress-fill" 
                                                style={{ width: `${Math.min(100, 70 + index * 10)}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-list">
                                    {skillList.map((skill, skillIndex) => (
                                        <span key={skillIndex} className="skill">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tools Section */}
                    <div className="tools-section">
                        <h3>Tools & Technologies</h3>
                        <div className="tools-grid">
                            {tools.map((tool, index) => (
                                <div key={index} className="tool-item">
                                    <span className="tool-name">{tool.name}</span>
                                    <span className="tool-category">{tool.category}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects" id="projects">
                <div className="container">
                    <div className="section-header">
                        <h2>Featured Projects</h2>
                        <div className="section-divider"></div>
                        <p className="section-subtitle">A selection of my recent cybersecurity and development work</p>
                    </div>
                    <div className="project-container">
                        {projects.map((project, index) => (
                            <div key={index} className="project-card">
                                <div className="project-icon">{project.icon}</div>
                                <div className="project-header">
                                    <h3>{project.title}</h3>
                                    <div className="project-links">
                                        <a href={project.liveLink} className="project-link" title="Live Demo">
                                            <span className="link-icon">🌐</span>
                                        </a>
                                        <a href={project.githubLink} className="project-link" title="GitHub">
                                            <span className="link-icon">💻</span>
                                        </a>
                                    </div>
                                </div>
                                <p>{project.description}</p>
                                <div className="tech-stack">
                                    {project.techStack.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-item">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contacct" id="contacct">
                <div className="container">
                    <div className="section-header">
                        <h2>Get In Touch</h2>
                        <div className="section-divider"></div>
                        <p className="section-subtitle">I'm always open to discussing cybersecurity projects, opportunities, or just having a chat about technology</p>
                    </div>
                    <div className="contacct-content">
                        <div className="contacct-info">
                            <div className="contacct-item">
                                <div className="contacct-icon">📧</div>
                                <div>
                                    <h3>Email</h3>
                                    <a href="mailto:partiasmwende@gmail.com">partiasmwende@gmail.com</a>
                                </div>
                            </div>
                            <div className="contacct-item">
                                <div className="contacct-icon">📍</div>
                                <div>
                                    <h3>Location</h3>
                                    <p>Nairobi, Kenya</p>
                                </div>
                            </div>
                            <div className="contacct-item">
                                <div className="contacct-icon">💼</div>
                                <div>
                                    <h3>LinkedIn</h3>
                                    <a href="#">Connect with me</a>
                                </div>
                            </div>
                            <div className="contacct-item">
                                <div className="contacct-icon">🐙</div>
                                <div>
                                    <h3>GitHub</h3>
                                    <a href="#">View my projects</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="contacct-cta">
                            <div className="cta-content">
                                <h3>Let's Work Together</h3>
                                <p>Interested in collaborating on a cybersecurity project or need consultation for your organization's security needs?</p>
                                <button className="btn primary">
                                    <span className="btn-icon">💬</span>
                                    Start a Conversation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

          
        </div>
    );
};