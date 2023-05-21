import React from 'react';
import {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';
import "./Login.css";
const Login = () => {
  let {register} = useForm();
  return (
    
    <form className='form'>
      <div className="header">Login</div>
    <div className="inputs">
      <input   {...register('email')} placeholder="Email" className="input" type="text" />
      <input   {...register('password')} placeholder="Password" className="input" type="password" />
      <div className="checkbox-container">
        <label className="checkbox">
          <input type="checkbox" id="checkbox" />
        </label>
        <label htmlFor="checkbox" className="checkbox-text">
          Remember me
        </label>
      </div>
      <button className="sigin-btn">Submit</button>
      <a className="forget" href="#">
        Forget password ?
      </a>
      <p className="signup-link">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  </form>
  
  
  
  )
}

export default Login;
