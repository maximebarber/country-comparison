import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country, emptyCountry } from '../../Country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent {
  constructor(private countryService: CountryService) {}
  country: Country = emptyCountry;

  selectCountry(selectedCountry: string) {
    this.countryService.getCountry(selectedCountry).subscribe((countryRetrieved) => {
      const topLevelDomain = Object.keys(countryRetrieved)[0];
      this.country = countryRetrieved[topLevelDomain];
    });
  }
}
