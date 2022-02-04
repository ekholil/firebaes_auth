import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseFirebase from "../../Hooks/Usefirebase";
import "./login.css";
const Signup = () => {
  const [loginData, setLoginData] = useState({})
    const {registerUser, signInWithGoogle, user, isLoading} = UseFirebase()
    const navigate = useNavigate()
    const location = useLocation()
    const handleGoogleSignIn = () => {
      signInWithGoogle(navigate)
    }
    const handleInput = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        const newData = { ...loginData };
        newData[name] = value;
        setLoginData(newData);
        console.log(loginData)
      };
      const handleSubmit = e => {
          e.preventDefault()
        registerUser(loginData?.email, loginData?.password, loginData.name, navigate)
        console.log(user)
      }
  return (
    <div>
      <div class="login-page">
        <div onSubmit={handleSubmit} class="form">
          <form class="register-form">
            <input onChange={handleInput} type="text" placeholder="name" name='name' />
            <input onChange={handleInput} type="password" placeholder="password" name='password' />
            <input onChange={handleInput} type="text" placeholder="email address" name='email' />
            <button type="submit">{isLoading? 'Please wait...':'create'}</button>
            <p class="message">
              Already registered? <Link to='/signin'>Sign In</Link>
            </p> <br /> 
            <button onClick={handleGoogleSignIn}>Sign in with Google</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
