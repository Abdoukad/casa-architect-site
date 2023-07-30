// Classe pour définir une réalisation avec son titre, sa description et ses projets.
export class Realisations {
  constructor(
    public titre: string,
    public description: string,
    public projets: Projet[]  // Liste des projets de la réalisation.
  ) {}
}

// Classe pour définir un projet avec son ID, son nom et son image.
export class Projet {
  constructor(
    public id: number,  // ID unique du projet.
    public nom: string,
    public image: string
  ) {}
}
