import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import '../App.css';
import masai from '../assets/masai.png'
import { useUserAuth } from "../context/UserAuthContext";
import '../App.css';
export const Shedule = (props) => {
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
    <div className="Shedule">      
      <h2 className='h2'>Today's Shedule</h2>
      <div className='btnss'>
        <Link to={`/bookmarks`}><h2><button className='btns'>BOOKMARKS</button></h2></Link>
        <Link to={`/login`}><h2><button className='btns'>REFER & EARN</button></h2></Link>
        </div>
    </div>
    </div>
    <div className='shedules'>
<div className='all-lects'>
    <div className='lects'>
        <h4>9:00 AM </h4>
        <h4>LECTURE</h4>
    </div>
    <div className='detls'>
        <h3 className='h3'>Scrum 13.07.2022</h3>
        <p><strong>Bheema G</strong>  Starting at  <strong>9:00 AM</strong></p>
        <div className='btnsdiv'><button className='dbtns'>scrum</button> <button className='dbtnss'>live</button></div>
    </div>
    <div className='details'>Details </div>
</div>
<hr />
<div className='all-lects'>
    <div className='lects'>
        <h4>12:00 PM </h4>
        <h4>LECTURE</h4>
    </div>
    <div className='detlss'>
        <h3 className='h3'>Thrive Regular Standup [week 4]</h3>
        <p><strong>Bheema Guguloth</strong>  Starting at  <strong>12:00 PM</strong></p>
        <div className='btnsdivs'><button className='dbtns'>scrum</button> <button className='dbtnss'>live</button></div>
    </div>
    <div className='details'>Details </div>
</div>
    </div>
    </>
  );
}


