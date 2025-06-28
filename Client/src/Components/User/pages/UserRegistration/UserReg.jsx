import "../UserRegistration/UserReg.css"
import { Link } from "react-router-dom"
import profilepic from "../../../../assets/images/def_profile.webp";
import { useState } from "react";
import trailer from "../../../../assets/Videos/trailer.mp4"

function UserReg() {
  const [preview, setPreview] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };
  return (
    <div>

      <div className="user-reg-container">
        <div className="user-reg-bg-parent ">
          <div className="user-reg-bg-left">
            <div className="user-reg-left-container">
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
            <div className="card user-reg-card-container">
              <div className="card-head">
                <p className="user-reg-card-title">Welcome to Ticketly..👋😄</p>
                <p className="user-reg-card-body">🎬 Join now and never miss a seat! Book your favorite movies anytime, anywhere.</p>
              </div>
              <div className="card-body">
                {/* img upload and preview */}
                <div className="d-flex justify-content-center mb-3">
                  <label htmlFor="profile-upload" className="profile-upload-circle">
                    <img
                      title="profile picture"
                      src={preview || profilepic}
                      alt="Profile Preview"
                      className="user-reg-profile-preview"
                    />
                  </label>
                  <input
                    type="file"
                    id="profile-upload"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="d-none"
                  />
                </div>
                {/* img upload and preview ends..*/}

                <input type="text" placeholder="username" className="form-control user-reg-form-size" />

                <input type="email" placeholder="email" className="form-control user-reg-form-size" />


                <input type="tel" placeholder="contact number" className="form-control user-reg-form-size" />

                <input type="password" placeholder="password" className="form-control user-reg-form-size" />

                <input type="password" placeholder="confirm-password" className="form-control user-reg-form-size" />

                <p className="text-center">Already have an account ? <Link to="/user-login">Login</Link></p>

                <div className="d-flex justify-content-center">

                  <button className="btn btn-lg btn-primary">SignUP</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserReg
