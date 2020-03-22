import { Component, OnInit } from '@angular/core';
import {ServicenodeService} from '../services/servicenode.service'
@Component({
  selector: 'app-head-phones',
  templateUrl: './head-phones.component.html',
  styleUrls: ['./head-phones.component.css']
})
export class HeadPhonesComponent implements OnInit {

  products=[
    
  ] ;
constructor( private services:ServicenodeService) { }

ngOnInit() {
 
 console.log("get the product")
 this.services.Headphone().subscribe(res=>{
   
       
 for ( var i = 0 ;  i <res["length"]; i++)
 {
     this.products.push(res[i])
 }



 })

 console.log(this.products)
}
addToBag(id:any){
  for ( let i in this.products)

  if(id==this.products[i]._id)
this.services.addTocart(this.products[i].name,this.products[i].price,this.products[i].img).subscribe(res=>{
})
alert("This Item Added To Cart...")
}


}
