import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  constructor(private http: HttpClient) { }

  login(name, PIN) {

    const data = {
      name: name,
      PIN: PIN
    };

    const json = JSON.stringify(data);

    return this.http.post('http://localhost:2000/login/', json).subscribe((data:any) =>{
      console.log(data);
    }, error => {console.log(error)});
  }

}
