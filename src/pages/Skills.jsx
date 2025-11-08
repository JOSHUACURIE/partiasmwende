import "./Skills.css";

export const Skills = () => {
    const skills = [
        { 
            id: 1, 
            name: "Cyber Security", 
            level: "Expert", 
            icon: "🛡️",
            description: "Comprehensive knowledge of security principles, threat modeling, and defense strategies",
            color: "#10b981"
        },
        { 
            id: 2, 
            name: "Penetration Testing", 
            level: "Advanced", 
            icon: "🔍",
            description: "Ethical hacking, vulnerability assessment, and security auditing",
            color: "#ef4444"
        },
        { 
            id: 3, 
            name: "Network Security", 
            level: "Advanced", 
            icon: "🌐",
            description: "Firewall configuration, intrusion detection, and network monitoring",
            color: "#3b82f6"
        },
        { 
            id: 4, 
            name: "Web Security", 
            level: "Intermediate", 
            icon: "🕸️",
            description: "OWASP top 10, secure coding practices, and web application protection",
            color: "#f59e0b"
        },
        { 
            id: 5, 
            name: "Cryptography", 
            level: "Intermediate", 
            icon: "🔐",
            description: "Encryption algorithms, digital signatures, and cryptographic protocols",
            color: "#8b5cf6"
        },
        { 
            id: 6, 
            name: "Python", 
            level: "Advanced", 
            icon: "🐍",
            description: "Security scripting, automation, and tool development",
            color: "#3776ab"
        },
        { 
            id: 7, 
            name: "Linux Security", 
            level: "Advanced", 
            icon: "🐧",
            description: "System hardening, access control, and security configuration",
            color: "#fcc624"
        },
        { 
            id: 8, 
            name: "Incident Response", 
            level: "Intermediate", 
            icon: "🚨",
            description: "Security breach management, forensic analysis, and recovery procedures",
            color: "#dc2626"
        }
   
    ];

    const skillCategories = [
        {
            name: "Technical Expertise",
            percentage: 90
        },
        {
            name: "Security Knowledge",
            percentage: 95
        },
        {
            name: "Tool Proficiency",
            percentage: 85
        },
        {
            name: "Problem Solving",
            percentage: 88
        }
    ];

    return (
        <div className="skills-container" id="skills">
            <div className="skills-header">
                <h2 className="skills-title">Technical Skills</h2>
                <div className="skills-divider"></div>
                <p className="skills-subtitle">Comprehensive cybersecurity expertise and technical capabilities</p>
            </div>

            {/* Skills Overview - Full Width */}
            <div className="skills-overview-full">
                <div className="overview-content">
                    <div className="overview-text">
                        <h3>My Technical Proficiency</h3>
                        <p>With a strong foundation in cybersecurity principles and hands-on experience in various security domains, I bring comprehensive expertise to protect digital assets and secure systems against evolving threats.</p>
                    </div>
                    <div className="categories-grid">
                        {skillCategories.map((category, index) => (
                            <div key={index} className="category-card">
                                <div className="category-progress">
                                    <div className="progress-circle">
                                        <svg width="80" height="80" viewBox="0 0 80 80">
                                            <circle cx="40" cy="40" r="35" className="progress-bg"></circle>
                                            <circle 
                                                cx="40" 
                                                cy="40" 
                                                r="35" 
                                                className="progress-fill"
                                                style={{
                                                    strokeDasharray: 220,
                                                    strokeDashoffset: 220 - (220 * category.percentage) / 100
                                                }}
                                            ></circle>
                                        </svg>
                                        <span className="percentage">{category.percentage}%</span>
                                    </div>
                                </div>
                                <h4>{category.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Skills Grid - Full Width */}
            <div className="skills-grid-full">
                <div className="grid-header">
                    <h3>Detailed Technical Skills</h3>
                    <p>Comprehensive breakdown of my cybersecurity and technical capabilities</p>
                </div>
                <div className="skills-grid">
                    {skills.map((skill) => (
                        <div 
                            key={skill.id} 
                            className="skill-card"
                            data-color={skill.color}
                        >
                            <div className="skill-icon-wrapper">
                                <div className="skill-icon">{skill.icon}</div>
                                <div className="level-indicator">{skill.level}</div>
                            </div>
                            <div className="skill-content">
                                <h4>{skill.name}</h4>
                                <p>{skill.description}</p>
                                <div className="skill-meta">
                                    <div className="skill-progress-bar">
                                        <div 
                                            className="progress-fill"
                                            style={{ 
                                                width: skill.level === 'Expert' ? '95%' : 
                                                       skill.level === 'Advanced' ? '85%' : '70%',
                                                backgroundColor: skill.color
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tools & Technologies */}
            <div className="tools-section">
                <h3>Tools & Technologies</h3>
                <div className="tools-grid">
                    <div className="tool-category">
                        <h4>Security Tools</h4>
                        <div className="tools-list">
                            <span className="tool-tag">Kali Linux</span>
                            <span className="tool-tag">Wireshark</span>
                            <span className="tool-tag">Metasploit</span>
                            <span className="tool-tag">Nmap</span>
                            <span className="tool-tag">Burp Suite</span>
                        </div>
                    </div>
                    <div className="tool-category">
                        <h4>Programming</h4>
                        <div className="tools-list">
                            <span className="tool-tag">Python</span>
                            <span className="tool-tag">JavaScript</span>
                            <span className="tool-tag">Bash</span>
                            <span className="tool-tag">SQL</span>
                            <span className="tool-tag">PowerShell</span>
                        </div>
                    </div>
                    <div className="tool-category">
                        <h4>Platforms</h4>
                        <div className="tools-list">
                            <span className="tool-tag">AWS</span>
                            <span className="tool-tag">Azure</span>
                            <span className="tool-tag">Docker</span>
                            <span className="tool-tag">Git</span>
                            <span className="tool-tag">Linux</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};