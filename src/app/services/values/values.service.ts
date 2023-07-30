import { Injectable } from '@angular/core';
import valuesData from '../../../assets/values-data.json';
import {Value} from "../../models/values/value.model";

// Annotation pour indiquer que cette classe peut être injectée comme un service
@Injectable({
  providedIn: 'root'
})
export class ValuesService {
  // Le constructeur est vide car il n'y a pas de dépendances à injecter
  constructor() { }

  // Méthode pour obtenir les données des valeurs depuis le fichier JSON local
  getValuesData(): Value[] {
    // Retourne les données JSON sous forme de tableau d'objets de type Value
    return valuesData as Value[];
  }
}
