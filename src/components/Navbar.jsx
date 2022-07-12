import '../App.css';
import masai from '../assets/masai.png'
export const Navbar = () => {
  return (
    <div className="Navbar">
      <img className='img' src={masai} alt="" />
      <p className='p'>Lectures</p>
      <p className='p'>Assignments</p>
      <p className='p'>Admin</p>
      <p className='p'>Tickets</p>
      <p className='p'>Discussions</p>
      <p className='p'>Notifications</p>
      <p className='p'>Electives</p>
      <p className='p'>Bheema(fw14_284)</p>
    </div>
  );
}


