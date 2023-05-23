import { Component, OnInit } from '@angular/core';
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
  listOfCountries!: any;

  ngOnInit(): void {
    this.countryService
      .getAllCountries()
      .subscribe(
        (result) => {
          console.log('result: ', result)
          this.listOfCountries = Object.keys(result).map((key) => {
            return result[key].name
          });
          console.log("🚀 ~ file: country.component.ts:26 ~ CountryComponent ~ this.listOfCountries=Object.keys ~ this.listOfCountries:", this.listOfCountries)
        }
      );
  }

  selectCountry(selectedCountry: string) {
    this.countryService
      .getCountry(selectedCountry)
      .subscribe((countryRetrieved) => {
        const topLevelDomain = Object.keys(countryRetrieved)[0];
        this.country = countryRetrieved[topLevelDomain];
      });
  }
}
