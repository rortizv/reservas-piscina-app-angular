import { Injectable } from '@angular/core';
import { LocalDataModel } from '../interfaces/LocalDataModel';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor() { }

  setItem(data: LocalDataModel): void {
    localStorage.setItem(data.key, data.value);
  }

  getItem(name: string): string {
    return localStorage.getItem(name)!;
  }

  clearLocalData(): void {
    localStorage.clear();
  }
  
}
