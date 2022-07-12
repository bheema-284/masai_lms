import '../App.css';
import masai from '../assets/masai.png'
export const HomePage = () =>{
  return (
    <div className="HomePage">
      <img className='img' src={masai} alt="" />
      <div className='inputs'>
        <label className='lab' htmlFor="">Email</label> <br /> 
        <input type="text" name="" id="" /> <br /><br />
        <label className='lab' htmlFor="">Password</label> <br />
        <input type="text" name="" id="" /> <br /><br />
        <div className='df1'><input className='checkbox' type="checkbox" name="" id="" /> <p className='1'>Remember me</p></div>
         
       <div className='df'><p>Forgot your password?</p><button>LOG IN</button></div>
      </div>
    </div>
  );
}


