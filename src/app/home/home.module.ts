import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutes } from './home.routing';
import { HomeComponent } from './home.component';
import { DataService } from './data.service';

@NgModule({
  imports: [CommonModule, HomeRoutes],
  declarations: [HomeComponent],
  providers: [DataService]
})
export class HomeModule {}
