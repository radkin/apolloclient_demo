import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  public query: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor() { }
}
