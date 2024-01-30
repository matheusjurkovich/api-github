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
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  totalPages: number = 0;
  query: string = ''; // Declare a variável query

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.query = params['q'] || 'valor-padrão';
      this.searchGitHub(this.query);
    });
  }

  searchGitHub(query: string, page: number = 1) {
    const apiUrl = 'https://api.github.com/search/repositories';
    const params = {
      q: query,
      page: page.toString(),
      per_page: this.itemsPerPage.toString(),
    };

    this.http.get(apiUrl, { params }).subscribe(
      (data: any) => {
        this.results = data;
        this.totalItems = data.total_count;
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this.currentPage = page;
        console.log('Dados da API do GitHub', data);
      },
      (error) => {
        console.error('Erro ao buscar dados da API do GitHub', error);
      }
    );
  }
}
