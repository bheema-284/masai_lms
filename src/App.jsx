import { Routes, Route } from 'react-router-dom';
import React, { useState ,useEffect } from "react";
import { auth } from "./firebase";
import './App.css';
import { Signup }  from "./components/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { HomePage } from './components/HomePage';
import { Shedule } from './components/Shedule';
import { Lectures } from './components/Lectures';
import { Assignments } from './components/Assignments';
import { Admin } from './components/Admin';
import { Discussions } from './components/Discussions';
import { Electives } from './components/Electives';
import { Notifications } from './components/Notifications';
import { Profile } from './components/Profile';
import { Tickets } from './components/Tickets';
import { Referal } from './components/Referal';
import { BookMarks } from './components/BookMarks';
import { CreateTickets } from './components/CreateTickets';
import { ElectivesCatalog } from './components/ElectivesCatalog';
function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <div className="App">     
     
      <UserAuthContextProvider>       
      <Routes>          
          <Route path="/signup" element={<Signup />} />          
          <Route path="/" element={<HomePage/>} />            
          <Route path="/login" element={<Referal name={userName}/>} />
          <Route path="/bookmarks" element={<BookMarks name={userName}/>} />
          <Route path="/dashboard" element={<Shedule name={userName}/>} />
          <Route path="/lectures" element={<Lectures name={userName}/>} />
          <Route path="/admin" element={<Admin name={userName}/>} />
          <Route path="/assignments" element={<Assignments name={userName}/>} />
          <Route path="/tickets" element={<Tickets name={userName}/>} />
          <Route path="/tickets/create" element={<CreateTickets name={userName}/>} />
          <Route path="/user/profile" element={<Profile name={userName}/>} />
          <Route path="/notifications" element={<Notifications name={userName}/>} />
          <Route path="/electives" element={<Electives name={userName}/>} />
          <Route path="/electives/catalog" element={<ElectivesCatalog name={userName}/>} />
          <Route path="/discussions" element={<Discussions name={userName}/>} />
        </Routes>
        </UserAuthContextProvider>
    </div>
  );
}

export default App;