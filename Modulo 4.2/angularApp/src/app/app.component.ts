import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'angularApp';

  userAdmin: boolean;

  userSubscription: Subscription;

  constructor(
    private authentication: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.userAdmin = false;

    this.userSubscription = this.authentication.currentUserValue.subscribe(user => {
      this.userAdmin = user.type === 'admin'? true: false;
    });

  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
