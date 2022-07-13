import { Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './components/HomePage';
import { Shedule } from './components/Shedule';
import { Lectures } from './components/Lectures';
import { Assignments } from './components/Assignments';
import { Admin } from './components/Admin';
import { Discussions } from './components/Discussions';
import { Electives } from './components/Electives';
import { Notifications } from './components/Notifications';
import { Tickets } from './components/Tickets';
function App() {
  return (
    <div className="App">     
      
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/dashboard" element={<Shedule />} />
          <Route path="/lectures" element={<Lectures />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/electives" element={<Electives />} />
          <Route path="/discussions" element={<Discussions />} />
        </Routes>
    </div>
  );
}

export default App;

