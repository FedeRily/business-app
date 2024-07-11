import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  set(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }

  get(key: string) {
    return sessionStorage.getItem(key);
  }

  clear() {
    sessionStorage.clear();
  }

  clearKey(key: string) {
    sessionStorage.removeItem(key);
  }
}
