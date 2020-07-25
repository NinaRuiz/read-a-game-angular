import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallOfCthulhuModuleComponent } from './call-of-cthulhu-module.component';

const routes: Routes = [
  { path: '', component: CallOfCthulhuModuleComponent },
  { path: 'characters-manager',
    loadChildren: () => import('./characters-manager-module/characters-manager-module.module').then(m => m.CharactersManagerModuleModule) }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallOfCthulhuModuleRoutingModule { }
