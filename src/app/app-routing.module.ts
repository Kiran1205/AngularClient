import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path:"home",component:HomeComponent  },
  { path:"setting",component:SettingComponent},
  { path:"login",component:LoginComponent},
  { path:"register",component:RegisterComponent},
  { path:'',component:HomeComponent   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
