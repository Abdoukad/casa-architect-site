
import { Injectable } from '@angular/core';
import presentationData from '../../../assets/presentation-data.json';

// Décorateur pour indiquer qu'il s'agit d'un service Angular injectable
@Injectable({
  providedIn: 'root'
})
export class PresentationService {
  constructor() { }

  // Méthode pour récupérer les données de présentation à partir du fichier JSON
  getPresentationData() {
    return presentationData;
  }


}
