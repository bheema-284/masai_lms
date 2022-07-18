import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import '../App.css';
import masai from '../assets/masai.png'
import { useUserAuth } from "../context/UserAuthContext";
import '../App.css';
export const ElectivesCatalog = (props) => {
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
    <div className="Electives">      
      <h2 className='h22'>Electives Catalog</h2>      
    </div>    
    </div>  
    <div className='Catalogss'>
    <div>
    <div className='ElectivesCatalogsss'>
      <p><strong>CLI Bash</strong></p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque aut nihil velit illum adipisci, sunt labore facere. Accusantium corporis debitis sunt, cupiditate aliquid dolor dignissimos, neque tempora, adipisci ea cum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat porro laboriosam quos vel provident ex placeat consequuntur veniam! Reiciendis commodi vero expedita consequatur odio minima unde ipsam earum iusto tempora! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex deserunt officiis assumenda officia, maiores quia debitis consequuntur nam sequi odit placeat ullam dolores vitae inventore sed mollitia vero eos necessitatibus.</p>
    </div>
    <div className='ElectivesCatalogsss'>
    <p><strong>Intro NPM Packages</strong></p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque aut nihil velit illum adipisci, sunt labore facere. Accusantium corporis debitis sunt, cupiditate aliquid dolor dignissimos, neque tempora, adipisci ea cum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat porro laboriosam quos vel provident ex placeat consequuntur veniam! Reiciendis commodi vero expedita consequatur odio minima unde ipsam earum iusto tempora! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex deserunt officiis assumenda officia, maiores quia debitis consequuntur nam sequi odit placeat ullam dolores vitae inventore sed mollitia vero eos necessitatibus.</p>
    </div>
    </div>
    <div>
    <div className='ElectivesCatalogsss'>
    <p><strong>Bootstrap CSS</strong></p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque aut nihil velit illum adipisci, sunt labore facere. Accusantium corporis debitis sunt, cupiditate aliquid dolor dignissimos, neque tempora, adipisci ea cum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat porro laboriosam quos vel provident ex placeat consequuntur veniam! Reiciendis commodi vero expedita consequatur odio minima unde ipsam earum iusto tempora! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex deserunt officiis assumenda officia, maiores quia debitis consequuntur nam sequi odit placeat ullam dolores vitae inventore sed mollitia vero eos necessitatibus.</p>
    </div>
    <div className='ElectivesCatalogsss'>
    <p><strong>Animation</strong></p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque aut nihil velit illum adipisci, sunt labore facere. Accusantium corporis debitis sunt, cupiditate aliquid dolor dignissimos, neque tempora, adipisci ea cum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat porro laboriosam quos vel provident ex placeat consequuntur veniam! Reiciendis commodi vero expedita consequatur odio minima unde ipsam earum iusto tempora! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex deserunt officiis assumenda officia, maiores quia debitis consequuntur nam sequi odit placeat ullam dolores vitae inventore sed mollitia vero eos necessitatibus.</p>
    </div>
    </div>
    <div>
    
    </div>
      </div>  
    </>
  );
}


