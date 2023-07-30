import { Component, ElementRef, OnInit } from '@angular/core';
import { ContactRequestService } from 'src/app/contact-request.service';
import { MenuScrollService } from 'src/app/services/menu-scroll.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  successMessage: string | null = null; // initialise le message de succès à null
  errorMessage: string | null = null; // initialise le message d'erreur à null
  isLoading: boolean = false; // ajoute la variable isLoading

  constructor(private contactRequestService: ContactRequestService,
    private _elementRef: ElementRef,
    private _menuScrollService : MenuScrollService) {} // injection du service ContactRequestService dans le constructeur
  
    ngOnInit(): void {
    const contactContainer = this._elementRef.nativeElement.querySelector('.contact-container');
    if (contactContainer) {
      const contactId = contactContainer.id;
      this._menuScrollService.setContactDialog(contactId);
    }
  }

  onSubmit(event: any) { // fonction appelée lors de la soumission du formulaire
    event.preventDefault(); // empêche le comportement par défaut du formulaire (rechargement de la page)
    this.isLoading = true; // définit isLoading à true lorsque la soumission commence

    // création d'un objet contactRequest à partir des valeurs des champs du formulaire
    const contactRequest = {
      fullName: event.target.inputName.value,
      email: event.target.inputEmail.value,
      phone: event.target.inputTel.value,
      subject: event.target.selectSubject.value,
      message: event.target.inputMessage.value,
    };

    // appel de la méthode createContactRequest du service ContactRequestService avec l'objet contactRequest comme argument
    this.contactRequestService.createContactRequest(contactRequest).subscribe(
      (response) => { // callback en cas de succès de la requête
        console.log('Contact request submitted:', response); // affiche la réponse dans la console
        this.successMessage = 'Votre demande de contact a été envoyée avec succès.'; // définit le message de succès
        this.errorMessage = null; // réinitialise le message d'erreur
        this.isLoading = false; // définit isLoading à false lorsque le traitement est terminé

      },
      (error) => { // callback en cas d'erreur de la requête
        console.error('Error submitting contact request:', error); // affiche l'erreur dans la console
        this.errorMessage = "Une erreur s'est produite lors de l'envoi de votre demande de contact. Veuillez réessayer."; // définit le message d'erreur
        this.successMessage = null; // réinitialise le message de succès
        this.isLoading = false; // définit isLoading à false lorsque le traitement est terminé

      }
    );
  }
}
