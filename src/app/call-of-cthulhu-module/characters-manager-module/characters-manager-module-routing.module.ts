import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersManagerModuleComponent } from './characters-manager-module.component';

const routes: Routes = [{ path: '', component: CharactersManagerModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersManagerModuleRoutingModule { }
