import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User> = new BehaviorSubject({
    username:'',
    password: '',
    type: ''
  });

  constructor() { }

  public get currentUserValue(): BehaviorSubject<User> {
    return this.currentUserSubject;
  }

  login(username: string, password: string): boolean {

    if(username === 'master8@lemoncode.net' && password === '12345678') {

      this.currentUserSubject.next({
        username:'master8@lemoncode.net',
        password: '12345678',
        type: 'admin'
      });
      localStorage.setItem('currentUser', 'master8');
      return true;
    }

    return false;
  }

  isAuthenticated(): boolean {
    return this.currentUserSubject.getValue().type === 'admin'? true: false;
  }

  logout() {
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next({
        username:'',
        password: '',
        type: ''
      });
  }

}
