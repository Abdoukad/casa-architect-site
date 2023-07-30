import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Value } from 'src/app/models/values/value.model';

@Component({
  selector: 'app-value-item',
  templateUrl: './value-item.component.html',
  styleUrls: ['./value-item.component.css']
})
export class ValueItemComponent {
  // Déclare une propriété d'entrée 'value' de type Value pour recevoir les données du composant parent
  @Input() value!: Value;
  // Déclare un événement de sortie 'hovered' pour communiquer l'état de survol avec le composant parent
  @Output() hovered = new EventEmitter<boolean>();

  // Crée une propriété locale pour stocker l'état de survol de l'élément
  isHovered = false;

  // Méthode déclenchée lorsque la souris entre dans la zone de l'élément
  onMouseEnter() {
    // Met à jour la propriété isHovered à true
    this.isHovered = true;
    // Émet l'événement hovered avec la valeur true pour informer le composant parent
    this.hovered.emit(true);
  }

  // Méthode déclenchée lorsque la souris quitte la zone de l'élément
  onMouseLeave() {
    // Met à jour la propriété isHovered à false
    this.isHovered = false;
    // Émet l'événement hovered avec la valeur false pour informer le composant parent
    this.hovered.emit(false);
  }
}
