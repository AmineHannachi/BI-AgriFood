import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredictService {

  private apiUrl = 'http://localhost:5000/predict-ridge';  // L'URL de ton backend Flask

  constructor(private http: HttpClient) {}

  predictCO2(data: any): Observable<{ prediction: number }> {
    return this.http.post<{ prediction: number }>(this.apiUrl, data);
  }
}
