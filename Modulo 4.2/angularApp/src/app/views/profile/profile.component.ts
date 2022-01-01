import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  faTelegramPlane = faTelegramPlane;

  date: Date;

  contacts: number;

  user: User;

  userSubscription: Subscription;

  constructor(
    private authentication: AuthenticationService
  ) { }

  ngOnInit(): void {

    this.contacts = 0;

    let myInterval = setInterval(() => {
      this.contacts++;
      if(this.contacts === 53) {
        clearInterval(myInterval);
      }
    }, 10);

    this.date = new Date('2017');

    this.userSubscription = this.authentication.currentUserValue.subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
