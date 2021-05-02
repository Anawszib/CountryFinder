import {Component, OnInit} from '@angular/core';
import {Country} from '../domain/Country';
import {ApiHttpService} from '../api-http.service';
import {Router} from '@angular/router';
import {SearchedItem} from '../domain/SearchedItem';

@Component({
  selector: 'app-country-search-results',
  templateUrl: './country-search-results.component.html',
  styleUrls: ['./country-search-results.component.css']
})
export class CountrySearchResultsComponent implements OnInit {
  countries: Country[];
  searchingCriteria: SearchedItem = new SearchedItem();
  hasNoResults = false;

  constructor(private apiHttp: ApiHttpService, private router: Router) {
  }

  ngOnInit(): void {
    this.searchingCriteria.searchParameter = localStorage.getItem('searchedItem');
    this.searchingCriteria.searchBy = localStorage.getItem('searchedBy');

    this.apiHttp.findBy(this.searchingCriteria)
      .subscribe(
        r => this.countries = r,

        () => {
          if (this.countries === undefined) {
            this.hasNoResults = true;
          }
        }
      );
  }

  searchCountry(country: string): void {
    localStorage.setItem('countryName', country);
    this.router.navigate(['countryDetails']);
  }
}
