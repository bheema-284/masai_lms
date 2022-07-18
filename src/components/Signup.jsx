import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { Alert } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import '../App.css';
import masai from '../assets/masai.png'
export const Signup = () =>{  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");  
  const { signUp } = useUserAuth();
  let navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="HomePage">
      <img className='img1' src={masai} alt="" />
      <div className='inputs'>
      {error && <Alert className="alert" variant="danger">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
      <label className='label1' >Full Name</label> <br /> 
        <input className="input" type="text" name="" id="" placeholder='Enter Name' /> <br /><br />
        <label className='label1' >Email</label> <br /> 
        <input className="input" type="email" name="" id="" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} /> <br /><br />
        <div className='passwordref'><label className='label1' >Password</label> 
       </div> <br />
        <input className="input" type="password" name="" id="" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} /> <br /> <br />                                          
       <button type="Submit" className='signup'>SIGN UP</button>   <br />
       
       </form>
       <div className='df1111'><p className='aaa'>Already have an account?</p><Link className='aalink' to={`/`}><p className='login111'>Sign In</p></Link>    </div>
      </div>
      <p className='aaaa'>© 2022 by Masai School
Privacy Policy & Terms and Conditions</p>
    </div>
  );
}
