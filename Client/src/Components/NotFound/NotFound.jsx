import "../NotFound/NotFound.css"
import logo from "../../assets/images/logo.webp"
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="not-found-body">

      {/* not-found-card-session */}


      <div className='flex-grow-1 d-flex justify-content-center align-items-center min-vh-100 flex-column'>
        <div className="card rounded-5 not-found-card w-50">
          <div className="card-body ">
            <p className='text-center not-found-card-text-head'>404</p>
            <hr className="text-light"></hr>
            <p className='text-center not-found-card-text-para'>Page Not Found</p>
            <p className='text-center not-found-card-text-para-two'>Oops! The page you're looking for doesn't exist or has been removed.</p>
            <div className="d-flex justify-content-evenly">
              <div className="not-found-left">
                <div className="card rounded-5 not-found-sub-cards p-3 not-found-card">
                  <img className="m-auto not-found-logo" src={logo} />
                  <p className=" not-found-card-text-para-two">The show can't go on without this page. <br></br>Please contact our admin team for assistance.</p>
                </div>
              </div>
              <div className="not-found-right">
                <div className="card rounded-5 p-3 not-found-card not-found-sub-cards">
                  <p className=" m-auto not-found-card-text-para-two text-center"><b>Contact Admin</b><br></br><br></br>
                    support@ticketly.com<br></br>
                    +1 (555) 123-4567<br></br>
                    Live Chat (9AM - 10PM)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-footer m-auto border-0">
            <Link to="/"> <button className="btn btn-danger mt-3 mb-3">Back to Box Office</button></Link>
          </div>
        </div>

      </div>
      {/* not-found-footer-session */}
      <div className="not-found-footer text-center py-3">
        <p className="text-light">&copy;All Rights Reserved. @AnandhuJS</p>
      </div>




    </div>
  )
}

export default NotFound
