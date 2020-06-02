import { Injectable } from '@angular/core';
import{UserService} from './user.service';
interface myData {
  success: boolean,
  message: string
}

interface registerResponse {
  success: boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class ServicenodeService {
  private loggedInStatus = false
  constructor(private services :UserService) { }
  get isLoggedIn() {
    return this.loggedInStatus
  }

  login() {
    // post these details to API server return user info if correct
    return this.services.get('userModel')
  }
  //the function to make user register 
createUser(username:string ,email:string,age:number,passward:any,gender:string,image:any)
{
 return  this.services.post('userModel',{username:username,email:email,age:age,passward:passward,gender:gender,image:image})
}
//the function to add product 
addProduct(title:string,price:number,details:string,image:string)
{
 return  this.services.post('postproduct',{title:title,price:price,details:details,image:image})
}
//checkout order
checkout(name:string,email:string,address:string,city:string,state:string,zip:number)
{
  console.log("checkout")
 return  this.services.post('checkoutModel',{name:name,email:email,address:address,city:city,state:state,zip:zip})

}
//to delete a product
deleteProduct(id:string)
{
  console.log("task services task")
  return  this.services.delete(`cartModel/${id}`,{id:id}) 
}


//the function to make order
addTocart(name:string,price:number,img:string)
{

 
  console.log("make order")

 return  this.services.post('cartModel',{name:name,price:price,img:img})
}
//the function to get user 
userLogin(username:string,passward:string)
{
  console.log("task services task")
  return  this.services.post('userlogin',{username:username,passward:passward}) 
}

//the get all product function 
laptop()
{
  return this.services.get('laptopModel')
}
Camera()
{
  return this.services.get('cameraModel')
}
Headphone()
{
  return this.services.get('headphoneModel')
}
Phones()
{
  return this.services.get('phoneModel')
}
cart()
{
  return this.services.get('cartModel')
}
//the get all order function 
getOrder()
{
  console.log('the order task services ')
  return this.services.get('getOrder')
}
}
