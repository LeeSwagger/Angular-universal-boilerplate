import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      meta: {
        title: 'Главная страница',
        description: 'Описание главной страницы',
        override: true,
      },
    },
  },
];

export const HomeRoutes = RouterModule.forChild(routes);
