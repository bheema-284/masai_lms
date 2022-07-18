import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { Alert } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import '../App.css';
import masai from '../assets/masai.png'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
export const Referal = () =>{
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const { logIn, googleSignIn } = useUserAuth();

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        
        navigate("/dashboard");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="HomePage">
      <img className='img1' src={masai} alt="" />
      <div className='inputs'>
      {errorMsg && <Alert className="alert" variant="danger">{errorMsg}</Alert>}      
        <h2>Sign In</h2>
        <label className='label1' >Email</label> <br /> 
        <input className="input" type="email" name="" id="" placeholder='Enter Email' onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          } /> <br /><br />
        <div className='passwordref'><label className='label1' >Password</label> 
         <label className='label11' >Forgot Password?</label></div> <br />
        <input className="input" type="password" name="" id="" placeholder='Enter Password' onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          } /> <br /> <br />                                          
       <button disabled={submitButtonDisabled} onClick={handleSubmission} className='signup'>SIGN IN</button>   <br />
            <div className="google-signin">
            <GoogleButton 
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />    
          </div>            
       <div className='df1111'><p className='aaa'>Don't have an account?</p><Link className='aalink' to={`/signup`}><p className='login111'>Sign Up</p></Link>    </div>
      </div>
      <p className='aaaa'>© 2022 by Masai School
Privacy Policy & Terms and Conditions</p>
    </div>
  );
}


