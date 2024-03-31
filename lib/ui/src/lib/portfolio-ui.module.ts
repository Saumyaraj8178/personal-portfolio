import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MainComponent, AboutUsComponent],
  exports: [MainComponent],
})
export class PortfolioUiModule {}
