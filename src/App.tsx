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

  function login(e: SyntheticEvent){
    e.preventDefault();
    service.login(user)
    .then(res =>{
      if(res === "Not Found"){
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
        <form onSubmit={login}>
          <input type="text" placeholder="Username" id="username" name="username" required onChange={handleChange}/>
          <input type="password" placeholder="Password" id="password" name="password" required onChange={handleChange}/>
          <button type="submit" >Sign in</button>
          <button type="button" onClick={() => setSignUpBtn(true)}>Create User</button>
        </form>

        { signUpBtn && <div>
          <SignUpForm />
          <button className="cancelBtn" type="button" onClick={() => setSignUpBtn(false)}>Cancel</button>
        </div>}
          
        {errorMsg && <div>
          Not found
        </div>}
        <a href="http://localhost/admin">Admin</a>
      </>
      }
    </>
  );
}

export default App;
