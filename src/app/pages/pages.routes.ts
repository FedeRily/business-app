import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexPagesComponent } from './index-pages/index-pages.component';

export const PAGES_ROUTES: Routes = [
    {
        path: '',
        component: IndexPagesComponent,
        children: [
          { path: 'home', loadComponent: () => import('./home/home.component').then(c => c.HomeComponent) },
          { path: 'store', loadComponent: () => import('./store/store.component').then(c => c.StoreComponent) },
          { path: '**', redirectTo: ''}
        ]
      }
];
