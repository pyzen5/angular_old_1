import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
  apiUrl = environment.api;
  constructor(private http: HttpClient) { }

  getCustomers() {
    console.log(this.apiUrl);
    return this.http.get(this.apiUrl + '/getCustomers');
  }
}
