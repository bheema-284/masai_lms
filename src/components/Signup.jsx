import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import '../App.css';
import masai from '../assets/masai.png'
export const Signup = () =>{  
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
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
      {errorMsg && <Alert className="alert" variant="danger">{errorMsg}</Alert>}      
        <h2>Sign Up</h2>
      <label className='label1' >Full Name</label> <br /> 
        <input className="input" type="text" name="" id="" placeholder='Enter Name' onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }/> <br /><br />
        <label className='label1' >Email</label> <br /> 
        <input className="input" type="email" name="" id="" placeholder='Enter Email' onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          } /> <br /><br />
        <div className='passwordref'><label className='label1' >Password</label> 
       </div> <br />
        <input className="input" type="password" name="" id="" placeholder='Enter Password' onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          } /> <br /> <br />                                          
       <button onClick={handleSubmission} disabled={submitButtonDisabled} className='signup'>SIGN UP</button>   <br />
       
      
       <div className='df1111'><p className='aaa'>Already have an account?</p><Link className='aalink' to={`/`}><p className='login111'>Sign In</p></Link>    </div>
      </div>
      <p className='aaaa'>© 2022 by Masai School
Privacy Policy & Terms and Conditions</p>
    </div>
  );
}

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// //import InputControl from "./InputControl";
// import { auth } from "../firebase";

// //import styles from "./Signup.module.css";

// function Signup() {
//   const navigate = useNavigate();
//   const [values, setValues] = useState({
//     name: "",
//     email: "",
//     pass: "",
//   });
//   const [errorMsg, setErrorMsg] = useState("");
//   const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

//   const handleSubmission = () => {
//     if (!values.name || !values.email || !values.pass) {
//       setErrorMsg("Fill all fields");
//       return;
//     }
//     setErrorMsg("");

//     setSubmitButtonDisabled(true);
//     createUserWithEmailAndPassword(auth, values.email, values.pass)
//       .then(async (res) => {
//         setSubmitButtonDisabled(false);
//         const user = res.user;
//         await updateProfile(user, {
//           displayName: values.name,
//         });
//         navigate("/");
//       })
//       .catch((err) => {
//         setSubmitButtonDisabled(false);
//         setErrorMsg(err.message);
//       });
//   };

//   return (
//     <div className=''>
//       <div className=''>
//         <h1 className=''>Signup</h1>

//         <InputControl
//           label="Name"
//           placeholder="Enter your name"
//           onChange={(event) =>
//             setValues((prev) => ({ ...prev, name: event.target.value }))
//           }
//         />
//         <InputControl
//           label="Email"
//           placeholder="Enter email address"
//           onChange={(event) =>
//             setValues((prev) => ({ ...prev, email: event.target.value }))
//           }
//         />
//         <InputControl
//           label="Password"
//           placeholder="Enter password"
//           onChange={(event) =>
//             setValues((prev) => ({ ...prev, pass: event.target.value }))
//           }
//         />

//         <div className=''>
//           <b className=''>{errorMsg}</b>
//           <button onClick={handleSubmission} disabled={submitButtonDisabled}>
//             Signup
//           </button>
//           <p>
//             Already have an account?{" "}
//             <span>
//               <Link to="/login">Login</Link>
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;
