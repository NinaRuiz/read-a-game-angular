import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {CallOfCthulhuPageComponent} from "./pages/call-of-cthulhu-page/call-of-cthulhu-page.component";


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'call-of-cthulhu', component: CallOfCthulhuPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
