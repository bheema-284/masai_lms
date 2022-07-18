import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import '../App.css';
export const CreateTickets = () => {
  return (
    <>
    <Navbar/>
    <hr />
    <div className='divcc'>
    <div className="Tickets">      
      <h2 className='h22'>Create Support Ticket</h2>          
    </div>
    </div> 
    <div className='createtickts'>
    <div className='creatediv'>
    <label className='lectlable1'>CATEGORY</label><br /><br />
    <select name="" className='select1'>
            <option value="">Select</option>
            <option value="">Withdraw</option>            
            <option value="">Counciling Support (Carrer Coatch)</option>
            <option value="">Evaluation Score</option>
            <option value="">Missed Evaluation</option>
            <option value="">Missed Evaluation Recording</option>
            <option value="">Leave</option>
            <option value="">MAC</option>
            <option value="">MAC Compliants</option>
            <option value="">Product Support</option>
            <option value="">Attendance Query</option>
            <option value="">NBFC/ISA/Glide</option>
            <option value="">Curriculum Query</option>
            <option value="">IA Suport</option>
            <option value="">Electives</option>
            <option value="">Referal</option>
            <option value="">Course Change</option>            
            </select><br /><br />
          <label className='lectlable1'>TITLE</label><br /><br />
          <input className='cteateinpt' type="text" name="" id="" /> <br /><br />
          <label className='lectlable1'>MESSAGE</label><br /><br />
          <div className='createaa'><p className='createaa1'>Write</p> <p className='createaa2'>Preview</p><p className='createaa3'>Help</p></div>
          <textarea placeholder="Type '/' for commands" name="" id="" cols="110" rows="15"></textarea>
    </div>
   <div className='btnsasa'> <button className='btns'>CREATE TICKET</button></div>
    </div>     
    </>
  );
}


