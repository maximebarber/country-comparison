import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent {
  constructor(private countryService: CountryService) {}
  country: any = {};

  ngOnInit(): void {
    /*     this.countryService.getCountry().subscribe((country) => {

          for ( var property in country ) {
            console.log( property ); 
          }
      const topLevelDomain = Object.keys(country)[0]
      console.log(topLevelDomain)
      console.log('country: ', country[topLevelDomain]);
      this.country = country[topLevelDomain];
      console.log("🚀 ~ file: display-country-stats.component.ts:24 ~ DisplayCountryStatsComponent ~ this.countryService.getCountry ~ this.country:", this.country)
    }); */
  }
  selectCountry(testy: any) {
    console.log(
      '🚀 ~ file: country.component.ts:10 ~ CountryComponent ~ selectCountry ~ testy:',
      testy
    );
    this.countryService.getCountry(testy).subscribe((country) => {
      const topLevelDomain = Object.keys(country)[0];
      console.log(topLevelDomain);
      console.log('country: ', country[topLevelDomain]);
      this.country = country[topLevelDomain];
      console.log(
        '🚀 ~ file: display-country-stats.component.ts:24 ~ DisplayCountryStatsComponent ~ this.countryService.getCountry ~ this.country:',
        this.country
      );
    });
  }
}
