// Importation des classes nécessaires des bibliothèques Angular
import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

// Importation du service personnalisé pour le défilement du menu
import { MenuScrollService } from 'src/app/services/menu-scroll.service';

// Décorateur de composant avec métadonnées
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

// Exportation de la classe NavbarComponent et implémentation de l'interface OnInit
export class NavbarComponent implements OnInit  {

  // Déclaration des variables qui contiendront les valeurs de référence des différentes sections
  presentationValue: any;
  valuesValue: any;
  serviceValue: any;
  contactValue: any;
  demarcheValue: any;
  engagementValue: any;
  realisationValue: any;
  teamValue: any;
  topicValue: any;

  // Constructeur qui injecte deux services, ViewportScroller et MenuScrollService
  constructor(private _viewportScroller: ViewportScroller,
              private _menuScrollService : MenuScrollService) { }

  // Hook de cycle de vie ngOnInit pour obtenir les valeurs de référence des différentes sections lors de l'initialisation du composant
  ngOnInit(): void {
    this._menuScrollService.getConactDialog().subscribe((el: string) => this.contactValue = el);
    this._menuScrollService.getPresentationDialog().subscribe((el: string) => this.presentationValue = el);
    this._menuScrollService.getServiceDialog().subscribe((el: string) => this.serviceValue = el);
    this._menuScrollService.getDemarcheDialog().subscribe((el: string) => this.demarcheValue = el);
    this._menuScrollService.getEngagementDialog().subscribe((el: string) => this.engagementValue = el);
    this._menuScrollService.getRealisationDialog().subscribe((el: string) => this.realisationValue = el);
    this._menuScrollService.getTeamDialog().subscribe((el: string) => this.teamValue = el);
    this._menuScrollService.getValueDialog().subscribe((el: string) => this.valuesValue = el);
    this._menuScrollService.getTopicDialog().subscribe((el: string) => this.topicValue = el);
  }

  // Titre de l'entreprise affiché sur la barre de navigation
  title = 'CASA-ARCHI';

  // Booléen indiquant si le menu est visible ou non
  showNav = false;

  // Booléen indiquant si une animation est en cours ou non
  animationInProgress = false;

  // Méthode appelée lorsque l'utilisateur clique sur le bouton hamburger
  toggleNav() {
    // Si aucune animation n'est en cours
    if (!this.animationInProgress) {
      // Marquer l'animation comme en cours
      this.animationInProgress = true;
      // Inverser la valeur de showNav pour afficher ou cacher le menu
      this.showNav = !this.showNav;
      // Attendre la fin de l'animation avant de la marquer comme terminée
      setTimeout(() => {
        this.animationInProgress = false;
      }, 500); // La durée de l'animation en ms
    }
  }

  // Méthode appelée lorsque l'utilisateur clique sur un lien de menu
  closeNav() {
    // Si aucune animation n'est en cours
    if (!this.animationInProgress) {
      // Marquer l'animation comme en cours
      this.animationInProgress = true;
      // Cacher le menu
      this.showNav = false;
      // Attendre la fin de l'animation avant de la marquer comme terminée
      setTimeout(() => {
        this.animationInProgress = false;
      }, 500); // La durée de l'animation en ms
    }
  }

  // Méthodes pour défiler jusqu'aux sections respectives sur la page Web
  scrollToPresentation() {
    if (this.presentationValue) { this._viewportScroller.scrollToAnchor(this.presentationValue); }
  }
  scrollToValeurs() {
    if (this.valuesValue) { this._viewportScroller.scrollToAnchor(this.valuesValue); }
  }
  scrollToService() {
    if (this.serviceValue) { this._viewportScroller.scrollToAnchor(this.serviceValue); }
  }
  scrollToDemarche() {
    if (this.demarcheValue) { this._viewportScroller.scrollToAnchor(this.demarcheValue); }
  }
  scrollToEngagement() {
    if (this.engagementValue) { this._viewportScroller.scrollToAnchor(this.engagementValue); }
  }
  scrollToRealisation() {
    if (this.realisationValue) { this._viewportScroller.scrollToAnchor(this.realisationValue); }
  }
  scrollToTeam() {
    if (this.teamValue) { this._viewportScroller.scrollToAnchor(this.teamValue); }
  }
  scrollToTopic() {
    if (this.topicValue) { this._viewportScroller.scrollToAnchor(this.topicValue); }
  }
  scrollToContact() {
    if (this.contactValue) { this._viewportScroller.scrollToAnchor(this.contactValue); }
  }

  // Méthode pour contrôler le comportement responsive de la barre de navigation
  myMenu(): void {
    const x = document.getElementById("myTopnav") as HTMLElement;
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

}
