import { Component, OnInit, Input } from '@angular/core';
import {ServicenodeService} from '../services/servicenode.service'
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent  {

  
 constructor( private services:ServicenodeService) { }
;

 addCheckout(event){
  
  event.preventDefault()
  const target = event.target.parentNode
  const name= target.querySelector('#name').value
  const email = target.querySelector('#email').value
  const address = target.querySelector('#address').value
  const city = target.querySelector('#city').value
  const state = target.querySelector('#state').value
  const zip = target.querySelector('#zip').value
  this.services.checkout(name ,email,address,city,state,zip).subscribe(res=>{
    console.log(res)
    console.log(name)
   
 
  
  })
  alert("Your Order Sent Successfully");
}
 ngOnInit() {}

 

}