export class Realisations {
  constructor(
    public titre: string,
    public description: string,
    public projets: Projet[]
  ) {}
}

export class Projet {
  constructor(public id: number, public nom: string, public image: string) {}
}
