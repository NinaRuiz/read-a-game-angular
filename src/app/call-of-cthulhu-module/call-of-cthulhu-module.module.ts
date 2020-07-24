import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallOfCthulhuModuleRoutingModule } from './call-of-cthulhu-module-routing.module';
import { CallOfCthulhuModuleComponent } from './call-of-cthulhu-module.component';


@NgModule({
  declarations: [CallOfCthulhuModuleComponent],
  imports: [
    CommonModule,
    CallOfCthulhuModuleRoutingModule
  ]
})
export class CallOfCthulhuModuleModule { }
