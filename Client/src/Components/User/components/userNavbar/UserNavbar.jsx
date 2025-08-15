import { Link } from "react-router-dom"

function UserNavbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" href="javascript:void(0)">🎟️ Ticketly</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="mynavbar">
                      <div>
                          <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0)">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0)">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0)">Link</a>
                            </li>
                        </ul>
                      </div>
                      <div>
                    <p className="text-light mt-2">Welcome user</p>
                      </div>
                      
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default UserNavbar
