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
  one: Country = emptyCountry;

  selectCountry(testy: string) {
    this.countryService.getCountry(testy).subscribe((country) => {
      const topLevelDomain = Object.keys(country)[0];
      this.one = country[topLevelDomain];
    });
  }
}
