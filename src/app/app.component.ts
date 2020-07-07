import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  display : boolean;

  constructor(){
    this.display = true;
  }

  toggle():void{
    this.display = !this.display;
  }

 
}
