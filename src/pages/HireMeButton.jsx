import { useNavigate } from "react-router-dom";

const HireMeButton = () => {
    const navigate = useNavigate();

    return (
        <button className="btn primary" onClick={() => navigate("/contact")}>
            Hire Me
        </button>
    );
};

export default HireMeButton;
