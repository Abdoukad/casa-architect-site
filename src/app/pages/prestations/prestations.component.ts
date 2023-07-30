// Importe les dépendances nécessaires
import { Component, ElementRef, OnInit } from '@angular/core';
import { MenuScrollService } from 'src/app/services/menu-scroll.service';
import { PrestationsService } from 'src/app/services/prestations/prestations.service';

// Décorateur pour définir les propriétés du composant Angular
@Component({
  selector: 'app-prestations',  // Le nom de la balise personnalisée que vous utiliserez pour représenter ce composant dans le HTML
  templateUrl: './prestations.component.html',  // Le chemin vers le fichier HTML de ce composant
  styleUrls: ['./prestations.component.css']  // Le chemin vers le fichier CSS de ce composant
})
export class PrestationsComponent implements OnInit {
  // Propriété pour stocker les données des prestations
  public prestations: any[] = [];

  // Le constructeur initialise les services dont ce composant a besoin
  constructor(public prestationsService: PrestationsService,  // Service pour obtenir les données des prestations
              private _elementRef: ElementRef,  // Service pour accéder aux éléments DOM de ce composant
              private _menuScrollService : MenuScrollService) {  // Service pour gérer le défilement du menu
  }

  // Méthode appelée lorsque le composant est initialisé
  ngOnInit(): void {
    // S'abonne à l'Observable retourné par le service PrestationsService
    this.prestationsService.getPrestations().subscribe((data: any[]) => {
      // Met à jour la propriété 'prestations' avec les données récupérées
      this.prestations = data;
    });

    // Recherche le conteneur du menu dans le DOM
    const menuContainer = this._elementRef.nativeElement.querySelector('.container-prestations');

    // Si le conteneur du menu a été trouvé
    if (menuContainer) {
      const menuId = menuContainer.id;  // Obtient l'ID du conteneur du menu

      // Utilise le service MenuScrollService pour enregistrer l'ID du conteneur de menu
      this._menuScrollService.setServiceDialog(menuId);
    }
  }
}
