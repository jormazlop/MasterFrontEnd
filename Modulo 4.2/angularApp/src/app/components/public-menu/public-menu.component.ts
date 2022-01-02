import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-menu',
  templateUrl: './public-menu.component.html',
  styleUrls: ['./public-menu.component.scss']
})
export class PublicMenuComponent implements OnInit {

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

}
