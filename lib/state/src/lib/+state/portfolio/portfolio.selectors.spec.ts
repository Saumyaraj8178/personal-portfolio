import { Portfolio } from '../../model/portfolio';
import {
  portfolioAdapter,
  PortfolioPartialState,
  initialPortfolioState,
} from './portfolio.reducer';
import * as PortfolioSelectors from './portfolio.selectors';

describe('Portfolio Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getPortfolioId = (it: Portfolio) => it.id;
  const createPortfolio = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Portfolio);

  let state: PortfolioPartialState;

  beforeEach(() => {
    state = {
      portfolio: portfolioAdapter.setAll(
        [
          createPortfolio('PRODUCT-AAA'),
          createPortfolio('PRODUCT-BBB'),
          createPortfolio('PRODUCT-CCC'),
        ],
        {
          ...initialPortfolioState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Portfolio Selectors', () => {
    it('selectAllPortfolio() should return the list of Portfolio', () => {
      const results = PortfolioSelectors.selectAllPortfolio(state);
      const selId = getPortfolioId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = PortfolioSelectors.selectEntity(state) as Portfolio;
      const selId = getPortfolioId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectPortfolioLoaded() should return the current "loaded" status', () => {
      const result = PortfolioSelectors.selectPortfolioLoaded(state);

      expect(result).toBe(true);
    });

    it('selectPortfolioError() should return the current "error" state', () => {
      const result = PortfolioSelectors.selectPortfolioError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
