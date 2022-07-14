import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import '../App.css';
export const Tickets = () => {
  return (
    <>
    <Navbar/>
    <hr />
    <div className='divcc'>
    <div className="Tickets">      
      <h2 className='h22'>Support Tickets</h2>  
      <Link to={'/tickets/create'}><h2><button className='btns'>CREATE</button></h2>   </Link> 
    </div>
    </div> 
    <div className='tickts'>
.
    </div>     
    </>
  );
}


