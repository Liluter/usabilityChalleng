import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main/mian-page.component';

export const routes: Routes = [{
  path: '',
  redirectTo: 'main',
  pathMatch: 'full'
}, {
  path: 'main',
  component: MainPageComponent
}];
