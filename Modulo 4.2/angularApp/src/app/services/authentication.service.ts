import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { of, merge } from 'rxjs';
import { mapTo, delay } from 'rxjs/operators';

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

  login(username: string, password: string): Observable<boolean> {

    const example = of(null);

    if(username === 'master8@lemoncode.net' && password === '12345678') {

      this.currentUserSubject.next({
        username:'master8@lemoncode.net',
        password: '12345678',
        type: 'admin'
      });
      localStorage.setItem('currentUser', 'master8');
      return example.pipe(mapTo(true), delay(2000));
    }

    return example.pipe(mapTo(false), delay(2000));
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
