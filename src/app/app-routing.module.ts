import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {RegisterPageComponent} from "./pages/register-page/register-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {AboutThisPageComponent} from "./pages/about-this-page/about-this-page.component";

const routes: Routes = [
  {path: 'about-this', component: AboutThisPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: '', component: HomePageComponent},
  { path: 'call-of-cthulhu',
    loadChildren: () => import('./call-of-cthulhu-module/call-of-cthulhu-module.module')
      .then(m => m.CallOfCthulhuModuleModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
