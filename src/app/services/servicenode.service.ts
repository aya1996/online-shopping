import { Injectable } from '@angular/core';
import{UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ServicenodeService {

  constructor(private services :UserService) { }
  //the function to make user register 
createUser(username:string,passward:string,email:string,image:string)
{
 return  this.services.post('userreg',{username:username,passward:passward,email:email,image:image})
}
//the function to add product 
addProduct(title:string,price:number,details:string,image:string)
{
 return  this.services.post('postproduct',{title:title,price:price,details:details,image:image})
}
//to delete a product
deleteProduct(title:string)
{
  console.log("task services task")
  return  this.services.delete(`delProduct`,{title:title}) 
}


//the function to make order
makeOrderTask(image:string)
{

  console.log(image)
  console.log("make order")
  
 return  this.services.post('makeOrder',{image:image})
}
//the function to get user 
userLogin(username:string,passward:string)
{
  console.log("task services task")
  return  this.services.post('userlogin',{username:username,passward:passward}) 
}

//the get all product function 
product()
{
 console.log("in pro func")
  return this.services.get('getPro')
}
//the get all order function 
getOrder()
{
  console.log('the order task services ')
  return this.services.get('getOrder')
}
}
