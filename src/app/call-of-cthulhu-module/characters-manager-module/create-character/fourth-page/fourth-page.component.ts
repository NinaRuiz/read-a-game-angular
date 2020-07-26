import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-page',
  templateUrl: './fourth-page.component.html',
  styleUrls: ['./fourth-page.component.css']
})
export class FourthPageComponent implements OnInit {

  public outputAge: number = 20;
  public finalAge: number;
  public age: number;

  public hideFinalAge: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
