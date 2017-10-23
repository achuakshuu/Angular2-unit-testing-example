import { Component } from '@angular/core';
import { RouterModule,Router, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private router: Router){

  }
  nav(){
     this.router.navigate(['/home']);
  }
  login(){
    console.log("hai");
  }
}
