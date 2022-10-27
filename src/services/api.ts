import axios from "axios"
import { ILogin } from "../models/ILogin";
import { INewUser } from "../models/INewUser";
import { IUser } from "../models/IUser";

const url: string = "https://dw-newsletter.herokuapp.com/users"
export class ApiService {
  async getUser(id: string){
    let response = await axios.get<IUser>(`${url}/${id}`)
    .then(res => {
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

  async login(user: ILogin){
    let response = await axios.post('https://dw-newsletter.herokuapp.com/login', user)
    .then(res => {
      if(res.data !== "Not found"){
        localStorage.setItem('onlineUserKey', JSON.stringify(res.data._id))
      }
      return res.data
    })
    .catch(error => {
      console.error(error);
    })
    return response
  }

  async addUser(newUser: INewUser){
    let req = await axios.post('https://dw-newsletter.herokuapp.com/addUser', newUser)
    .then((res) => {
      return res.data
    })
    .catch(error => {
      console.error(error);
    })
    return req
  }
}
