import Popup from 'reactjs-popup';
import { Navbar } from './Navbar';
import '../App.css';
export const Admin = () => {   
  return (
    <>
    <Navbar/>
    <hr />
    <div className='adminspage'>
    <div>
    <Popup
    trigger={<button className="btns"> Create Lectures </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Create Lectures </div>
        <div className="content">
          <label className='lectlable'>Lecture Name</label><br />
          <input className='input' type="text" name="" id="" /> <br />
          <label className='lectlable'>Instructor Name</label><br />
          <input className='input' type="text" name="" id="" /> <br />          
          <label className='lectlable'>Date</label><br />
          <input className='input' type="date" name="" id="" /> <br />
          <label className='lectlable'>Time</label><br />
          <input className='input' type="time" name="" id="" /> <br />
        </div>
        <div className="actions">          
          <button
            className="btns"
            onClick={() => {
              console.log('modal created ');
              close();
            }}
          >
            Create 
          </button>
        </div>
      </div>
    )}
  </Popup>
    </div>
    <div>
    <Popup
    trigger={<button className="btns"> Create Assignments </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Create Assignments </div>
        <div className="content">
          <label className='lectlable'>Assignment Name</label><br />
          <input className='input' type="text" name="" id="" /> <br />
          <label className='lectlable'>Instructor Name</label><br />
          <input className='input' type="text" name="" id="" /> <br />
          <label className='lectlable'>Stream</label><br />
          <select name="" className='select'>
          <option value="">select</option>
            <option value="">FULL_STACK</option>
            <option value="">FRONTEND</option>
            <option value="">BACKEND</option>
            <option value="">OJ</option>
            </select><br />
          <label className='lectlable'>Date</label><br />
          <input className='input' type="date" name="" id="" /> <br />
          <label className='lectlable'>Time</label><br />
          <input className='input' type="time" name="" id="" /> <br />
        </div>
        <div className="actions">          
          <button
            className="btns"
            onClick={() => {
              console.log('modal created ');
              close();
            }}
          >
            Create 
          </button>
        </div>
      </div>
    )}
  </Popup>
    </div>
    </div>
    </>
  );
}


