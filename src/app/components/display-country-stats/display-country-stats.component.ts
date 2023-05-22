import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../Country';

@Component({
  selector: 'app-display-country-stats',
  templateUrl: './display-country-stats.component.html',
  styleUrls: ['./display-country-stats.component.css'],
})
export class DisplayCountryStatsComponent {
  @Input() two!: Country;

  ngOnInit(): void {
    //console.log("display country stats: ", this.one)
  }
}
