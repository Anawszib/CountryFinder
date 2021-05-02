import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SearchedItem} from './domain/SearchedItem';
import {Observable} from 'rxjs';
import {Country} from './domain/Country';

const BASE_URL = 'https://restcountries.eu';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  constructor(private httpClient: HttpClient) {
  }

  findBy(item: SearchedItem): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${BASE_URL}/rest/v2/` + item.searchBy + `/` + item.searchParameter);
  }

  findCountryDetails(item: Country): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${BASE_URL}/rest/v2/name/` + item.name + `?fullText=true`);
  }
}
