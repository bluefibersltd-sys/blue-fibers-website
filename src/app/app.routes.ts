import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Textile } from './pages/textile/textile';
import { NonTextile } from './pages/non-textile/non-textile';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home, title: 'Blue Fibers | Home' },
  { path: 'textile', component: Textile, title: 'Blue Fibers | Textile' },
  { path: 'non-textile', component: NonTextile, title: 'Blue Fibers | Non-Textile' },
  { path: 'contact', component: Contact, title: 'Blue Fibers | Contact' },
  { path: '**', redirectTo: '' },
];
