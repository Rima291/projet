
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { AppContext, socket } from "./context/appContext";

import Login from "./Authentification/Login";
import { Signup } from "./Authentification/Signup";
import Dashboard from "./pages/dashboardAdmin";
import Employee from "./pages/employee";
import { Role } from "./pages/role";
import Notes from "./pages/note";
import Calendrier from "./pages/calendrier";
import { ForgotPassword } from "./Authentification/forgot";
import { ResetPass } from "./Authentification/resetPass";
import Profile from "./pages/profile";
import Navbar from "./pages/navbar";

function App() {
    const [rooms, setRooms] = useState([]);
    const [currentRoom, setCurrentRoom] = useState([]);
    const [members, setMembers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [privateMemberMsg, setPrivateMemberMsg] = useState({});
    const [newMessages, setNewMessages] = useState({});
    return (
        <AppContext.Provider value={{ socket, currentRoom, setCurrentRoom, members, setMembers, messages, setMessages, privateMemberMsg, setPrivateMemberMsg, rooms, setRooms, newMessages, setNewMessages }}>
            <BrowserRouter>
                <Routes>
                    
                    
                            <Route path="/" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                        
                        <Route path="/dashboardAdmin" element={<Dashboard />}/>
                        <Route path="/employee" element={<Employee />}/>
                        <Route path="/role" element={<Role />}/>
                        <Route path="/note" element={<Notes />}/>
                        <Route path="/calendrier" element={<Calendrier/>}/>
                        <Route path='/forgot' element={<ForgotPassword/>}/>  
                        <Route path='/resetPass/:id/:token' element={<ResetPass/>}/>     
                         <Route path="/profile" element={<Profile/>}/>
                         <Route path="/navbar" element={<Navbar/>}/>
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
