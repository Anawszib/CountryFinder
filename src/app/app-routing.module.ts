import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {CountrySearchResultsComponent} from './country-search-results/country-search-results.component';
import {CountryDetailsComponent} from './country-details/country-details.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'countrySearchResults', component: CountrySearchResultsComponent},
  {path: 'countryDetails', component: CountryDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
