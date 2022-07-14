import { Link } from 'react-router-dom';
import '../App.css';
import masai from '../assets/masai.png'
export const Referal = () =>{
  return (
    <div className="HomePage">
      <img className='img1' src={masai} alt="" />
      <div className='inputs'>
        <label className='label1' >Email</label> <br /> 
        <input type="email" name="" id="" placeholder='Enter Email' /> <br /><br />
        <div className='passwordref'><label className='label1' >Password</label> 
         <label className='label11' >Forgot Password?</label></div> <br />
        <input type="password" name="" id="" placeholder='Enter Password' /> <br /> <br />                                          
       <Link to={`/login`}><button className='login1'>SIGN IN</button></Link>   <br />
       <Link to={`/login`}><button className='login11'>CONTINUE WITH GOOGLE</button></Link> 

       <div className='df1111'><p className='aaa'>Don't have an account?</p><Link className='aalink' to={`/signup`}><p className='login111'>Sign Up</p></Link>    </div>
      </div>
      <p className='aaaa'>© 2022 by Masai School
Privacy Policy & Terms and Conditions</p>
    </div>
  );
}


