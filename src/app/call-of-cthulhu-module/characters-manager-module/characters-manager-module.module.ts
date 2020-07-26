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
import {MatTableModule} from "@angular/material/table";
import {MatDividerModule} from "@angular/material/divider";
import {MatGridListModule} from "@angular/material/grid-list";
import { ThirdPageComponent } from './create-character/third-page/third-page.component';
import { FourthPageComponent } from './create-character/fourth-page/fourth-page.component';
import { FifthPageComponent } from './create-character/fifth-page/fifth-page.component';
import { SixthPageComponent } from './create-character/sixth-page/sixth-page.component';
import { SeventhPageComponent } from './create-character/seventh-page/seventh-page.component';
import { EighthPageComponent } from './create-character/eighth-page/eighth-page.component';
import { NinethPageComponent } from './create-character/nineth-page/nineth-page.component';
import { TenthPageComponent } from './create-character/tenth-page/tenth-page.component';
import {MatSelectModule} from "@angular/material/select";
import {MatExpansionModule} from "@angular/material/expansion";


@NgModule({
  declarations: [
    CharactersManagerModuleComponent,
    FirstPageComponent,
    SecondInfoPageComponent,
    ThirdPageComponent,
    FourthPageComponent,
    FifthPageComponent,
    SixthPageComponent,
    SeventhPageComponent,
    EighthPageComponent,
    NinethPageComponent,
    TenthPageComponent
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
    MatTableModule,
    MatDividerModule,
    MatGridListModule,
    MatSelectModule,
    MatExpansionModule,
  ]
})
export class CharactersManagerModuleModule { }
