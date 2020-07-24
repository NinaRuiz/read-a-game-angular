import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersManagerModuleRoutingModule } from './characters-manager-module-routing.module';
import { CharactersManagerModuleComponent } from './characters-manager-module.component';


@NgModule({
  declarations: [CharactersManagerModuleComponent],
  imports: [
    CommonModule,
    CharactersManagerModuleRoutingModule
  ]
})
export class CharactersManagerModuleModule { }
