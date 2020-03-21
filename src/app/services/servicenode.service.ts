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
//checkout order
checkout(name:string,email:string,address:string,city:string,state:string,zip:number)
{
  console.log("checkout")
 return  this.services.post('checkoutModel',{name:name,email:email,address:address,city:city,state:state,zip:zip})

}
//to delete a product
deleteProduct(title:string)
{
  console.log("task services task")
  return  this.services.delete(`delProduct`,{title:title}) 
}


//the function to make order
addTocart(name:string,price:number,img:string)
{

 
  console.log("make order")
  console.log()
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
