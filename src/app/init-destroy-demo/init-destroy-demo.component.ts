import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'init-destroy-demo',
  templateUrl: './init-destroy-demo.component.html',
})
export class InitDestroyDemoComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log("On init - Called");
  }

  ngOnDestroy():void{
    console.log("On destory - Called");
  }
}
