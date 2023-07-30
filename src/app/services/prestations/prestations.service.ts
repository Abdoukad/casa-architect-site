import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import prestationsData from '../../../assets/prestations-data.json';

// Utilisez le décorateur Injectable pour indiquer que ce service peut être injecté dans d'autres classes
@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  // Définissez la méthode getPrestations qui retourne les données JSON importées sous forme d'Observable
  getPrestations(): Observable<any> {
    // Utilisez la fonction 'of' pour créer un Observable à partir des données JSON importées
    return of(prestationsData);
  }
}
