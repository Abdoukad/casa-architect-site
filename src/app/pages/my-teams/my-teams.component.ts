import {Component, ElementRef, OnInit} from '@angular/core';
import {MenuScrollService} from 'src/app/services/menu-scroll.service';


@Component({
  selector: 'app-my-teams',
  templateUrl: './my-teams.component.html',
  styleUrls: ['./my-teams.component.css']
})

// Déclare la classe du composant
export class MyTeamsComponent implements OnInit {
  // Les dépendances fournies ici seront injectées par Angular au moment de la création du composant.
  constructor(private _elementRef: ElementRef,
              private _menuScrollService: MenuScrollService) {
  }

  // Une méthode de cycle de vie d'Angular qui est appelée une fois que Angular a terminé d'initialiser le composant
  ngOnInit(): void {
    // Cherche un élément avec la classe 'container-team' dans le template du composant
    const menuContainer = this._elementRef.nativeElement.querySelector('.container-team');
    if (menuContainer) { // Si un tel élément existe
      const menuId = menuContainer.id; // Obtient l'ID de cet élément
      // Utilise le service MenuScrollService pour définir cet élément comme le conteneur de l'équipe
      this._menuScrollService.setTeamDialog(menuId);
    }
  }

}
