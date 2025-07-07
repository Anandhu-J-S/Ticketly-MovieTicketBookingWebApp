import "./AdminLogin.css"
function AdminLogin() {
    // const adminId = "admin";
    // const adminPassword = "password";
    return (
        <div className="admin-login-bg">
            <div className="d-flex justify-content-center align-items-center " style={{ height: "100vh" }}>
                <div className="card  w-50">
                    <div className="card-body d-flex justify-content-center">
                        <form>
                            <input type="text" style={{ width: "500px", height: "50px" }} className="form-control mb-4" placeholder="adminID"></input>
                            <input type="password" style={{ width: "500px", height: "50px" }} className="form-control mb-4" placeholder="adminPassword"></input>
                            <button className="btn btn-primary w-100">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
