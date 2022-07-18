import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import '../App.css';
import masai from '../assets/masai.png'
import { useUserAuth } from "../context/UserAuthContext";
import '../App.css';
export const Lectures = (props) => {
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
    <div className="Lectures">      
      <h2 className='h22'>Lectures</h2>      
    </div>
    </div>
    <div className='lecturs'>
    <div className='Lecturess'>
<div className='all-lect'>    
    <div className='detls'>
        <h3 className='h3'>Scrum 13.07.2022</h3>
        <p><strong>Bheema G</strong>  Scheduled  <strong>Scrum</strong> at 13 Jul, 22 - 9:00 am <button className='live'>live</button></p>        
    </div>
    <div className='details'><button className='dbtnsp'>Present</button>  </div>
</div>
<hr />
<div className='all-lect'>    
    <div className='detls'>
        <h3 className='h3'>Thrive Regular Standup [week 4]</h3>
        <p><strong>Bheema Guguloth</strong>  Scheduled  <strong>Coding</strong> at 13 Jul, 22 - 12:00 pm <button className='live'>live</button></p>
        
    </div>
    <div className='details'><button className='dbtnsa'>Absent</button>  </div>
</div>
<hr />
<div className='all-lect'>    
    <div className='detls'>
        <h3 className='h3'>Scrum 12.07.2022</h3>
        <p><strong>Bheema G</strong>  Scheduled  <strong>Scrum</strong> at 12 Jul, 22 - 9:00 am <button className='live'>live</button></p>        
    </div>
    <div className='details'><button className='dbtnsp'>Present</button>  </div>
</div>
<hr />
<div className='all-lect'>    
    <div className='detls'>
        <h3 className='h3'>Thrive Regular Standup [week 4]</h3>
        <p><strong>Bheema Guguloth</strong>  Scheduled  <strong>Coding</strong> at 11 Jul, 22 - 12:00 pm <button className='live'>live</button></p>
        
    </div>
    <div className='details'><button className='dbtnsp'>Present</button>  </div>
</div>
<hr />
<div className='all-lect'>    
    <div className='detls'>
        <h3 className='h3'>Scrum 09.07.2022</h3>
        <p><strong>Bheema G</strong>  Scheduled  <strong>Scrum</strong> at 09 Jul, 22 - 9:00 am <button className='live'>live</button></p>        
    </div>
    <div className='details'><button className='dbtnsp'>Present</button>  </div>
</div>
<hr />
<div className='all-lect'>    
    <div className='detls'>
        <h3 className='h3'>Scrum 08.07.2022</h3>
        <p><strong>Bheema G</strong>  Scheduled  <strong>Scrum</strong> at 08 Jul, 22 - 9:00 am <button className='live'>live</button></p>        
    </div>
    <div className='details'><button className='dbtnsp'>Present</button>  </div>
</div>
<hr />
<div className='all-lect'>    
    <div className='detls'>
        <h3 className='h3'>Scrum 07.07.2022</h3>
        <p><strong>Bheema G</strong>  Scheduled  <strong>Scrum</strong> at 07 Jul, 22 - 9:00 am <button className='live'>live</button></p>        
    </div>
    <div className='details'><button className='dbtnsp'>Present</button>  </div>
</div>
<hr />
<div className='all-lect'>    
    <div className='detls'>
        <h3 className='h3'>Scrum 06.07.2022</h3>
        <p><strong>Bheema G</strong>  Scheduled  <strong>Scrum</strong> at 06 Jul, 22 - 9:00 am <button className='live'>live</button></p>        
    </div>
    <div className='details'><button className='dbtnsp'>Present</button>  </div>
</div>
    </div>
    </div>
    </>
  );
}


