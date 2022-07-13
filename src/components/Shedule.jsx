import { Navbar } from './Navbar';
import '../App.css';
export const Shedule = () => {
  return (
    <>
    <Navbar/>
    <hr />
    <div className='divcc'>
    <div className="Shedule">      
      <h2 className='h2'>Today's Shedule</h2>
      <div className='btnss'>
        <h2><button className='btns'>BOOKMARKS</button></h2>
        <h2><button className='btns'>REFER & EARN</button></h2>
        </div>
    </div>
    </div>
    <div className='shedules'>
<div className='all-lect'>
    <div className='lect'>
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
<div className='all-lect'>
    <div className='lect'>
        <h4>12:00 PM </h4>
        <h4>LECTURE</h4>
    </div>
    <div className='detls'>
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


