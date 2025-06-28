import "../PublicNavbar/PublicNavbar.css"
import { Link } from 'react-router-dom'

function PublicNavbar() {
    return (
        <nav className="navbar navbar-expand-sm custom-navbar">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">🎟️ Ticketly</Link>
                <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="mynavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/movies">Movies</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>

                </div>
                <Link to="/login">
                    <button className='btn custom-login-btn'>Login</button>
                </Link>
            </div>
        </nav>
    )
}

export default PublicNavbar