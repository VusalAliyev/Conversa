import { useState } from 'react'
import { useEffect } from 'react'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-route-dom';
import viteLogo from '/vite.svg'
import Register from './components/Register'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import './App.css'

function App() {
  const [username, setUsername] = useState('');

  const changeUsername = (newUsername) => {
    console.log(newUsername);
    setUsername(newUsername);
  }
  console.log(username);

  return (
    <Routes>
      <Route path="/" element={<Home username={username} />} />
      <Route path="/login" element={<Login changeUsername={changeUsername} />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
export default App
