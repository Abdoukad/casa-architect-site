import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Realisations } from '../../models/nos-realisations/realisations.model';

@Injectable({
  providedIn: 'root'
})
export class RealisationsService {
  private readonly DATA_URL = 'assets/realisations-data.json';

  constructor(private http: HttpClient) {}

  public getRealisationsData(): Observable<Realisations> {
    return this.http.get<Realisations>(this.DATA_URL);
  }
}
