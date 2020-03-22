import { Component, OnInit } from '@angular/core';
import {ServicenodeService} from '../services/servicenode.service'


@Component({
  selector: 'app-lab-top',
  templateUrl: './lab-top.component.html',
  styleUrls: ['./lab-top.component.css']
})
export class LabTopComponent implements OnInit {
     products=[ ] ;
  constructor( private services:ServicenodeService) { }
 
  ngOnInit() {
    
    console.log("get the product")
    this.services.laptop().subscribe(res=>{
      
          
    for ( let i in res)
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
  alert("This Item Added To Cart...");
}

}
