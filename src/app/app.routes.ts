import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then(m => m.Home)
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about').then(m => m.About)
    },
    {
        path: 'events',
        loadComponent: () => import('./pages/events/events').then(m => m.Events)
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact').then(m => m.Contact)
    }
];
