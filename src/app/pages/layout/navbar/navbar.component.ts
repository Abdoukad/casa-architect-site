import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuScrollService } from 'src/app/services/menu-scroll.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit  {

  presentationValue: any;
  valuesValue: any;
  serviceValue: any;
  contactValue: any;
  demarcheValue: any;
  engagementValue: any;
  realisationValue: any;
  teamValue: any;
  topicValue: any;

  constructor(private _viewportScroller: ViewportScroller,
    private _menuScrollService : MenuScrollService) { }

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

  // Titre de l'entreprise affiché sur la navbar
  title = 'CASA-ARCHI';

  // Booléen indiquant si le menu est visible ou non
  showNav = false;

  // Booléen indiquant si une animation est en cours ou non
  animationInProgress = false;

  // Méthode appelée lorsque l'utilisateur clique sur le bouton hamburger
  toggleNav() {
    // Si aucune animation n'est en cours
    if (!this.animationInProgress) {
      // On marque l'animation comme étant en cours
      this.animationInProgress = true;
      // On inverse la valeur de showNav pour afficher ou cacher le menu
      this.showNav = !this.showNav;
      // On attend la fin de l'animation avant de marquer celle-ci comme étant terminée
      setTimeout(() => {
        this.animationInProgress = false;
      }, 500); // La durée de l'animation en ms
    }
  }

  // Méthode appelée lorsque l'utilisateur clique sur un lien de menu
  closeNav() {
    // Si aucune animation n'est en cours
    if (!this.animationInProgress) {
      // On marque l'animation comme étant en cours
      this.animationInProgress = true;
      // On cache le menu
      this.showNav = false;
      // On attend la fin de l'animation avant de marquer celle-ci comme étant terminée
      setTimeout(() => {
        this.animationInProgress = false;
      }, 500); // La durée de l'animation en ms
    }
  }

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

  myMenu(): void {
    const x = document.getElementById("myTopnav") as HTMLElement;
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
}
