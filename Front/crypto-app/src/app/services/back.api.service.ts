import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackApiService {
  private apiUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}

  postData(endpoint: string, body: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    return this.http.post(`${this.apiUrl}/${endpoint}`, body, { headers }).pipe(delay(1500));
  }
}
