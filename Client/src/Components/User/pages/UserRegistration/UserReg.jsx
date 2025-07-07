import "../UserRegistration/UserReg.css";
import { Link } from "react-router-dom";
import profilepic from "../../../../assets/images/def_profile.webp";
import trailer from "../../../../assets/Videos/trailer.mp4";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function UserReg() {
  const [preview, setPreview] = useState(null);
  const [showPass, setShowPass] = useState(true);
  const [showCheckPass, setShowCheckPass] = useState(true);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      contact: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      contact: Yup.string()
        .matches(/^\d{10}$/, "Contact must be 10 digits")
        .required("Contact is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm your password"),
    }),
    onSubmit: (values) => {
      alert("Form submitted successfully!");
      console.log(values);
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="user-reg-container">
      <div className="user-reg-bg-parent">
        <div className="user-reg-bg-left">
          <div className="user-reg-left-container container">
            <video
              src={trailer}
              autoPlay
              muted
              loop
              // controls
              playsInline
              className="user-reg-bg-video"
            />
            <p className="user-reg-left-container-text text-light">
              🎟️ "Your Seat to the Big Screen Awaits — Join Now!"
            </p>
          </div>
        </div>

        <div className="user-reg-bg-right">
          <div className="card user-reg-card-container">
            <div className="card-head">
              <p className="user-reg-card-title">🎉 Welcome to Ticketly — Let’s get you seated! 🍿</p>
              <p className="user-reg-card-body">
                🎬 Join now and never miss a seat! Book your favorite movies anytime, anywhere.
              </p>
            </div>

            <form onSubmit={formik.handleSubmit}>
              <div className="card-body">
                {/* Image Upload and Preview */}
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

                {/* Username */}
                <input
                  type="text"
                  placeholder="Username"
                  className="form-control user-reg-form-size"
                  {...formik.getFieldProps("username")}
                />
                {formik.touched.username && formik.errors.username && (
                  <div className="text-danger small">{formik.errors.username}</div>
                )}

                {/* Email */}
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control user-reg-form-size"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-danger small">{formik.errors.email}</div>
                )}

                {/* Contact */}
                <input
                  type="tel"
                  placeholder="Contact Number"
                  className="form-control user-reg-form-size"
                  {...formik.getFieldProps("contact")}
                />
                {formik.touched.contact && formik.errors.contact && (
                  <div className="text-danger small">{formik.errors.contact}</div>
                )}

                {/* Password */}
                <div className="position-relative">
                  <div className="d-flex justify-content-end">
                    <input
                      type={showPass ? "password" : "text"}
                      placeholder="Password"
                      className="form-control user-reg-form-size"
                      {...formik.getFieldProps("password")}
                    />
                    <FontAwesomeIcon
                      className="pass-icon-login"
                      onClick={() => setShowPass(!showPass)}
                      icon={showPass ? faEye : faEyeSlash}
                    />
                  </div>
                  {formik.touched.password && formik.errors.password && (
                    <div className="text-danger small">{formik.errors.password}</div>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="position-relative">
                  <div className="d-flex justify-content-end">
                    <input
                      type={showCheckPass ? "password" : "text"}
                      placeholder="Confirm Password"
                      className="form-control user-reg-form-size"
                      {...formik.getFieldProps("confirmPassword")}
                    />
                    <FontAwesomeIcon
                      className="pass-icon-login"
                      onClick={() => setShowCheckPass(!showCheckPass)}
                      icon={showCheckPass ? faEye : faEyeSlash}
                    />
                  </div>
                  {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                    <div className="text-danger small">{formik.errors.confirmPassword}</div>
                  )}
                </div>

                <p className="text-center">
                  Already have an account?{" "}
                  <Link className="text-dark text-decoration-none" to="/user-login">
                    <b>Login</b>
                  </Link>
                </p>

                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-lg btn-primary">
                    SignUP
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default UserReg;
