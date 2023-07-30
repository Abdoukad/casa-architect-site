import { Component, ElementRef, OnInit } from '@angular/core';
import { MenuScrollService } from 'src/app/services/menu-scroll.service';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']

})
export class ProcessComponent implements OnInit{
  constructor( private _elementRef: ElementRef,
    private _menuScrollService : MenuScrollService){}
  ngOnInit(): void {
    const menuContainer = this._elementRef.nativeElement.querySelector('.container-demarche');
    if (menuContainer) {
      const menuId = menuContainer.id;
      this._menuScrollService.setDemarcheDialog(menuId);
    }
  }
}
