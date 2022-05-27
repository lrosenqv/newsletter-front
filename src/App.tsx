import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import './App.css';
import { AdminBtn } from './components/AdminBtn';
import { LoginForm } from './components/loginForm';
import { SignUpForm } from './components/signupForm';

function App() {
  const[loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
  let ls = localStorage.getItem('onlineUserId')
  if(ls){
    setLoggedIn(true)
  }
}, [])

  return (
    <>
      {loggedIn && <Navigate replace to="/:username"/> }
      <LoginForm />
      <AdminBtn />
    </>
  );
}

export default App;
