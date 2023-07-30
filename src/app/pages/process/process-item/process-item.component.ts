import { Component } from '@angular/core';

@Component({
  selector: 'app-process-item',
  templateUrl: './process-item.component.html',
  styleUrls: ['./process-item.component.css']

})
export class ProcessItemComponent {
  steps = [
    {
      title: 'Prise de contact',
      description: "Lors de la prise de contact, nous écoutons attentivement vos idées et vos besoins pour votre projet. Nous vous posons des questions pertinentes pour mieux comprendre vos attentes et vous proposer les meilleures solutions possibles.",
      image: 'assets/images/contact.jpg'
    },
    {
      title: 'Projet',
      description: "Pendant la phase de projet, nous travaillons main dans la main pour élaborer un plan détaillé et personnalisé en tenant compte de vos exigences et contraintes. Nous vous accompagnons dans le choix des matériaux, des couleurs et du design pour créer un espace unique qui vous ressemble.",
      image: 'assets/images/quiSommeNous1.jpg'

    },
    {
      title: 'Chantier',
      description: "Durant le chantier, notre équipe d'experts se mobilise pour mener à bien les travaux tout en respectant les délais et la qualité attendue. Nous assurons une communication constante et transparente pour vous tenir informé de l'avancement du projet. Votre satisfaction est notre priorité, et nous veillons à ce que le chantier se déroule dans les meilleures conditions possibles.",
      image: 'assets/images/chantier.jpg'

    }
  ];
  // Initialisation de l'étape active à la première étape
  activeStepIndex = 0;

// Fonction pour définir l'étape active en fonction de l'index de l'étape sélectionnée
  setActiveStep(index: number) {
    this.activeStepIndex = index;
  }
}
