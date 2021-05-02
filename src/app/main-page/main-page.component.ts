import {Component, OnInit} from '@angular/core';
import {ApiHttpService} from '../api-http.service';
import {SearchedItem} from '../domain/SearchedItem';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  searchingCriteria: SearchedItem = new SearchedItem();


  constructor(private apiHttp: ApiHttpService, private router: Router) {
  }

  ngOnInit(): void {
    this.searchingCriteria.searchBy = `name`;
  }

  searchItem(): void {
    localStorage.setItem('searchedItem', this.searchingCriteria.searchParameter);
    localStorage.setItem('searchedBy', this.searchingCriteria.searchBy);
    this.router.navigate(['countrySearchResults']);
  }

  changeActiveTab(tabNumber): void {
    switch (tabNumber){
      case '1':
        this.searchingCriteria.searchBy =  `capital`;
        break;
      case '2':
        this.searchingCriteria.searchBy = 'currency';
        break;
      default:
        this.searchingCriteria.searchBy = `name`;
        break;
    }
  }
}
