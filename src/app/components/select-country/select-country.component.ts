import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.component.html',
  styleUrls: ['./select-country.component.css']
})
export class SelectCountryComponent {
  @Input() listOfCountries!: any;
  @Output() onSelectCountry: EventEmitter<string> = new EventEmitter();
  
  selectedCountry: string = '';
  countryControl = new FormControl();
  filteredCountries: Observable<string[]>;
  
  ngOnInit(): void {
    console.log("🚀 ~ file: select-country.component.ts:13 ~ SelectCountryComponent ~ listOfCountries:", this.listOfCountries)
    
  }

  constructor() {
    this.filteredCountries = this.countryControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterCountries(value))
    );
  }

  filterCountries(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.listOfCountries.filter((country : any) => country.toLowerCase().includes(filterValue));
  }

  onCountrySelected(event: any) {
    this.onSelectCountry.emit(this.selectedCountry);
    this.selectedCountry = '';
  }
}
