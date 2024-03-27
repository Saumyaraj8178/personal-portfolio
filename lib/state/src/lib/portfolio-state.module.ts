import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPortfolio from './+state/portfolio/portfolio.reducer';
import { PortfolioEffects } from './+state/portfolio/portfolio.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromPortfolio.PORTFOLIO_FEATURE_KEY,
      fromPortfolio.portfolioReducer
    ),
    EffectsModule.forFeature([PortfolioEffects]),
  ],
})
export class PortfolioStateModule {}
