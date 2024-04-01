import { Action } from '@ngrx/store';

import * as PortfolioActions from './portfolio.actions';
import { Portfolio } from '../../model/portfolio';
import {
  PortfolioState,
  initialPortfolioState,
  portfolioReducer,
} from './portfolio.reducer';

describe('Portfolio Reducer', () => {
  const createPortfolio = (id: string, name = ''): Portfolio => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Portfolio actions', () => {
    it('loadPortfolioSuccess should return the list of known Portfolio', () => {
      const portfolio = [
        createPortfolio('PRODUCT-AAA'),
        createPortfolio('PRODUCT-zzz'),
      ];
      const action = PortfolioActions.loadPortfolioSuccess({ portfolio });

      const result: PortfolioState = portfolioReducer(
        initialPortfolioState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = portfolioReducer(initialPortfolioState, action);

      expect(result).toBe(initialPortfolioState);
    });
  });
});
