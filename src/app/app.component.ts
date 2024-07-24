import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'business-app';
  //---------tema de colores
  isDarkTheme: boolean = true; // Variable que controla el tema

  getThemeClasses() {
    return {
      'class': true,
      'light-theme': !this.isDarkTheme,
      'dark-theme': this.isDarkTheme
    };
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }
}