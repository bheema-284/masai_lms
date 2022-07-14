import { Link } from 'react-router-dom';
import '../App.css';
import masai from '../assets/masai.png'
export const HomePage = () =>{
  return (
    <div className="HomePage">
      <img className='img1' src={masai} alt="" />
      <div className='inputs'>
        <label className='label1' >Email</label> <br /> 
        <input type="email" name="" id="" /> <br /><br />
        <label className='label1' >Password</label> <br />
        <input type="password" name="" id="" /> <br /> <br />
        <div className='df1'>
          <label className='label'>
          <input className='inp' type="checkbox" /> Remember me
        </label> </div>
                     
                                       
                      
       <div className='df'><p className='aa'>Forgot your password?</p><Link to={`/dashboard`}><button className='login'>LOG IN</button></Link>    </div>
      </div>
    </div>
  );
}


