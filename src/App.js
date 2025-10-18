import Homepage from './pages/homepage';
import Navbar from './components/navbar';
import './App.css';
import { useState } from 'react';


function App() {
  const [username, setUsername] = useState()
  
  return (
    <div style={{fontFamily: 'sans-serif'}}>
        <Navbar username={username}/>
        <Homepage setUsername={setUsername}/>
    </div>
  );
}

export default App;
