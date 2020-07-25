import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {

  public idea: number;
  public luck: number;
  public knowledge: number;
  public miths: number;
  public damage_bonus: number;
  public magic: number;
  public sanity: number;

  constructor() { }

  ngOnInit() {
  }

}
