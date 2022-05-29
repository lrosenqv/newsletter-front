import axios from "axios";
import { userInfo } from "os";
import { off } from "process";
import { ChangeEvent, SyntheticEvent, useState } from "react"
import { INewUser } from "../models/INewUser";
import { ApiService } from "../services/api";

const service = new ApiService();

export const SignUpForm = () => {
  const [newUser, setNewUser] = useState<INewUser>({
    username: "",
    password: "",
    email: "",
    subscription: false
  })

  function handleChange(e: ChangeEvent<HTMLInputElement>){
    let name: string = e.target.name;
    setNewUser({...newUser, [name]: e.target.value})
    console.log(newUser);
  }

  function handleCheckbox(e: ChangeEvent<HTMLInputElement>){
    if(e.target.checked){
      setNewUser({...newUser, subscription: true})
    } else {
      setNewUser({...newUser, subscription: false})
    }
    console.log(newUser);
  }

  function addNewUser(e: SyntheticEvent){
    e.preventDefault()
    service.addUser(newUser)
    window.location.assign('/')
  }

  return(
    <form id="signUpForm" onSubmit={addNewUser}>
      <input type="text" placeholder="Username" id="Username" name="username" onChange={handleChange}/>
      <input type="password" placeholder="Password" id="Password" name="password" onChange={handleChange}/>
      <input type="email" placeholder="john.doe@example.com" id="email" name="email" onChange={handleChange}/>
      <label htmlFor="subscription">Signup for newsletter</label>
      <input type="checkbox" id="subscription" name="subscription" onChange={handleCheckbox}/>

      <button type="submit">Sign up</button>
    </form>
  )
}
