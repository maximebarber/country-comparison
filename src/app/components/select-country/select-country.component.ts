import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.component.html',
  styleUrls: ['./select-country.component.css']
})
export class SelectCountryComponent {
  @Output() onSelectCountry: EventEmitter<string> = new EventEmitter();

  selectedCountry!: string;
  onSubmit() {
    this.onSelectCountry.emit(this.selectedCountry);
    this.selectedCountry = '';
  }
}
