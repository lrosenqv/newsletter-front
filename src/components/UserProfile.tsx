import { useEffect,  useState } from "react"
import { IUser } from "../models/IUser";
import { ApiService } from "../services/api";
import "../styles/style.css"

const service = new ApiService();

let basic: IUser = {
  username: "",
  email: "",
  subscription: false
}

let id = localStorage.getItem('onlineUserKey') || ""

export const UserProfile = () => {
  const [user, setUser] = useState<IUser>(basic)
  const [subOption, setSubOption] = useState(user.subscription)

  useEffect(() => {
    if(id){
      service.getUser(JSON.parse(id))
      .then(res => {
        setUser({
          username: res.username,
          email: res.email,
          subscription: res.subscription
        })
      })
    }
  }, [])

  useEffect(() => {
    setSubOption(user.subscription)
  }, [user])

  function handleClick(){
    if(subOption){
      setSubOption(false)
    } else {
      setSubOption(true)
    }
    service.changeSubscription(JSON.parse(id), !subOption)
  }

  function logout(){
    localStorage.removeItem('onlineUserKey')
    window.location.reload()
  }

  return(<>
    <h1>UserProfile</h1>
    <div>
      <h2>Welcome { user.username }!</h2>
      <p>Email: { user.email }</p>
      {subOption ? <button className="subOn" onClick={handleClick}>Turn off subscription</button>
      : <button className="subOff" onClick={handleClick}>Turn on subscription</button>}
      <button onClick={logout}>Logout</button>
    </div>
  </>)
}