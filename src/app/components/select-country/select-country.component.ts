import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.component.html',
  styleUrls: ['./select-country.component.css']
})
export class SelectCountryComponent {
  @Output() onSelectCountry: EventEmitter<string> = new EventEmitter();

  text!: string;
  onSubmit() {
    console.log("this.text: ", this.text)
    this.onSelectCountry.emit(this.text);
  }
}
