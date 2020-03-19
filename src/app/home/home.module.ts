import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutes } from './home.routing';
import { HomeComponent } from './home.component';
import { DataService } from './data.service';
import { YLibraryModule } from '@shared/modules/y-library.module';
import { CanActivateHome } from './can-activate-home.guard';

@NgModule({
  imports: [CommonModule, HomeRoutes, YLibraryModule],
  declarations: [HomeComponent],
  providers: [DataService, CanActivateHome]
})
export class HomeModule {}
