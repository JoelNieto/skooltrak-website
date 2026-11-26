import { Routes } from '@angular/router';
import { HomeEn } from './pages/home-en/home-en';
import { HomeEs } from './pages/home-es/home-es';

export const routes: Routes = [
  { path: '', component: HomeEs, title: 'Skooltrak — todo su colegio, en la misma pista' },
  { path: 'en', component: HomeEn, title: 'Skooltrak — your whole school, on the same track' },
  { path: '**', redirectTo: '' },
];
