import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-display-country-stats',
  templateUrl: './display-country-stats.component.html',
  styleUrls: ['./display-country-stats.component.css']
})
export class DisplayCountryStatsComponent {
  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getCountry().subscribe((country) => (console.log("country: ", country)));
  }
}

