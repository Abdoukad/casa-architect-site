import { Component, ElementRef, OnInit } from '@angular/core';
import { MenuScrollService } from 'src/app/services/menu-scroll.service';

@Component({
  selector: 'app-my-teams',
  templateUrl: './my-teams.component.html',
  styleUrls: ['./my-teams.component.css']
})
export class MyTeamsComponent implements OnInit {
  constructor(private _elementRef: ElementRef,
    private _menuScrollService : MenuScrollService){}
  ngOnInit(): void {
    const menuContainer = this._elementRef.nativeElement.querySelector('.container-team');
    if (menuContainer) {
      const menuId = menuContainer.id;
      this._menuScrollService.setTeamDialog(menuId);
    }
  }

}
