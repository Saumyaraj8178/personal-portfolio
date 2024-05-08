import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPortfolio from './+state/portfolio.reducer';
import { PortfolioEffects } from './+state/portfolio.effects';

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
