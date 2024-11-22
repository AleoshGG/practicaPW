import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {}

  private apiUrl = 'https://rickandmortyapi.com/api/location';

  getLocations(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}
