import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  errorMessage = '';
  constructor(private builder :FormBuilder,
    private authService : AuthService,
    private router : Router,
    private loginService : LoginService) { 

    }

  ngOnInit() {
     if (this.authService.isAuthenticated()) {      
      this.router.navigate(['home']);
    }
    debugger;

    this.loginForm = this.builder.group({
      userName :['',Validators.required],
      password :['',Validators.required],
    });
  }

  onLogin()  {

    if(!this.loginForm.valid)
        return;

      this.errorMessage ='';

      this.loginService.login(this.loginForm.value).subscribe((result : any ) =>{
        this.errorMessage ="came back";
          
      },(error : HttpResponse<any>) => {

      });

  }

}
