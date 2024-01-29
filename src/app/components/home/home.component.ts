import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onKeydown(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      window.location.href =
        '/search?q=' + (event.target as HTMLInputElement).value;
    }
  }
}
