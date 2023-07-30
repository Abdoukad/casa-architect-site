import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuScrollService {
  // Initialisation de plusieurs BehaviorSubject avec une valeur par défaut.
  private contactDialogSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private presentationtDialogSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private serviceDialogSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private demarcheDialogSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private engagementDialogSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private realisationDialogSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private teamDialogSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private valueDialogSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private topicDialogSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  // Conversion des BehaviorSubject en Observable pour être consommés par les composants.
  contactDialog$ = this.contactDialogSubject.asObservable();
  presentationDialog$ = this.presentationtDialogSubject.asObservable();
  serviceDialog$ = this.serviceDialogSubject.asObservable();
  demchargeDialog$ = this.demarcheDialogSubject.asObservable();
  engagementDialog$ = this.engagementDialogSubject.asObservable();
  realisationDialog$ = this.realisationDialogSubject.asObservable();
  teamDialog$ = this.teamDialogSubject.asObservable();
  valueDialog$ = this.valueDialogSubject.asObservable();
  topicDialog$ = this.topicDialogSubject.asObservable();

  constructor() { }

  // Récupération des Observable pour chaque BehaviorSubject.
  // Ces méthodes permettent aux composants de s'abonner à la valeur courante des BehaviorSubject.
  getConactDialog(): Observable<string> {
    return this.contactDialogSubject.asObservable();
  }

  getPresentationDialog(): Observable<string> {
    return this.presentationtDialogSubject.asObservable();
  }

  getServiceDialog(): Observable<string> {
    return this.serviceDialogSubject.asObservable();
  }

  getDemarcheDialog(): Observable<string> {
    return this.demarcheDialogSubject.asObservable();
  }

  getEngagementDialog(): Observable<string> {
    return this.engagementDialogSubject.asObservable();
  }

  getRealisationDialog(): Observable<string> {
    return this.realisationDialogSubject.asObservable();
  }

  getTeamDialog(): Observable<string> {
    return this.teamDialogSubject.asObservable();
  }

  getValueDialog(): Observable<string> {
    return this.valueDialogSubject.asObservable();
  }

  getTopicDialog(): Observable<string> {
    return this.topicDialogSubject.asObservable();
  }

  // Mise à jour des valeurs pour chaque BehaviorSubject.
  // Ces méthodes permettent d'envoyer une nouvelle valeur au BehaviorSubject.
  setContactDialog(value: string): void {
    this.contactDialogSubject.next(value);
  }

  setPresentationDialog(value: string): void {
    this.presentationtDialogSubject.next(value);
  }

  setServiceDialog(value: string): void {
    this.serviceDialogSubject.next(value);
  }

  setDemarcheDialog(value: string): void {
    this.demarcheDialogSubject.next(value);
  }

  setEngagementDialog(value: string): void {
    this.engagementDialogSubject.next(value);
  }

  setRealisationDialog(value: string): void {
    this.realisationDialogSubject.next(value);
  }

  setTeamDialog(value: string): void {
    this.teamDialogSubject.next(value);
  }

  setValueDialog(value: string): void {
    this.valueDialogSubject.next(value);
  }

  setTopicDialog(value: string): void {
    this.topicDialogSubject.next(value);
  }
}
