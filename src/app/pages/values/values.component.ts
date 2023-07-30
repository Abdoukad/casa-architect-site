 import { Component, ElementRef, OnInit } from '@angular/core';
import { Value } from 'src/app/models/values/value.model';
import { ValuesService } from 'src/app//services/values/values.service';
import { MenuScrollService } from 'src/app/services/menu-scroll.service';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
// Classe ValuesComponent qui implémente OnInit pour initialiser les données
export class ValuesComponent implements OnInit {
  values: Value[] = []; // Crée un tableau vide pour stocker les valeurs
  isTitleBold = false; // Initialise la propriété pour contrôler si le titre est en gras

  // Injecte le ValuesService dans le constructeur
  constructor(private valuesService: ValuesService,
    private _elementRef: ElementRef,
    private _menuScrollService : MenuScrollService) { }

  // Fonction ngOnInit pour initialiser les données des valeurs
  ngOnInit() {
    this.values = this.valuesService.getValuesData(); // Récupère les données des valeurs depuis le service
    const menuContainer = this._elementRef.nativeElement.querySelector('.container-values');
    if (menuContainer) {
      const menuId = menuContainer.id;
      this._menuScrollService.setValueDialog(menuId);
    }
  }

  // Fonction appelée lorsque la souris survole un élément de valeur
  onTitleHover(isHovered: boolean) {
    this.isTitleBold = isHovered; // Met à jour la propriété pour déterminer si le titre doit être en gras
  }
}
