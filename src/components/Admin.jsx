import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import '../App.css';
import masai from '../assets/masai.png'
import { useUserAuth } from "../context/UserAuthContext";
import '../App.css';
export const Admin = (props) => {   
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
    <div className='adminspage'>
    <div>
    <Popup
    trigger={<button className="btns"> Create Lectures </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Create Lectures </div>
        <div className="content">
          <label className='lectlable'>Lecture Name</label><br />
          <input className='input' type="text" name="" id="" /> <br />
          <label className='lectlable'>Instructor Name</label><br />
          <input className='input' type="text" name="" id="" /> <br />          
          <label className='lectlable'>Date</label><br />
          <input className='input' type="date" name="" id="" /> <br />
          <label className='lectlable'>Time</label><br />
          <input className='input' type="time" name="" id="" /> <br />
        </div>
        <div className="actions">          
          <button
            className="btns"
            onClick={() => {
              console.log('modal created ');
              close();
            }}
          >
            Create 
          </button>
        </div>
      </div>
    )}
  </Popup>
    </div>
    <div>
    <Popup
    trigger={<button className="btns"> Create Assignments </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Create Assignments </div>
        <div className="content">
          <label className='lectlable'>Assignment Name</label><br />
          <input className='input' type="text" name="" id="" /> <br />
          <label className='lectlable'>Instructor Name</label><br />
          <input className='input' type="text" name="" id="" /> <br />
          <label className='lectlable'>Stream</label><br />
          <select name="" className='select'>
          <option value="">select</option>
            <option value="">FULL_STACK</option>
            <option value="">FRONTEND</option>
            <option value="">BACKEND</option>
            <option value="">OJ</option>
            </select><br />
          <label className='lectlable'>Date</label><br />
          <input className='input' type="date" name="" id="" /> <br />
          <label className='lectlable'>Time</label><br />
          <input className='input' type="time" name="" id="" /> <br />
        </div>
        <div className="actions">          
          <button
            className="btns"
            onClick={() => {
              console.log('modal created ');
              close();
            }}
          >
            Create 
          </button>
        </div>
      </div>
    )}
  </Popup>
    </div>
    </div>
    </>
  );
}


