import { Component, ElementRef, OnInit } from '@angular/core';
import { MenuScrollService } from 'src/app/services/menu-scroll.service';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit{
  // Utilisation du constructeur pour injecter les services nécessaires pour ce composant
  constructor(
    private _elementRef: ElementRef,  // Service pour accéder aux éléments DOM de ce composant
    private _menuScrollService : MenuScrollService  // Service pour gérer le défilement du menu
  ){}


  ngOnInit(): void {
    // Recherche le conteneur du menu dans le DOM
    const menuContainer = this._elementRef.nativeElement.querySelector('.container-demarche');

    // Si le conteneur du menu a été trouvé
    if (menuContainer) {
      const menuId = menuContainer.id;  // Récupère l'ID du conteneur du menu

      // Utilise le service MenuScrollService pour enregistrer l'ID du conteneur de menu
      this._menuScrollService.setDemarcheDialog(menuId);
    }
  }
}
