import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  @ViewChild("menuPublicModal", {static: false}) menuPublicModal: TemplateRef<any>;

  @ViewChild("menuPrivateModal", {static: false}) menuPrivateModal: TemplateRef<any>;

  title = 'angularApp';

  userAdmin: boolean;

  userSubscription: Subscription;

  constructor(
    private authentication: AuthenticationService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.userAdmin = false;

    this.userSubscription = this.authentication.currentUserValue.subscribe(user => {
      this.userAdmin = user.type === 'admin'? true: false;
    });

  }

  openPublicMenu(): void {
    this.modalService.open(this.menuPublicModal, { windowClass: 'no-animation-modal'}).result.then( r => {
    }, error => {});
  }

  openPrivateMenu(): void {
    this.modalService.open(this.menuPrivateModal, { windowClass: 'no-animation-modal'}).result.then( r => {
    }, error => {});
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
