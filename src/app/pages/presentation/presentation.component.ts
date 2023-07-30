import { Component, ElementRef, OnInit } from '@angular/core';
import { MenuScrollService } from 'src/app/services/menu-scroll.service';
import { PresentationService } from 'src/app/services/presentation/presentation.service';

// Décorateur pour définir les propriétés du composant Angular
@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  presentationData: any;
  partners: any;

  constructor(private presentationService: PresentationService,
    private _elementRef: ElementRef,
    private _menuScrollService : MenuScrollService) { }

  ngOnInit(): void {
    // Récupère les données de présentation à partir du service et les stocke dans la propriété presentationData
    this.presentationData = this.presentationService.getPresentationData();
    // Récupère les logos des partenaires à partir du service et les stocke dans la propriété partners
    this.partners = this.presentationService.getPartnerLogos();

    const menuContainer = this._elementRef.nativeElement.querySelector('.container-presentation');
    if (menuContainer) {
      const menuId = menuContainer.id;
      this._menuScrollService.setPresentationDialog(menuId);
    }
  }
}
