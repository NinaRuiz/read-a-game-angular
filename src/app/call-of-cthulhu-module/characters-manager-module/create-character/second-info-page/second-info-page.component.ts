import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-info-page',
  templateUrl: './second-info-page.component.html',
  styleUrls: ['./second-info-page.component.css']
})
export class SecondInfoPageComponent implements OnInit {

  public FUE = 0;
  public CON = 0;
  public TAM = 0;

  public DES = 0;
  public APA = 0;
  public COR = 0;

  public INT = 0;
  public POD = 0;
  public EDU = 0;

  constructor() { }

  ngOnInit() {
  }

}
