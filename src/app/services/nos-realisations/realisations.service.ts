// Importations de modules nécessaires à la création du service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Realisations } from '../../models/nos-realisations/realisations.model';

// Annotation pour indiquer que cette classe peut être injectée comme un service
@Injectable({
  providedIn: 'root'
})
export class RealisationsService {
  // Définition de l'URL source des données JSON pour nos réalisations
  private readonly DATA_URL = 'assets/realisations-data.json';

  // Injection du client HTTP pour effectuer des requêtes
  constructor(private http: HttpClient) {}

  // Méthode pour obtenir les données de réalisations depuis l'URL définie
  public getRealisationsData(): Observable<Realisations> {
    // Effectue une requête GET pour récupérer les données, et renvoie un Observable
    return this.http.get<Realisations>(this.DATA_URL);
  }
}
