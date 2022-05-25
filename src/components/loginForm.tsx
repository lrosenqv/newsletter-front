import axios from "axios"
import { ChangeEvent, useState } from "react"
import { ILogin } from "../models/ILogin";

export const LoginForm = () => {
  const [user, setUser] = useState<ILogin>({username: "", password: ""})

  function handleChange(e: ChangeEvent<HTMLInputElement>){
    let name = e.target.name;
    setUser({...user, [name]: e.target.value})
  }

  function login(e: MouseEvent){
    e.preventDefault()

    axios.post<ILogin>('http://localhost:3001/login',{
      username: user.username,
      password: user.password
    })
    .then(res => {
      console.log(res.data);
      console.log(res.data.username);

    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return(
    <form onSubmit={() => login}>
      <input type="text" placeholder="Username" id="username" name="username" onChange={handleChange}/>
      <input type="password" placeholder="Password" id="password" name="password" onChange={handleChange}/>
      <button onClick={() => login}>Sign in</button>
    </form>
  )
}