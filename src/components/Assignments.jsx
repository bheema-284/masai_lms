import { Navbar } from './Navbar';
import '../App.css';
export const Assignments = () => {
  return (
    <>
    <Navbar/>
    <hr />
    <div className='divcc'>
    <div className="Lectures">      
      <h2 className='h22'>Assignments</h2>      
    </div>
    </div>
    <div className='Assignmentss'>
    <div className='Assignment'>
<div className='all-lect'>    
    <div className='detls'>
        <h3 className='h3'>Thrive - Week 4  <button className='fullstack'>FULL_STACK</button></h3>
        <p><strong>Bheema G</strong>  Created  <strong>Assignments Problems </strong> at 12 Jul, 22 - 11:45 am </p>        
    </div>
    <div className='detailss'><button className='dbtnsn'>New</button> <div><p>0/1</p></div>  </div>
</div>
<hr />
<div className='all-lect'>    
    <div className='detls'>
    <h3 className='h3'>Thrive - Week 3  <button className='frontend'>FRONTEND</button></h3>
        <p><strong>Bheema Guguloth</strong>  Created  <strong>Assignments Problems</strong> at 11 Jul, 22 - 08:00 pm </p>        
    </div>
    <div className='detailss'><button className='dbtnspp'>Progress</button> <div><p>1/3</p></div> </div>   
</div>
<hr />
<div className='all-lect'>    
    <div className='detls'>
    <h3 className='h3'>Thrive - Week 2 <button className='backend'>BACKEND</button> </h3>
        <p><strong>Bheema G</strong>  Created  <strong>Assignments Problems </strong> at 10 Jul, 22 - 12:00 pm </p>        
    </div>
    <div className='detailss'><button className='dbtnsc'>Completed</button> <div><p>3/3</p></div> </div>
</div>
<hr />
<div className='all-lect'>    
    <div className='detls'>
    <h3 className='h3'>DSA Practice Contest <button className='oj'>OJ</button> </h3>
        <p><strong>Bheema Guguloth</strong>  Created  <strong>Assignments Problems</strong> at 09 Jul, 22 - 05:00 pm </p>      
    </div>
    <div className='detailss'><button className='dbtnsc'>Completed</button>  </div>
</div>
    </div>
    </div>
    </>
  );
}


