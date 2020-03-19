import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateHome } from './can-activate-home.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [CanActivateHome],
    data: {
      meta: {
        title: 'Главная страница',
        description: 'Описание главной страницы',
        override: true
      }
    }
  }
];

export const HomeRoutes = RouterModule.forChild(routes);
