import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './MyComponents/card/card.component';
import { Route404Component } from './MyComponents/404/404.component';

export const routes: Routes = [
  { path: '', component: CardComponent },
  { path: '**', component: Route404Component },
];
