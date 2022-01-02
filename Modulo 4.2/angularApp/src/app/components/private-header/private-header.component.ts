import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss']
})
export class PrivateHeaderComponent implements OnInit {

  username:string | null;

  @Output('openMenu') openMenu: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private router: Router,
    private authentication: AuthenticationService
  ) { }

  ngOnInit(): void {

    this.username = localStorage.getItem('currentUser')? localStorage.getItem('currentUser'): '';

  }

  home(): void {
    this.router.navigate(['/home']);
  }

  logout(): void {
    this.authentication.logout();
    this.router.navigate(['/home']);
  }

  menu(): void {
    this.openMenu.emit();
  }

}
