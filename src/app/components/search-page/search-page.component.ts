import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  results: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    const query = this.route.snapshot.queryParamMap.get('q');
    this.http
      .get(`https://api.github.com/search/repositories?q=${query}`)
      .subscribe(
        (data) => (this.results = data),
        (error) => console.error(error)
      );
  }
}
