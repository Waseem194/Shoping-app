import React from 'react'
import {useForm} from "react-hook-form";
import "./Register.css"
const Register = () => {
    let {register,formState:{errors}}=useForm();
 

return<div id="login-box">
<form>
<div className="left-box">

<h1> Register </h1>
<input   {...register('userName',{required:true})} type="text" name="userName" placeholder="userName" />
{errors.userName ? <div className='error'> Please enter your name </div> : null}

<input   {...register('email',{required:true,validate:function(typedValue) {
  if(typedValue.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/  
  )){
    return true;
  }else{
    return false;
  }
}})} type="text" name="email" placeholder="Email" required="" />
{errors.email ? <div className='error'> Please enter your email </div> : null}

<input   {...register('password',{required:true,minLength:3})} type="password" name="password" placeholder="Password" required="" />
{errors.password && errors.password.type ==  "required" ? <div className='error'> Please enter your password </div> : null}
{errors.password && errors.password.type == "minLength" ? <div className='error'> Password must be atleast 8 characters </div> : null}

<input   {...register('password1',{required:true,minLength:3})} type="password" name="password1" placeholder="Retype Password" />
{errors.password && errors.password.type ==  "required" ? <div className='error'> Please enter your password </div> : null}
{errors.password && errors.password.type == "minLength" ? <div className='error'> Password must be atleast 8 characters </div> : null}
<input multiple id="file" type="file"  {...register('pic')}  />
<input type="submit" name="singup-button" placeholder="Sing Up" />


</div>
</form>
<div className="right-box">
<span className="signinwith">
  Sign in with
  <br />
  Social Network{" "}
</span>
<button className="social facebook">Log in with Facebook</button>
<button className="social twitter">Log in with Twitter</button>
<button className="social google">Log in with Google+</button>
</div>

<div className="or">OR</div>

</div>

}


export default Register;











