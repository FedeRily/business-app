import { Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: 'auth', loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES) },
    { path: 'app', loadChildren: () => import('./pages/pages.routes').then(m => m.PAGES_ROUTES), canActivate: [authGuard] },
    { path: '', redirectTo: 'auth',  pathMatch: 'full' },
    { path: '**', component: ErrorComponent }
];
