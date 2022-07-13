import { Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './components/HomePage';
import { Shedule } from './components/Shedule';
function App() {
  return (
    <div className="App">     
      
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<Shedule />} />
        </Routes>
    </div>
  );
}

export default App;

