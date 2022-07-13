import { Navbar } from './Navbar';
import '../App.css';
export const Lectures = () => {
  return (
    <>
    <Navbar/>
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
    </div>
    </div>
    </>
  );
}


