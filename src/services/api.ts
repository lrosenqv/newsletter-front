import axios from "axios"
import { stringify } from "querystring";
import { ILogin } from "../models/ILogin";
import { INewUser } from "../models/INewUser";
import { IUser } from "../models/IUser";

const url: string = "http://localhost:3001/users"
export class ApiService {
  constructor(){}

  async getUser(id: string){
    let response = await axios.get<IUser>(`${url}/${id}`)
    .then(res => {
      console.log(res.data);

      return res.data
    })
    return response
  }

  changeSubscription(id: string, subscription: boolean){
    let changes = {_id: id, subscription: subscription}
    axios.put(`${url}/update/${id}`, changes)
    .then( res =>{
      console.log(res.data);
    })
    .catch(error => {
      console.error(error)
    })
  }

  login(user: ILogin){
    axios.post('http://localhost:3001/login', user)
    .then(res => {
      if(res.statusText === "OK"){
        localStorage.setItem('onlineUserKey', JSON.stringify(res.data._id))
      }
    })
    .catch(error => {
      console.error(error);
    })
  }

  addUser(newUser: INewUser){
    axios.post('http://localhost:3001/addUser', newUser)
    .then(res => {
      console.log(res.data);
    })
    .catch(error => {
      console.error(error);
    })
  }
}