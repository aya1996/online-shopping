import { Component, OnInit } from '@angular/core';
import {ServicenodeService} from '../services/servicenode.service'

@Component({
  selector: 'app-lab-top',
  templateUrl: './lab-top.component.html',
  styleUrls: ['./lab-top.component.css']
})
export class LabTopComponent implements OnInit {
     product=[] ;
  constructor( private services:ServicenodeService) { }

  ngOnInit() {
    
    console.log("get the product")
    this.services.product().subscribe(res=>{
      
      this.product.push(res);
      console.log (res);
      console.log (this.product);
    })
  }

}
