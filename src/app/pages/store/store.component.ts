import { Component } from '@angular/core';
import { FilterStoreComponent } from './components/filter-store/filter-store.component';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [MatGridListModule, FilterStoreComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent {

}
