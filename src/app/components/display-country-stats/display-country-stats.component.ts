import { Component, Input } from '@angular/core';
import { Country } from '../../Country';

@Component({
  selector: 'app-display-country-stats',
  templateUrl: './display-country-stats.component.html',
  styleUrls: ['./display-country-stats.component.css'],
})
export class DisplayCountryStatsComponent {
  @Input() country!: Country;
}
