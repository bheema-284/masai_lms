import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import '../App.css';
import masai from '../assets/masai.png'
export const HomePage = () =>{
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

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
  return (
    <div className="HomePage">
      <img className='img1' src={masai} alt="" />
      <div className='inputs'>
      {errorMsg &&<Alert className="alert" variant="danger">{errorMsg}</Alert>}
      
        <label className='label1' >Email</label> <br /> 
        <input className="input" type="email" name="email" id=""  onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          } /> <br /><br />
        <label className='label1' >Password</label> <br />
        <input className="input" type="password" name="" id="" onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          } /> <br /> <br />
        <div className='df1'>
          <label className='label'>
          <input className='inp' type="checkbox" /> Remember me
        </label> </div>                                                                          
       <div className='df'><p className='aa'>Forgot your password?</p><button disabled={submitButtonDisabled} onClick={handleSubmission} className='login'>LOG IN</button></div>
       <div className='df1111'><p className='aaa'>Don't have an account?</p><Link className='aalink' to={`/signup`}><p className='login111'>Sign Up</p></Link>    </div>
      </div>
    </div>
  );
}

