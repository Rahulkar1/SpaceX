import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  abc(){
    console.log("HI simple Event ............");
  }
 x=0;
  addtoCart(){
    console.log("Added : ",this.x++);
  }
}
