import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallOfCthulhuModuleRoutingModule } from './call-of-cthulhu-module-routing.module';
import { CallOfCthulhuModuleComponent } from './call-of-cthulhu-module.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [CallOfCthulhuModuleComponent],
  imports: [
    CommonModule,
    CallOfCthulhuModuleRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class CallOfCthulhuModuleModule { }
