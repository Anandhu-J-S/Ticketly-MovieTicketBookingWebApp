// import "../UserLogin/UserLogin.css"
// import trailer from "../../../../assets/Videos/trailer.mp4"
// import { Link } from "react-router-dom"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import { useState } from "react";
// import { useFormik } from "formik";
// import { basicSchema } from "../../../../FormValidationSchema/Schema";

// function UserLogin() {
//   const [showPass, setShowPass] = useState(true)

//   const togglePass = () => {
//     setShowPass(!showPass)
//   }


//   const onSubmit = () => {
//     console.log("Logged in")
//   }

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: ""
//     },
//     validationSchema: basicSchema,
//     onSubmit,
//   });


//   //console errors using formik
//   console.log(formik.errors)

//   return (
//     <div>
//       <div className="user-reg-container">
//         <div className="user-reg-bg-parent ">
//           <div className="user-reg-bg-left">
//             <div className="user-reg-left-container container">
//               <video
//                 src={trailer}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 className="user-reg-bg-video"
//               />

//               <p className="user-reg-left-container-text text-light">🎟️ "Your Seat to the Big Screen Awaits — Join Now!"</p>
//             </div>
//           </div>
//           <div className="user-reg-bg-right">
//             <div className="card user-login-card-container">
//               <div className="card-head">
//                 <p className="user-reg-card-title">Welcome Back to Ticketly..👋😄</p>
//                 <p className="user-reg-card-body">🍿 Ready to continue the show? Log in and grab your seat!</p>
//               </div>
//               <div className="card-body">

//                 <form onSubmit={formik.handleSubmit}>
//                   <input
//                     type="email"
//                     placeholder="email"
//                     id="email"
//                     value={formik.values.email}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     className={`form-control user-reg-form-size ${formik.errors.email ? "input-err" : ""}`}
//                   />



//                   <div className="pass-icon-parent">
//                     <div className="d-flex justify-content-end">
//                       <input type={showPass ? "password" : "text"}
//                         placeholder="password"
//                         id="password"
//                         value={formik.values.password}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         className="form-control user-reg-form-size" />
//                       <FontAwesomeIcon className="pass-icon-login" onClick={togglePass} icon={showPass ? faEye : faEyeSlash} />
//                     </div>
//                   </div>



//                   <p className="text-center">Don&apos;t have an account ? <Link className="text-dark text-decoration-none" to="/user-register"><b>Signup</b></Link></p>

//                   <div className="d-flex justify-content-center">

//                     <button className="btn btn-lg btn-primary">Login</button>
//                   </div>
//                 </form>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default UserLogin

import React from 'react'

function UserLogin() {
  return (
    <div>
      get a better login
    </div>
  )
}

export default UserLogin

