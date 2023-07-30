import { Component, ElementRef, OnInit } from '@angular/core';
import { MenuScrollService } from 'src/app/services/menu-scroll.service';
import { PresentationService } from 'src/app/services/presentation/presentation.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  presentationData: any;  // Variable pour stocker les données de présentation
  partners: any;  // Variable pour stocker les logos des partenaires

  // Le constructeur initialise les services dont ce composant a besoin
  constructor(private presentationService: PresentationService,  // Service pour obtenir les données de présentation
              private _elementRef: ElementRef,  // Service pour accéder aux éléments DOM de ce composant
              private _menuScrollService : MenuScrollService) {  // Service pour gérer le défilement du menu
  }


  ngOnInit(): void {
    // Récupère les données de présentation à partir du service et les stocke dans la propriété presentationData
    this.presentationData = this.presentationService.getPresentationData();

    // Recherche le conteneur du menu dans le DOM
    const menuContainer = this._elementRef.nativeElement.querySelector('.container-presentation');

    // Si le conteneur du menu a été trouvé
    if (menuContainer) {
      const menuId = menuContainer.id;  // Obtient l'ID du conteneur du menu

      // Utilise le service MenuScrollService pour enregistrer l'ID du conteneur de menu
      this._menuScrollService.setPresentationDialog(menuId);
    }
  }
}
