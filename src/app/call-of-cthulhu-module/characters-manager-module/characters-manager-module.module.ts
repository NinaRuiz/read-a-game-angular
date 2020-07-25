import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersManagerModuleRoutingModule } from './characters-manager-module-routing.module';
import { CharactersManagerModuleComponent } from './characters-manager-module.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {FirstPageComponent} from "./create-character/first-page/first-page.component";
import { SecondInfoPageComponent } from './create-character/second-info-page/second-info-page.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    CharactersManagerModuleComponent,
    FirstPageComponent,
    SecondInfoPageComponent
  ],
  imports: [
    CommonModule,
    CharactersManagerModuleRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatOptionModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
  ]
})
export class CharactersManagerModuleModule { }
