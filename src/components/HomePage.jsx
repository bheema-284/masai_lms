import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import '../App.css';
import masai from '../assets/masai.png'
export const HomePage = () =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/dashboard");
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
        <label className='label1' >Email</label> <br /> 
        <input className="input" type="email" name="email" id="" onChange={(e) => setEmail(e.target.value)} /> <br /><br />
        <label className='label1' >Password</label> <br />
        <input className="input" type="password" name="" id="" onChange={(e) => setPassword(e.target.value)} /> <br /> <br />
        <div className='df1'>
          <label className='label'>
          <input className='inp' type="checkbox" /> Remember me
        </label> </div>                                                                          
       <div className='df'><p className='aa'>Forgot your password?</p><button type="Submit" className='login'>LOG IN</button></div>
       </form>
       <div className='df1111'><p className='aaa'>Don't have an account?</p><Link className='aalink' to={`/signup`}><p className='login111'>Sign Up</p></Link>    </div>
      </div>
    </div>
  );
}

