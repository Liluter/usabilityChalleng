import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main/main-page.component';

export const routes: Routes = [{
  path: '',
  redirectTo: 'main',
  pathMatch: 'full'
}, {
  path: 'main',
  component: MainPageComponent
}];
