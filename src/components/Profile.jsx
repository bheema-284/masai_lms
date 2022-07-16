import { Navbar } from './Navbar';
import '../App.css';
import { useUserAuth } from "../context/UserAuthContext";
import { TbDeviceDesktop } from "react-icons/tb";
export const Profile = () => {
    const { user} = useUserAuth();
  return (
    <>
    <Navbar/>
    <hr />
    <div className='divcc'>
    <div className="Notifications">      
      <h2 className='h22'>Profile</h2>      
    </div>    
    </div>  
    
    <div className='profiledivs'>
        <div>
            <div className='textdivprf'>
            <strong> Profile Information</strong>                   
            <p>Update your account's profile information and email address. </p>           
            </div>
        </div>    
    <div className='inputsss'>   
   <label className='label1' >Email</label> <br /> 
        <input className="inputssssss" type="email" name="email" id="" value={user && user.email} /> <br /><br />
        <div className='ppsave'><button type="Submit" className='btns'>SAVE</button></div>
        </div>  
        </div>
<hr />
        <div className='profiledivs'>
        <div>
            <div className='textdivprf'>
            <strong> Update Password</strong>                   
            <p>Ensure your account is using a long, random password to stay secure. </p>           
            </div>
        </div>   
        <div className='inputss'> 
        <label className='label1' >Current Password</label> <br />
        <input className="inputssssss" type="password" name="" id="" value={user && user.password} /> <br /> <br />
        <label className='label1' >New Password</label> <br />
        <input className="inputssssss" type="password" name="" id="" value={user && user.password} /> <br /> <br />
        <label className='label1' >Confirm Password</label> <br />
        <input className="inputssssss" type="password" name="" id="" value={user && user.password} /> <br /> <br />
        <div className='ppsave'><button type="Submit" className='btns'>SAVE</button></div>
    </div>  
    </div>
    <hr />
    <div className='profiledivs'>
        <div>
            <div className='textdivprf'>
            <strong> Browser Sessions</strong>                   
            <p>Manage and log out your active sessions on other browsers and devices.</p>           
            </div>
        </div>  
    <div className='inputss'>
        <p className='browserp'>If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password.</p>
    <div className='browsertap'>
        <div>
        <TbDeviceDesktop className='tbdevice'/>
        </div>
        <div className='browserdivtext'>
        <p>Windows - Chrome</p>
        <p className='browpp'>157.48.163.85, <span className='browspan' >This device</span></p>
        </div>

    </div>
        <div className='ppsavebb'><button type="Submit" className='btns'>LOG OUT OTHER BROWSER SESSIONS</button></div>
    </div>
    </div>
    </>
  );
}


