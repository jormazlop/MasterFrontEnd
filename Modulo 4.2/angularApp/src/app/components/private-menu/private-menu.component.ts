import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private-menu',
  templateUrl: './private-menu.component.html',
  styleUrls: ['./private-menu.component.scss']
})
export class PrivateMenuComponent implements OnInit {

  @Output('closeMenu') closeMenu: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.closeMenu.emit();
  }

  onClickGallery(): void {
    this.router.navigate(['/gallery']);
    this.closeMenu.emit();
  }

  onClickCrud(): void {
    this.router.navigate(['/crud']);
    this.closeMenu.emit();
  }

  onClickAbout(): void {
    this.router.navigate(['/about']);
    this.closeMenu.emit();
  }

  onClickFAQ(): void {
    this.router.navigate(['/faq']);
    this.closeMenu.emit();
  }

  onClickProfile(): void {
    this.router.navigate(['/profile']);
    this.closeMenu.emit();
  }

  onClickAdmin(): void {
    this.router.navigate(['/admin']);
    this.closeMenu.emit();
  }

}
