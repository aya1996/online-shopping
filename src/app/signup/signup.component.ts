import { Component, OnInit } from '@angular/core';
import {ServicenodeService} from '../services/servicenode.service'
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private services:ServicenodeService,private route:ActivatedRoute,private router:Router) { }
  register(event){
  
    event.preventDefault()
    const target = event.target.parentNode
    const username= target.querySelector('#username').value
    const email = target.querySelector('#email').value
    const password = target.querySelector('#password').value
    const age = target.querySelector('#age').value
    const gender = target.querySelector('#gender').value
   const img="../../assets/coco/default.jpg"
   console.log(password)
    this.services.createUser(username,email,age,password,gender,img).subscribe(res=>{
      console.log(res)
      
     
   
    
    })
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/login']);
  }); 
}
  ngOnInit() {
  }
 
}