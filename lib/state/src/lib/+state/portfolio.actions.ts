import { createAction, props } from '@ngrx/store';
import { Portfolio } from '../models/portfolio';

export const initPortfolio = createAction('[Portfolio Page] Init');

export const loadPortfolioSuccess = createAction(
  '[Portfolio/API] Load Portfolio Success',
  props<{ portfolios: Portfolio[] }>()
);

export const loadPortfolioFailure = createAction(
  '[Portfolio/API] Load Portfolio Failure',
  props<{ error: any }>()
);
