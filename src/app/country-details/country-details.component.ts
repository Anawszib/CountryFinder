import {Component, OnInit} from '@angular/core';
import {Country} from '../domain/Country';
import {ApiHttpService} from '../api-http.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  country: Country = new Country();
  currenciesToDisplay: string[];
  languagesToDisplay: string[];

  constructor(private apiHttp: ApiHttpService) {
  }

  ngOnInit(): void {
    this.country.name = localStorage.getItem('countryName');

    this.apiHttp.findCountryDetails(this.country)
      .subscribe(
        r => {
          this.country = r[0];
          this.getCurrencies();
          this.getLanguages();
        });
  }

  getCurrencies(): void {
    this.currenciesToDisplay = this.country.currencies.map(currency => {
      return currency.code;
    });
  }

  getLanguages(): void {
    this.languagesToDisplay = this.country.languages.map(language => {
      return language.name;
    });
  }
}
