import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [
    {id: 1, name: "Ranga"},
    {id: 2, name: "Vineel"}
  ]

  constructor() { }

  getUsers(){
    return of(this.users);
  }
}
