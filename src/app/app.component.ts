import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    AOS.init({
      duration: 1200, // Durée de l'animation en ms
      once: false // Les animations se répèteront chaque fois que vous faites défiler la page
    });
  }
}
