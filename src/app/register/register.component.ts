import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;
  
  constructor(private builder :FormBuilder,
    private authService : AuthService,
    private router : Router,
    private loginService : LoginService) { 

    }

  ngOnInit() {
    this.registerForm = this.builder.group({
      Name :['',Validators.required],
      password :['',Validators.required],
      repeatPassword :['',Validators.required],
      Email:['',Validators.required],
    });
  }
  

}
