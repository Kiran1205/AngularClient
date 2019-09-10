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
  isSlided = false;

constructor(
  private router:Router,
  private authService :AuthService) {

}

  ngOnInit(){

  }

  openNav(){

    if(this.isSlided){
      this.closeNav();
    }else{
      document.getElementById("mySidenav").style.width ="250px";
      document.getElementById("main").style.paddingLeft ="250px";
      this.isSlided = true;
    }

  }
  closeNav(){
    document.getElementById("mySidenav").style.width ="0";
      document.getElementById("main").style.paddingLeft ="0";
      this.isSlided = false;
  }

  OnLogOut()  {
    localStorage.removeItem('token');
  }

  ngDoCheck(){
    this.isAuthorized = this.authService.isAuthenticated();
    if(!this.isAuthorized && this.router.url!='/login'&& this.router.url!='/register') {
        this.router.navigate(['login']);
    }
  }
}
