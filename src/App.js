import './App.css';
import Navbar from './components/Navbar';

import {auth} from "./firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import Welcome from './components/Welcome';
import ChatBox from './components/ChatBox';
import { useState } from 'react';
function App() {

  const [user] = useAuthState(auth);
  const [loading,setLoading] = useState(false);
  

  return (
    <>
    {loading &&  (<div className='loader'>Loading...</div>)}
    <div className="App">
      <Navbar />
      {!user ? <Welcome setLoading={setLoading} /> : <ChatBox setLoading={setLoading} />} 
    </div>
    </>
    
  );
}

export default App;
