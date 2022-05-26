import axios from "axios";
import { off } from "process";
import { ChangeEvent, useState } from "react"

export const SignUpForm = () => {
  const [sub, setSub] = useState("false")

  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    firstname: "",
    subscription: false
  })

  function checkBox(e: ChangeEvent<HTMLInputElement>){
    if(e.target.checked){
      setSub("true")
    } else {
      setSub("false")
    }
  }

//onChange={handleChange} onSubmit={() => createUser}
  return(
    <form id="signUpForm" method="POST" action="http://localhost:3001/addUser">
      <input type="text" placeholder="Username" id="Username" name="username" />
      <input type="password" placeholder="Password" id="Password" name="password"/>
      <input type="text" placeholder="Firstname" id="Firstname" name="firstname"/>
      <label htmlFor="subscription">Signup for newsletter</label>
      <input type="checkbox" id="subscription" name="subscription" onChange={checkBox} value={sub}/>

      <button type="submit">Sign up</button>
    </form>
  )
}

/*function handleChange(e: ChangeEvent<HTMLInputElement>){
  let name = e.target.name;
  setNewUser({...newUser, [name]: e.target.value})
}

function handleCheckbox(e: ChangeEvent<HTMLInputElement>){
  console.log(e.target.value);

  if(e.target.checked){
    setNewUser({...newUser, subscription: true})
  } else {
    setNewUser({...newUser, subscription: false})
  }
}

function createUser(e: SubmitEvent){
  e.preventDefault()
  axios.post('http://localhost:3001/addUser', newUser)
  .then(res => {
    console.log(res.data);
  })
}*/