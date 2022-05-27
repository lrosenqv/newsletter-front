import axios from "axios"
import { useEffect, useState } from "react"
import { IUser } from "../models/IUser"

export const UserProfile = () => {
  const [user, setUser] = useState<IUser>({
    username: "",
    firstname: "",
    subscription: false
  })

  useEffect(() => {
    let userId = JSON.parse(localStorage.getItem('onlineUserId') || "")
    axios.get<IUser>('http://localhost:3001/users/' + userId)
    .then(res => {
      setUser(res.data)
      console.log(user);
    })
  })

  return(<>HalliHallå</>)
}