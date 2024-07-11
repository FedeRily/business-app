import { Injectable } from '@angular/core';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string = '';

  constructor(
    private sessionStorageService: SessionStorageService,
  ) { }

  isAuth():boolean {
    // return this.token.length > 0;
    // this.token = this.sessionStorageService.get('token') ? this.sessionStorageService.get('token') : '';
    return this.sessionStorageService.get('token') ? true : false;
  }

  setToken(token: string) {
    this.token = token;
  }
}
