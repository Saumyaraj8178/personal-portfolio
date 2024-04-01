import { createAction, props } from '@ngrx/store';
import { Portfolio } from '../../model/portfolio';

export const initPortfolio = createAction('[Portfolio Page] Init');

export const loadPortfolioSuccess = createAction(
  '[Portfolio/API] Load Portfolio Success',
  props<{ portfolio: Portfolio[] }>()
);

export const loadPortfolioFailure = createAction(
  '[Portfolio/API] Load Portfolio Failure',
  props<{ error: any }>()
);
