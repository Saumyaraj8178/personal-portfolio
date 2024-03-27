import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  PORTFOLIO_FEATURE_KEY,
  PortfolioState,
  portfolioAdapter,
} from './portfolio.reducer';

// Lookup the 'Portfolio' feature state managed by NgRx
export const selectPortfolioState = createFeatureSelector<PortfolioState>(
  PORTFOLIO_FEATURE_KEY
);

const { selectAll, selectEntities } = portfolioAdapter.getSelectors();

export const selectPortfolioLoaded = createSelector(
  selectPortfolioState,
  (state: PortfolioState) => state.loaded
);

export const selectPortfolioError = createSelector(
  selectPortfolioState,
  (state: PortfolioState) => state.error
);

export const selectAllPortfolio = createSelector(
  selectPortfolioState,
  (state: PortfolioState) => selectAll(state)
);

export const selectPortfolioEntities = createSelector(
  selectPortfolioState,
  (state: PortfolioState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectPortfolioState,
  (state: PortfolioState) => state.selectedId
);

export const selectEntity = createSelector(
  selectPortfolioEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
