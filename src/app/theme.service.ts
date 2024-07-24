import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  getThemeClasses(isDarkTheme: boolean): string[] {
    return isDarkTheme ? ['dark-theme', 'class'] : ['light-theme', 'class'];
  }
}
