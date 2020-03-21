import { Component, OnInit } from '@angular/core';
import {ServicenodeService} from '../services/servicenode.service'

  
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit  {

  

  products=[] ;
constructor( private services:ServicenodeService) { }

ngOnInit() {
 
 console.log("get the product")
 this.services.cart().subscribe(res=>{
   
       
 for ( var i = 0 ;  i <res["length"]; i++)
 {
     this.products.push(res[i])
 }



 })

 console.log(this.products)
 
}

    
  }

 

 

