import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm', { static: false }) loginForm: NgForm;
  
  constructor(private router: Router) { }

  public username: string;
  public password: string;
  
    ngOnInit() {
    }
  
    login(){
      if (!this.loginForm.valid) {
        alert("Please enter the details");
        return true;
      }
      if(this.username == 'admin' && this.password == 'admin'){
       this.router.navigate(["user"]);
      }else {
        alert("Invalid credentials");
      }
    }
    
    

}
