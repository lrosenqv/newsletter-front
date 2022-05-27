import axios from "axios";
import { off } from "process";
import { ChangeEvent, useState } from "react"

export const SignUpForm = () => {
  const [sub, setSub] = useState("false")

  //Setting subscription to n/y when checkbox is toggled
  function checkBox(e: ChangeEvent<HTMLInputElement>){
    if(e.target.checked){
      setSub("true")
    } else {
      setSub("false")
    }
  }

  return(
    <form id="signUpForm" method="POST" action="http://localhost:3001/addUser">
      <input type="text" placeholder="Firstname" id="Firstname" name="firstname"/>
      <input type="text" placeholder="Username" id="Username" name="username" />
      <input type="password" placeholder="Password" id="Password" name="password"/>
      <input type="email" placeholder="john.doe@example.com" id="email" name="email" />
      <label htmlFor="subscription">Signup for newsletter</label>
      <input type="checkbox" id="subscription" name="subscription" onChange={checkBox} value={sub}/>

      <button type="submit">Sign up</button>
    </form>
  )
}
