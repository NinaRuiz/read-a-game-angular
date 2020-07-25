import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersManagerModuleComponent } from './characters-manager-module.component';
import {FirstPageComponent} from "./create-character/first-page/first-page.component";
import {SecondInfoPageComponent} from "./create-character/second-info-page/second-info-page.component";
import {ThirdPageComponent} from "./create-character/third-page/third-page.component";

const routes: Routes = [
  { path: 'create-character-three', component: ThirdPageComponent},
  { path: 'create-character-two', component: SecondInfoPageComponent},
  { path: 'create-character-one', component: FirstPageComponent},
  { path: '', component: CharactersManagerModuleComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersManagerModuleRoutingModule { }
