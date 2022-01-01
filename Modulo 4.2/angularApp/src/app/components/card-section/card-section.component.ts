import { Component, Input, OnInit } from '@angular/core';
import { Section } from 'src/app/models/section.model';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.scss']
})
export class CardSectionComponent implements OnInit {

  @Input() section: Section;

  constructor() { }

  ngOnInit(): void {
  }

}
