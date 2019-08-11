import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit,DoCheck{
  title = 'myfirstApp';
  isAuthorized = false;

constructor(
  private router:Router,
  private authService :AuthService) {

}

  ngOnInit(){

  }

  OnLogOut()  {
    localStorage.removeItem('token');
  }
  ngDoCheck(){
    this.isAuthorized = this.authService.isAuthenticated();
    if(!this.isAuthorized && this.router.url!='/login') {
        this.router.navigate(['login']);
    }
  }
}
