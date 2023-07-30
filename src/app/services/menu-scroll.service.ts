import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuScrollService {

  constructor() { }
  private contactDialogSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  contactDialog$ = this.contactDialogSubject.asObservable();

 


  getConactDialog(): Observable<string> {
    return this.contactDialogSubject.asObservable();
  }

  setContactDialog(value: string): void {
    this.contactDialogSubject.next(value);
  }

  private presentationtDialogSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  presentationDialog$ = this.presentationtDialogSubject.asObservable();

  getPresentationDialog(): Observable<string> {
    return this.presentationtDialogSubject.asObservable();
  }

  setPresentationDialog(value: string): void {
    this.presentationtDialogSubject.next(value);
  }
  private serviceDialogSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  serviceDialog$ = this.serviceDialogSubject.asObservable();

  getServiceDialog(): Observable<string> {
    return this.serviceDialogSubject.asObservable();
  }

  setServiceDialog(value: string): void {
    this.serviceDialogSubject.next(value);
  }
  private demarcheDialogSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  demchargeDialog$ = this.demarcheDialogSubject.asObservable();

  getDemarcheDialog(): Observable<string> {
    return this.demarcheDialogSubject.asObservable();
  }

  setDemarcheDialog(value: string): void {
    this.demarcheDialogSubject.next(value);
  }
  private engagementDialogSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  engagementDialog$ = this.engagementDialogSubject.asObservable();

  getEngagementDialog(): Observable<string> {
    return this.engagementDialogSubject.asObservable();
  }

  setEngagementDialog(value: string): void {
    this.engagementDialogSubject.next(value);
  }
  private realisationDialogSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  realisationDialog$ = this.realisationDialogSubject.asObservable();

  getRealisationDialog(): Observable<string> {
    return this.realisationDialogSubject.asObservable();
  }

  setRealisationDialog(value: string): void {
    this.realisationDialogSubject.next(value);
  }
  private teamDialogSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  teamDialog$ = this.teamDialogSubject.asObservable();

  getTeamDialog(): Observable<string> {
    return this.teamDialogSubject.asObservable();
  }

  setTeamDialog(value: string): void {
    this.teamDialogSubject.next(value);
  }
  private valueDialogSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  valueDialog$ = this.valueDialogSubject.asObservable();

  getValueDialog(): Observable<string> {
    return this.valueDialogSubject.asObservable();
  }

  setValueDialog(value: string): void {
    this.valueDialogSubject.next(value);
  }

  private topicDialogSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  topicDialog$ = this.topicDialogSubject.asObservable();

  getTopicDialog(): Observable<string> {
    return this.topicDialogSubject.asObservable();
  }

  setTopicDialog(value: string): void {
    this.topicDialogSubject.next(value);
  }
}
