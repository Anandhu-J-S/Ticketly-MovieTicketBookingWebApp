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


import "../UserLogin/UserLogin.css"
import { useForm } from "react-hook-form"
import { useContext } from 'react'
import { ThemeContext } from '../../../../Context/ThemeContext'

function UserLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  function onSubmit(data) {
    console.log(data)
  }
  const { theme } = useContext(ThemeContext);

<<<<<<< HEAD

=======
>>>>>>> 533af7a9eea3681677c1725124a27e95a51676a0
  return (
    <div>
      <div className={`user-login-bg ${theme ? "bg-color-darkmode" : "bg-color-lightmode"}`}>
        <div className="user-login-form-container">
          <div className="card user-login-form-card">
            <div className="card-head text-center"><p>Login</p></div>
            <div className="card-body">
              
              <form onSubmit={handleSubmit(onSubmit)}>
                <input type='text' 
                className='form-control login-user-field' 
                placeholder='UserName'{...register("username", { minLength: { value: 2, message: "username must be greater than 2 letter" },
                required: "Username is required" })}></input>
                {errors.username && <p className="text-center" style={{ color: "red" }}>{errors.username.message}</p>}

                <input type='password' 
                className='form-control login-pass-field' 
                placeholder='Password'{...register("password", { minLength: { value: 5, message: "Password must have more than 5 characters" }, 
                required: "Password is required" })}></input>
                {errors.password && <p className="text-center" style={{ color: "red" }}>{errors.password.message}</p>}

                <div className="d-flex justify-content-center">
                  <button type='submit' className="btn btn-primary ">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLogin

