import "../UserLogin/UserLogin.css"
import trailer from "../../../../assets/Videos/trailer.mp4"
import { Link } from "react-router-dom"
function UserLogin() {
  return (
    <div>
      <div className="user-reg-container">
        <div className="user-reg-bg-parent ">
          <div className="user-reg-bg-left">
            <div className="user-reg-left-container container">
              <video
                src={trailer}
                autoPlay
                muted
                loop
                playsInline
                className="user-reg-bg-video"
              />

              <p className="user-reg-left-container-text">🎟️ "Your Seat to the Big Screen Awaits — Join Now!"</p>
            </div>
          </div>
          <div className="user-reg-bg-right">
            <div className="card user-login-card-container">
              <div className="card-head">
                <p className="user-reg-card-title">Welcome Back to Ticketly..👋😄</p>
                <p className="user-reg-card-body">🎬 Join now and never miss a seat! Book your favorite movies anytime, anywhere.</p>
              </div>
              <div className="card-body">

                <input type="email" placeholder="email" className="form-control user-reg-form-size" />

                <input type="password" placeholder="password" className="form-control user-reg-form-size" />

                <p className="text-center">Don&apos;t have an account ? <Link to="/user-register">Signup</Link></p>

                <div className="d-flex justify-content-center">

                  <button className="btn btn-lg btn-primary">Login</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLogin
