import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainComponent } from './main/main.component';
import { StoreModule } from '@ngrx/store';
import { PortfolioStateModule } from '@portfolio/portfolio-state';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  imports: [CommonModule, StoreModule.forRoot(), PortfolioStateModule],
  declarations: [MainComponent, AboutUsComponent, ProjectsComponent],
  exports: [MainComponent, AboutUsComponent, ProjectsComponent],
})
export class PortfolioUiModule {}
