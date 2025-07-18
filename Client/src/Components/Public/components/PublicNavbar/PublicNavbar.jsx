import "../PublicNavbar/PublicNavbar.css"
import { Link } from 'react-router-dom'
import React, { useEffect} from "react";
import Switch from "react-switch";
import { useContext } from "react";
import { ThemeContext } from "../../../../Context/ThemeContext";
function PublicNavbar() {
    // const [theme, setTheme] = useState(() => {
    //     // Get saved theme on first render
    //     const saved = localStorage.getItem("Theme");
    //      return saved !== null ? saved === "true" : true;  
    // });
     const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        localStorage.setItem("Theme", theme)

    })

    const handleChange = (nextChecked) => {
        setTheme(nextChecked);

    };

    const bgClass = theme ? "bg-color-darkmode" : "bg-color-lightmode";
    const textClass = theme ? "text-color-darkmode" : "text-color-lightmode";

    const iconStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: 13,
        fontWeight: "bold",
        color: "white",
        paddingRight: 2,
        paddingLeft: 2,
    };

    return (
        <nav className={`navbar navbar-expand-sm custom-navbar ${bgClass} `}>
            <div className="container-fluid align-items-center">
                <Link className={`navbar-brand ${textClass}`} to="/"><p className={`${textClass} mt-3`}>🎟️ Ticketly</p></Link>

                <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="mynavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/"><p className={`${textClass} mt-3`}>Home</p></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/movies"><p className={`${textClass} mt-3`}>Here</p></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact"><p className={`${textClass} mt-3 `}>Contact</p></Link>
                        </li>
                    </ul>
                </div>

                <div className="d-flex align-items-center gap-3">
                    {/* Toggle Switch */}
                    <Switch
                        onChange={handleChange}
                        checked={theme}
                        onColor="#2c3e50"
                        offColor="#ecf0f1"
                        onHandleColor="#f1c40f"
                        offHandleColor="#2c3e50"
                        handleDiameter={28}
                        uncheckedIcon={
                            <div style={{ ...iconStyle, color: "#2c3e50" }}>☀️</div>
                        }
                        checkedIcon={
                            <div style={{ ...iconStyle }}>🌙</div>
                        }
                        height={24}
                        width={60}
                    />

                    {/* Login Button */}
                    <Link to="/user-login">
                        <button className='btn custom-login-btn'>Login</button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default PublicNavbar;
