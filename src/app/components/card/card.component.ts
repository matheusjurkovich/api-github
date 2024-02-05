import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() imgUrl: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() stars: number = 0;
  @Input() forks: number = 0;
  @Input() views: number = 0;
  @Input() language: string[] = [];
  @Input() repoUrl: string = '';
}
