import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseFirebase from "../../Hooks/Usefirebase";
import "./login.css";
const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { logIn, signInWithGoogle, user, isLoading } = UseFirebase();
  const navigate = useNavigate();
  const location = useLocation();
  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const newData = { ...loginData };
    newData[name] = value;
    setLoginData(newData);
    console.log(loginData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(loginData?.email, loginData?.password, location, navigate);
    console.log(user);
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle( navigate);
  };
  return (
    <div>
      <div class="login-page">
        <div class="form">
          <form onSubmit={handleSubmit} class="login-form">
            <input onChange={handleInput} type="text" name="email" placeholder="Email" />
            <input onChange={handleInput} type="password" name="password" placeholder="password" />
            <button type="submit">{isLoading?'Please Wait...':'login'}</button>
            <p class="message">
              Not registered? <Link to='/signup'>Create an account</Link>
            </p> <br />
            <button onClick={handleGoogleSignIn}>Sign in with Google</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
