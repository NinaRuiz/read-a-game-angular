import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {CallOfCthulhuPageComponent} from "./pages/call-of-cthulhu/call-of-cthulhu-page/call-of-cthulhu-page.component";
import {CharactersManagerPageComponent} from "./pages/call-of-cthulhu/characters-manager-page/characters-manager-page.component";
import {FirstPageComponent} from "./pages/call-of-cthulhu/create-character/first-page/first-page.component";
import {SecondPageComponent} from "./pages/call-of-cthulhu/create-character/second-page/second-page.component";


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'call-of-cthulhu/character-manager/create-character-2', component: SecondPageComponent},
  {path: 'call-of-cthulhu/character-manager/create-character-1', component: FirstPageComponent},
  {path: 'call-of-cthulhu/character-manager', component: CharactersManagerPageComponent},
  {path: 'call-of-cthulhu', component: CallOfCthulhuPageComponent},
  { path: 'call-of-cthulhu', loadChildren: () => import('./call-of-cthulhu-module/call-of-cthulhu-module.module').then(m => m.CallOfCthulhuModuleModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
