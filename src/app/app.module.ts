import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { ValuesComponent } from './pages/values/values.component';
import { ValueItemComponent } from './pages/values/value-item/value-item.component';
import { NavbarComponent } from './pages/layout/navbar/navbar.component';
import { PrestationsComponent } from './pages/prestations/prestations.component';
import { ProcessComponent } from './pages/process/process.component';
import {ProcessItemComponent} from "./pages/process/process-item/process-item.component";
import { NosRealisationsComponent } from './pages/nos-realisations/nos-realisations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyTeamsComponent } from './pages/my-teams/my-teams.component';
import { WorkWithUsComponent } from './pages/work-with-us/work-with-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './pages/layout/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PresentationComponent,
    ValuesComponent,
    ValueItemComponent,
    NavbarComponent,
    PrestationsComponent,
    ProcessComponent,
    ProcessItemComponent,
    NosRealisationsComponent,
    MyTeamsComponent,
    WorkWithUsComponent,
    ContactComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule, // Ce module est nécessaire pour les applications Angular fonctionnant dans un navigateur
    CommonModule,
    NgbModule,
    NgbNavModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  exports: [
    ProcessItemComponent
  ],
  bootstrap: [AppComponent]
})
// Exportez la classe AppModule, qui représente le module principal de votre application Angular
export class AppModule { }
