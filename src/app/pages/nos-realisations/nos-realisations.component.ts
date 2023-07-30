
import { Component, ElementRef, OnInit } from '@angular/core';
import { RealisationsService } from 'src/app/services/nos-realisations/realisations.service';
import { Realisations } from 'src/app/models/nos-realisations/realisations.model';
import { MenuScrollService } from 'src/app/services/menu-scroll.service';


@Component({
  selector: 'app-nos-realisations',
  templateUrl: './nos-realisations.component.html',
  styleUrls: ['./nos-realisations.component.css']
})
export class NosRealisationsComponent implements OnInit {
  public realisations!: Realisations; // Modèle de données pour les réalisations
  public selectedProject: any; // Projet sélectionné dans la modal
  selectedImage!: string;

  // Injection des dépendances dans le constructeur
  constructor(private realisationsService: RealisationsService,
              private _elementRef: ElementRef,
              private _menuScrollService : MenuScrollService) { }

  ngOnInit(): void {
    // Appel à getRealisationsData() qui récupère les données des réalisations du service RealisationsService
    this.realisationsService.getRealisationsData().subscribe((data: Realisations) => {
      this.realisations = data; // Attribution des données reçues à la variable 'realisations'
    });

    // Recherche d'un élément avec la classe '.container-engagement'
    const menuContainer = this._elementRef.nativeElement.querySelector('.container-engagement');
    if (menuContainer) {
      const menuId = menuContainer.id; // Récupération de l'ID de l'élément
      this._menuScrollService.setEngagementDialog(menuId); // Passage de l'ID à la méthode setEngagementDialog du service MenuScrollService
    }
  }

  // Méthode pour ouvrir la modal
  openModal(image: string, project: any): void {
    this.selectedImage = image; // Attribution de l'image du projet sélectionné à la variable 'selectedImage'
    this.selectedProject = project; // Attribution du projet sélectionné à la variable 'selectedProject'

    // Recherche de l'élément avec l'ID 'modal'
    const modal = document.getElementById('modal');
    if (modal) {
      modal.style.display = 'block'; // Affichage de la modal
    }
  }

  // Méthode pour fermer la modal
  closeModal() {
    this.selectedProject = null; // Réinitialisation de la variable 'selectedProject'
    document.getElementById("modal")!.style.display = "none"; // Masquage de la modal
  }
}
