import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  parentProp;
  tryParentProp = "this is try parent prop"
  title = 'myProject';
  recieveData(data){
    this.parentProp = data;
    console.log(this.parentProp)
  }
}



