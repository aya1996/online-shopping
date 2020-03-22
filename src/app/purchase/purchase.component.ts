import { Component, OnInit } from '@angular/core';
import {ServicenodeService} from '../services/servicenode.service'

  
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit  {

  

  products=[] ;
  total:number=0;
constructor( private services:ServicenodeService) { }

ngOnInit() {
 
 console.log("get the product")
 this.services.cart().subscribe(res=>{
   
       
  for ( let i in res)
 {
     this.products.push(res[i])
 }
 for ( let i in this.products)
 this.total+=this.products[i].price;


 })

 console.log(this.products)
 
}

deleteItem(id:string){
  alert("Are you sure ? you wont to delete ?");
  for ( let i in this.products)

  if(id==this.products[i]._id)
this.services.deleteProduct(this.products[i]._id).subscribe(res=>{
})}

  }

 

 

