import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";
import HireMeButton from "./pages/HireMeButton";

export const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Initialize theme from localStorage or system preference
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        
        if (savedTheme) {
            setIsDarkMode(savedTheme === "dark");
        } else {
            setIsDarkMode(systemPrefersDark);
        }
    }, []);

    // Apply theme to document
    useEffect(() => {
        const theme = isDarkMode ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo */}
                <div className="logo">
                    <span className="logo-icon">🛡️</span>
                    <span className="logo-text">Mwende Partias</span>
                </div>

                {/* Navigation */}
                <nav className={`nav ${isMobileMenuOpen ? "nav-open" : ""}`}>
                    <ul className="nav-links">
                        <li>
                            <Link to="/" onClick={closeMobileMenu}>
                                <span className="nav-icon">🏠</span>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/skills" onClick={closeMobileMenu}>
                                <span className="nav-icon">💻</span>
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={closeMobileMenu}>
                                <span className="nav-icon">📞</span>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={closeMobileMenu}>
                                <span className="nav-icon">👤</span>
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Header Actions */}
                <div className="header-actions">
                    {/* Theme Toggle */}
                  
                  

                    {/* Hire Me Button */}
                    <div className="hire-me-wrapper">
                        <HireMeButton />
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className="mobile-menu-toggle"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <span className={`hamburger-line ${isMobileMenuOpen ? "line-1" : ""}`}></span>
                        <span className={`hamburger-line ${isMobileMenuOpen ? "line-2" : ""}`}></span>
                        <span className={`hamburger-line ${isMobileMenuOpen ? "line-3" : ""}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="mobile-overlay" onClick={closeMobileMenu}></div>
            )}
        </header>
    );
};