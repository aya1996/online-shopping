import { Injectable } from '@angular/core';
import { HttpClient}    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  readonly root_url;
  constructor(private http:HttpClient) {
this.root_url="http://127.0.0.1:3000";
   }
  /*
  inside the services make get method 
  which take the url as param 
  */



  get(url:string)
  {
  console.log(url)
return this.http.get(`${this.root_url}/${url}`);

  }

  post(url:string,payload)
  {
    console.log('servies task')
    console.log(`${this.root_url}/${url}`)
return this.http.post(`${this.root_url}/${url}`,payload);
  }

  delete(url:string,payload)
  {
    console.log('hereeeeeeee')
    console.log(payload)
    return this.http.delete(`${this.root_url}/${url}`,payload);
  }



  //not sure about you both 
  patch(url:string,payload)
  {
    return this.http.patch(`${this.root_url}/${url}`,payload);
  }
}
