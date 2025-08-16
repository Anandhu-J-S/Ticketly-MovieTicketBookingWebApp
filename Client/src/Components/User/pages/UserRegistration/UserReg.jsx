import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import "./UserReg.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Base_URl } from "../../../../BaseUrl/BaseUrl";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

function UserReg() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()

  const [profilePreview, setProfilePreview] = useState(null);
  const [profilePicError, setProfilePicError] = useState("");

  const fileInputRef = useRef(null); // ref for file input

  const onSubmit = async (data) => {
    // Manual file validation using ref
    const files = fileInputRef.current?.files;
    if (!files || files.length === 0) {
      setProfilePicError("Profile picture is required");
      return;
    }
    setProfilePicError("");

    try {
      const formData = new FormData();
      formData.append("username", data.username);
      formData.append("email", data.email);
      formData.append("contact", data.contact);
      formData.append("password", data.password);
      formData.append("role", "user");
      formData.append("profilePic", files[0]);

      const response = await axios.post(`${Base_URl}user/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      toast.success(response.data.message);
      navigate("/user-login")
    } catch (err) {
      console.log(err);
    }
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setProfilePreview(URL.createObjectURL(files[0]));
      setProfilePicError(""); // clear error on new selection
    }
  };

  return (
    <div className="user-reg-bg">
      <div className="user-reg-form-container">
        <div className="user-reg-form-card">
          <h2 className="reg-title">Create Account</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="reg-form">
            {/* Profile Picture Upload */}
            <div className="profile-pic-upload">
              <label htmlFor="profilePicInput" style={{ cursor: "pointer" }}>
                {profilePreview ? (
                  <img
                    src={profilePreview}
                    alt="Profile Preview"
                    className="profile-preview"
                  />
                ) : (
                  <div className="upload-placeholder">Upload Profile Picture</div>
                )}
              </label>

              <input
                id="profilePicInput"
                type="file"
                accept="image/*"
                hidden
                ref={fileInputRef} // use ref instead of register
                onChange={handleImageChange}
              />
              {/* Show manual validation error */}
              {profilePicError && <p className="error-text">{profilePicError}</p>}
            </div>

            {/* Username */}
            <input
              type="text"
              placeholder="Username"
              className="reg-input"
              {...register("username", {
                required: "Username is required",
                minLength: { value: 2, message: "Minimum 2 characters required" },
              })}
            />
            {errors.username && (
              <p className="error-text">{errors.username.message}</p>
            )}

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="reg-input"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && <p className="error-text">{errors.email.message}</p>}

            {/* Contact Number */}
            <input
              type="tel"
              placeholder="Contact Number"
              className="reg-input"
              {...register("contact", {
                required: "Contact number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Contact number must be exactly 10 digits",
                },
              })}
            />
            {errors.contact && <p className="error-text">{errors.contact.message}</p>}

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="reg-input"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 5, message: "Minimum 5 characters" },
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{5,}$/,
                  message:
                    "Must include at least one uppercase and one special character",
                },
              })}
            />
            {errors.password && (
              <p className="error-text">{errors.password.message}</p>
            )}

            {/* Confirm Password */}
            <input
              type="password"
              placeholder="Confirm Password"
              className="reg-input"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <p className="error-text">{errors.confirmPassword.message}</p>
            )}

            <button type="submit" className="reg-button">
              Register
            </button>
          </form>

          <div className="register-footer">
            <p className="text-light">
              Already have an Account?{" "}
              <Link className="register-link" to="/user-login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserReg;
