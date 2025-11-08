import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./header";
import { Home } from "./pages/home";
import { Skills } from "./pages/Skills";
import { Contact } from "./pages/contact";
import { About } from "./pages/about";

import { Footer } from "./footer";
function App() {
    // Check stored theme or use light theme by default
    // Function to toggle theme
   

    return (
        <Router>
            <Header  />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
