import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PortfolioStateModule } from '@portfolio/portfolio-state';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MainComponent } from './main/main.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  imports: [
    CommonModule,
    PortfolioStateModule,
    RouterModule,
  ],
  declarations: [
    MainComponent,
    AboutUsComponent,
    ProjectsComponent,
    ContactUsComponent,
  ],
  exports: [
    MainComponent,
    AboutUsComponent,
    ProjectsComponent,
    ContactUsComponent,
  ],
})
export class PortfolioUiModule {}
