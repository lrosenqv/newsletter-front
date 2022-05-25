import axios from "axios";
import { ChangeEvent, useState } from "react"

export const SignUpForm = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    firstname: "",
    subscription: false
  })

  function handleChange(e: ChangeEvent<HTMLInputElement>){
    let name = e.target.name;
    setNewUser({...newUser, [name]: e.target.value})
  }

  function handleCheckbox(e: ChangeEvent<HTMLInputElement>){
    if(e.target.checked){
      setNewUser({...newUser, subscription: true})
    } else {
      setNewUser({...newUser, subscription: false})
    }
  }

  function createUser(){
    axios.post('http://localhost:3001/addUser', newUser)
    .then(res => {console.log(res.data);
    })
  }

  return(
    <form>
      <input type="text" placeholder="Username" id="Username" name="username" onChange={handleChange}/>
      <input type="password" placeholder="Password" id="Password" name="password" onChange={handleChange}/>
      <input type="text" placeholder="Firstname" id="Firstname" name="firstname"onChange={handleChange}/>
      <label htmlFor="subscription">Signup for newsletter</label>
      <input type="checkbox" id="subscription" name="subscription" onChange={handleCheckbox}/>
      <button onClick={createUser}>Sign up</button>
    </form>
  )
}