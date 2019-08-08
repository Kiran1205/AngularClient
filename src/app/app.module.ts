import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';  
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule,HttpRequest,HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthService } from './auth.service';
import { LoginService } from './login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,    
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
