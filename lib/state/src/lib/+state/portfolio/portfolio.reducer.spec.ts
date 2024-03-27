import { Action } from '@ngrx/store';

import * as PortfolioActions from './portfolio.actions';
import { PortfolioEntity } from './portfolio.models';
import {
  PortfolioState,
  initialPortfolioState,
  portfolioReducer,
} from './portfolio.reducer';

describe('Portfolio Reducer', () => {
  const createPortfolioEntity = (id: string, name = ''): PortfolioEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Portfolio actions', () => {
    it('loadPortfolioSuccess should return the list of known Portfolio', () => {
      const portfolio = [
        createPortfolioEntity('PRODUCT-AAA'),
        createPortfolioEntity('PRODUCT-zzz'),
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
