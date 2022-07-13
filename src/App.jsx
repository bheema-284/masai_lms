import { Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './components/HomePage';
import { Shedule } from './components/Shedule';
import { Lectures } from './components/Lectures';
import { Assignments } from './components/Assignments';
import { Admin } from './components/Admin';
function App() {
  return (
    <div className="App">     
      
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/dashboard" element={<Shedule />} />
          <Route path="/lectures" element={<Lectures />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/assignments" element={<Assignments />} />
        </Routes>
    </div>
  );
}

export default App;

