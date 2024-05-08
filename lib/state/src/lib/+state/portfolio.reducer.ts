import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as PortfolioActions from './portfolio.actions';
import { Portfolio } from '../models/portfolio';

export const PORTFOLIO_FEATURE_KEY = 'portfolio';

export interface PortfolioState extends EntityState<Portfolio> {
  selectedId?: string | number; // which Portfolio record has been selected
  loaded: boolean; // has the Portfolio list been loaded
  error?: string | null; // last known error (if any)
}

export interface PortfolioPartialState {
  readonly [PORTFOLIO_FEATURE_KEY]: PortfolioState;
}

export const portfolioAdapter: EntityAdapter<Portfolio> =
  createEntityAdapter<Portfolio>();

export const initialPortfolioState: PortfolioState =
  portfolioAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const reducer = createReducer(
  initialPortfolioState,
  on(PortfolioActions.initPortfolio, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(PortfolioActions.loadPortfolioSuccess, (state, { portfolios }) =>
    portfolioAdapter.setAll(portfolios, { ...state, loaded: true })
  ),
  on(PortfolioActions.loadPortfolioFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function portfolioReducer(
  state: PortfolioState | undefined,
  action: Action
) {
  return reducer(state, action);
}
