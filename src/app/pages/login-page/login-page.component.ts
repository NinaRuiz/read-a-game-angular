import { Component, OnInit } from '@angular/core';
import {ProfilesService} from "../../services/profiles.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private profilesService: ProfilesService) { }

  public name: string;
  public pin: number;

  ngOnInit() {
  }

  onSubmit() {
    const res = this.profilesService.login(this.name, this.pin);
    console.log(res);
  }

}
