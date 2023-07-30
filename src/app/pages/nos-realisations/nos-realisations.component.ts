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
  public realisations!: Realisations;
  public selectedProject: any;
  selectedImage!: string;

  constructor(private realisationsService: RealisationsService,
    private _elementRef: ElementRef,
    private _menuScrollService : MenuScrollService) { }

  ngOnInit(): void {
    this.realisationsService.getRealisationsData().subscribe((data: Realisations) => {
      this.realisations = data;
    });
    const menuContainer = this._elementRef.nativeElement.querySelector('.container-engagement');
    if (menuContainer) {
      const menuId = menuContainer.id;
      this._menuScrollService.setEngagementDialog(menuId);
    }
  }

  openModal(image: string, project: any): void {
    this.selectedImage = image;
    this.selectedProject = project;
    const modal = document.getElementById('modal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeModal() {
    this.selectedProject = null;
    document.getElementById("modal")!.style.display = "none";
  }
}
