import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-index-pages',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './index-pages.component.html',
  styleUrl: './index-pages.component.scss'
})
export class IndexPagesComponent {

}
