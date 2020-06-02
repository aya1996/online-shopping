import { Component, OnInit } from '@angular/core';
import {ServicenodeService} from '../services/servicenode.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-and-register',
  templateUrl: './login-and-register.component.html',
  styleUrls: ['./login-and-register.component.css']
})
export class LoginAndRegisterComponent implements OnInit {

  constructor(private services:ServicenodeService, 
    private router: Router) { }

ngOnInit() {
}

loginUser(event) {
event.preventDefault()
const target = event.target
const username = target.querySelector('#username').value
const password = target.querySelector('#password').value

this.services.login().subscribe(res=> {
  for ( let i in res)
if(username == res[i].username && password==res[i].password) {
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate(['/home']);
}); 
}
if(username=='admin' && password=='admin')
{
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate(['/dashboard']);
}); 
}

 else {
window.alert('Invalid username or password')
}
})
console.log(username, password)
}


}
