import { Component, OnInit } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  msg : any;

  constructor() { }

  ngOnInit(): void {
  }
  
  click(){
   console.log("Click");
   this.msg="Welcome to Angular Coding"
  }

}
