import axios from "axios"
import { ChangeEvent, SyntheticEvent, useState } from "react"
import { ILogin } from "../models/ILogin";
import { SignUpForm } from "./signupForm";

export const LoginForm = () => {
  const [signUpBtn, setSignUpBtn] = useState(false);
  const [user, setUser] = useState<ILogin>({username: "", password: ""})

  function handleChange(e: ChangeEvent<HTMLInputElement>){
    let name = e.target.name;
    setUser({...user, [name]: e.target.value})
  }

  function login(e: SyntheticEvent){
    e.preventDefault()

    axios.post<ILogin>('http://localhost:3001/login',{
      username: user.username,
      password: user.password
    })
    .then(res => {
      if(res.statusText == "OK"){
        localStorage.setItem('onlineUserId', JSON.stringify(user.username))
        window.location.assign('http://localhost:3000/'+ user.username)
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return(<>
    <form onSubmit={login}>
      <input type="text" placeholder="Username" id="username" name="username" required onChange={handleChange}/>
      <input type="password" placeholder="Password" id="password" name="password" required onChange={handleChange}/>
      <button type="submit" >Sign in</button>
      <button type="button" onClick={() => setSignUpBtn(true)}>Create User</button>
    </form>

    { signUpBtn && <div>
      <SignUpForm />
      <button type="button" onClick={() => setSignUpBtn(false)}>Cancel</button>
    </div>}
  </>)
}