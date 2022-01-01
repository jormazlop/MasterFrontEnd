import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  classActived: number;

  constructor() { }

  ngOnInit(): void {
    this.classActived = 0;
  }

  buttonClicked(numero: number): void {
    this.classActived = numero===this.classActived? 0 : numero;
  }

}
