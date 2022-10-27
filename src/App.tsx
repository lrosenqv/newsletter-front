import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import './App.css';
import { SignUpForm } from './components/signupForm';
import { UserProfile } from './components/UserProfile';
import { ILogin } from './models/ILogin';
import { ApiService } from './services/api';
const service = new ApiService();

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [signUpBtn, setSignUpBtn] = useState(false);
  const [user, setUser] = useState<ILogin>({username: "", password: ""});
  const [errorMsg, setErrorMsg] = useState(false)

  useEffect(() => {
  let ls = localStorage.getItem('onlineUserKey')
    if(ls){
      setLoggedIn(true)
    }
  }, [])

  function handleChange(e: ChangeEvent<HTMLInputElement>){
    let name = e.target.name;
    setUser({...user, [name]: e.target.value})
    setErrorMsg(false)
  }

  function handleCancel(){
    setSignUpBtn(false)
  }

  function login(e: SyntheticEvent){
    e.preventDefault();
    service.login(user)
    .then(res =>{
      if(res === "Not found"){
        setErrorMsg(true)
      }
      else {
        window.location.reload()
      } 
    })
  }

  return (
    <>
      {loggedIn &&
        <UserProfile />
      }

      {!loggedIn && <>

        {signUpBtn ? <h1>New User</h1> : <h1>Login</h1>}
        {!signUpBtn && <>
          <form onSubmit={login}>
            <input type="text" placeholder="Username" id="username" name="username" required onChange={handleChange}/>
            <input type="password" placeholder="Password" id="password" name="password" required onChange={handleChange}/>
            <button type="submit" >Sign in</button>
            <button type="button" onClick={() => setSignUpBtn(true)}>Create User</button>

            {errorMsg && <div id="errorMsg">
              User not found
            </div>}
          </form>
        </>}

        { signUpBtn && <div>
          <SignUpForm cancelClick={handleCancel}/>
        </div>}
          
        <a href="https://dw-newsletter.herokuapp.com/admin">Admin</a>
      </>
      }
    </>
  );
}

export default App;
