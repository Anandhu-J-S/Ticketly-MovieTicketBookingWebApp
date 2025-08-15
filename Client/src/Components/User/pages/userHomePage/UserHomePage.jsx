import "../userHomePage/UserHomePage.css"

function UserHomePage() {
    return (
        <div className="user-home-page">
            {/* user home page search bar */}
            <div className="container">
                <form class="d-flex">
                    <input class="form-control me-2" type="text" placeholder="Search" />
                    <button class="btn btn-primary" type="button">Search</button>
                </form>
            </div>

            {/* now showing movies */}
            <div>
                <h3 className="text-light mt-5">Now Showing</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="card">
                                <div className="card-head">head</div>
                                <div className="card-body">body</div>
                                <div className="card-footer">footer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserHomePage
