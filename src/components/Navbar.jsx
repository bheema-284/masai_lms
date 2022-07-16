import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import '../App.css';
import masai from '../assets/masai.png'
import { useUserAuth } from "../context/UserAuthContext";
export const Navbar = () => {
  const { logOut ,user} = useUserAuth();
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
    trigger={<p className='p'>{user && user.email}</p>}
    modal
    nested
  >   
      <div className="profile">               
        <div className="pcontent">
          <p className='paaa'> Manage Account </p>
          <p className='paaaa'>Profile</p>
          <p onClick={handleLogout} className='paaaa'>Log Out</p>
        </div>              
      </div>
    
  </Popup>
    </div>
      </div>
    </div>
  );
}
