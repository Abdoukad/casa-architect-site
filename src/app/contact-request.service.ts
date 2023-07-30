import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactRequestService {
  private apiURL = 'http://localhost:8080/api/contact-requests'; // L'URL de l'API REST que nous allons appeler

  constructor(private http: HttpClient) {}

  // Cette méthode envoie une requête POST à l'API REST pour créer une demande de contact
  // Elle prend en paramètre un objet contactRequest contenant les données de la demande de contact
  // Elle renvoie un Observable qui peut être souscrit pour récupérer la réponse de l'API REST
  createContactRequest(contactRequest: any): Observable<any> {
    return this.http.post(this.apiURL, contactRequest);
  }
}
