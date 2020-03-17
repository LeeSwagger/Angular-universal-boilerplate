import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutes } from './home.routing';
import { HomeComponent } from './home.component';
import { YInputModule } from '@yota/ui-kit/input';

@NgModule({
  imports: [CommonModule, HomeRoutes, YInputModule],
  declarations: [HomeComponent]
})
export class HomeModule {}
