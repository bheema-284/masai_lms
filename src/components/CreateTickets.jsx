import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import '../App.css';
import masai from '../assets/masai.png'
import { useUserAuth } from "../context/UserAuthContext";
import '../App.css';
export const CreateTickets = (props) => {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
   <div>
    <div className="Navbar">
      <Link className='links' to={'/dashboard'}><img className='img' src={masai} alt="" /></Link>      
      <Link className='links' to={'/lectures'}><p className='p'>Lectures</p></Link>      
      <Link className='links' to={'/assignments'}><p className='p'>Assignments</p></Link>
      <Link className='links' to={'/admin'}><p className='p'>Admin</p></Link>
      <Link className='links' to={'/tickets'}><p className='p'>Tickets</p></Link>
      <Link className='links' to={'/discussions'}><p className='p'>Discussions</p></Link>
      <Link className='links' to={'/notifications'}><p className='p'>Notifications</p></Link>
      <Link className='links' to={'/electives'}><p className='p'>Electives</p></Link>                                
      <div className='ppa'>
      <div>
    <Popup className='pppaa'
    trigger={<p className='prf'>{props.name} (Web_14)</p>}
    modal
    nested
  >   
      <div className="profile">               
        <div className="pcontent">
          <p className='paaa'> Manage Account </p>
          <Link className='plinks' to={'/user/profile'}><p className='paaaa'>Profile</p></Link>
          <p onClick={handleLogout} className='paaaa'>Log Out</p>
        </div>              
      </div>
    
  </Popup>
    </div>
      </div>
    </div>
    </div>
    <hr />
    <div className='divcc'>
    <div className="Tickets">      
      <h2 className='h22'>Create Support Ticket</h2>          
    </div>
    </div> 
    <div className='createtickts'>
    <div className='creatediv'>
    <label className='lectlable1'>CATEGORY</label><br /><br />
    <select name="" className='select1'>
            <option value="">Select</option>
            <option value="">Withdraw</option>            
            <option value="">Counciling Support (Carrer Coatch)</option>
            <option value="">Evaluation Score</option>
            <option value="">Missed Evaluation</option>
            <option value="">Missed Evaluation Recording</option>
            <option value="">Leave</option>
            <option value="">MAC</option>
            <option value="">MAC Compliants</option>
            <option value="">Product Support</option>
            <option value="">Attendance Query</option>
            <option value="">NBFC/ISA/Glide</option>
            <option value="">Curriculum Query</option>
            <option value="">IA Suport</option>
            <option value="">Electives</option>
            <option value="">Referal</option>
            <option value="">Course Change</option>            
            </select><br /><br />
          <label className='lectlable1'>TITLE</label><br /><br />
          <input className='cteateinpt' type="text" name="" id="" /> <br /><br />
          <label className='lectlable1'>MESSAGE</label><br /><br />
          <div className='createaa'><p className='createaa1'>Write</p> <p className='createaa2'>Preview</p><p className='createaa3'>Help</p></div>
          <textarea placeholder="Type '/' for commands" name="" id="" cols="110" rows="15"></textarea>
    </div>
   <div className='btnsasa'> <button className='btns'>CREATE TICKET</button></div>
    </div>     
    </>
  );
}


