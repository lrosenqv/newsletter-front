import React from 'react';
import './App.css';
import { AdminBtn } from './components/AdminBtn';
import { LoginForm } from './components/loginForm';
import { SignUpForm } from './components/signupForm';

function App() {
  return (
    <>
      <LoginForm />
      <SignUpForm />
      <AdminBtn />
    </>
  );
}

export default App;
