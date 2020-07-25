import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersManagerModuleComponent } from './characters-manager-module.component';
import {FirstPageComponent} from "./create-character/first-page/first-page.component";
import {SecondInfoPageComponent} from "./create-character/second-info-page/second-info-page.component";
import {ThirdPageComponent} from "./create-character/third-page/third-page.component";
import {FourthPageComponent} from "./create-character/fourth-page/fourth-page.component";
import {FifthPageComponent} from "./create-character/fifth-page/fifth-page.component";
import {SixthPageComponent} from "./create-character/sixth-page/sixth-page.component";
import {SeventhPageComponent} from "./create-character/seventh-page/seventh-page.component";
import {EighthPageComponent} from "./create-character/eighth-page/eighth-page.component";
import {NinethPageComponent} from "./create-character/nineth-page/nineth-page.component";
import {TenthPageComponent} from "./create-character/tenth-page/tenth-page.component";

const routes: Routes = [
  { path: 'create-character-ten', component: TenthPageComponent},
  { path: 'create-character-nine', component: NinethPageComponent},
  { path: 'create-character-eight', component: EighthPageComponent},
  { path: 'create-character-seven', component: SeventhPageComponent},
  { path: 'create-character-six', component: SixthPageComponent},
  { path: 'create-character-five', component: FifthPageComponent},
  { path: 'create-character-four', component: FourthPageComponent},
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
