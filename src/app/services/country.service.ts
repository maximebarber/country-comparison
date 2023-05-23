import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AllCountries, CountryWithTopLevelDomain } from '../Country'

const httpOptions = {
  headers: new HttpHeaders  ({
    //'Content-Type': 'application/json'
    'Authorization': `Bearer ${environment.countryApiKey}` 
  })
}

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl = 'https://countryapi.io/api';

  constructor(private http: HttpClient) {}

  getCountry(countryName: string): Observable<CountryWithTopLevelDomain> {
    return this.http.get<CountryWithTopLevelDomain>(`${this.apiUrl}/name/${countryName}`, httpOptions);
  }

  getAllCountries(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/all`, httpOptions);
  }
}
