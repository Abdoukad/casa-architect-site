import { Component, ElementRef, OnInit } from '@angular/core';
import { MenuScrollService } from 'src/app/services/menu-scroll.service';
import { PrestationsService } from 'src/app/services/prestations/prestations.service';

@Component({
  selector: 'app-prestations',
  templateUrl: './prestations.component.html',
  styleUrls: ['./prestations.component.css']
})
export class PrestationsComponent implements OnInit {
  // Déclarez une propriété pour stocker les données des prestations
  public prestations: any[] = [];

  // Utilisez le constructeur pour injecter le service PrestationsService
  constructor(public prestationsService: PrestationsService,
    private _elementRef: ElementRef,
    private _menuScrollService : MenuScrollService) {}

  // Implémentez la méthode ngOnInit pour récupérer les données des prestations lorsque le composant est initialisé
  ngOnInit(): void {
    // Abonnez-vous à l'Observable retourné par le service PrestationsService
    this.prestationsService.getPrestations().subscribe((data: any[]) => {
      // Mettez à jour la propriété 'prestations' avec les données récupérées
      this.prestations = data;
    });
    const menuContainer = this._elementRef.nativeElement.querySelector('.container-prestations');
    if (menuContainer) {
      const menuId = menuContainer.id;
      this._menuScrollService.setServiceDialog(menuId);
    }
  }
}

