import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path:"home",component:HomeComponent  },
  { path:"setting",component:SettingComponent},
  { path:"login",component:LoginComponent},
  { path:'',component:HomeComponent   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
