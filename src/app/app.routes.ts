import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PrivateComponent } from './private/private.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'private',
    component: PrivateComponent,
  },
];
