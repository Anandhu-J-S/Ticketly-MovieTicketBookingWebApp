import './UserLogin.css'; // Make sure this path is correct
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { ThemeContext } from '../../../../Context/ThemeContext';
import { Link } from 'react-router-dom';
import { Base_URl } from '../../../../BaseUrl/BaseUrl';
import axios from 'axios';
import { toast } from 'react-toastify';

function UserLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { theme } = useContext(ThemeContext);

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 533af7a9eea3681677c1725124a27e95a51676a0
=======
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${Base_URl}user/login`, data); // Sending plain JSON, not FormData


      const { token, message } = response.data;
      console.log("token", response.data.token)
      toast.success(message || 'Login successful!');

      // Optionally store token in localStorage for later use
      localStorage.setItem('token', token);

      // Optionally redirect to dashboard or home
      // navigate('/dashboard'); // if using react-router
    } catch (err) {
      console.error(err);
      const errorMessage = err.response?.data?.message || 'Login failed. Please try again.';
      toast.error(errorMessage);
    }
  };

>>>>>>> 2b569124348b8bc48bf1b4affa3c1502d10f467e
  return (
    <div className={`user-login-bg ${theme ? 'bg-dark' : 'bg-light'}`}>
      <div className="user-login-form-container">
        <div className="user-login-form-card">
          <h2 className="login-title">Welcome Back</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <input
              type="text"
              className="login-input"
              placeholder="Username"
              {...register('username', {
                required: 'Username is required',
                minLength: { value: 2, message: 'Username must be at least 2 characters' },
              })}
            />
            {errors.username && <p className="error-text">{errors.username.message}</p>}

            <input
              type="password"
              className="login-input"
              placeholder="Password"
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 5, message: 'Password must be at least 5 characters' },
              })}
            />
            {errors.password && <p className="error-text">{errors.password.message}</p>}

            <button type="submit" className="login-button">Login</button>
          </form>

          <div className="login-footer">
            <p className="text-light">
              Don&apos;t have an account?{' '}
              <Link className="login-link" to="/user-register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
