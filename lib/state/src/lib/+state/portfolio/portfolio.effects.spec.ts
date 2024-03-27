import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as PortfolioActions from './portfolio.actions';
import { PortfolioEffects } from './portfolio.effects';

describe('PortfolioEffects', () => {
  let actions: Observable<Action>;
  let effects: PortfolioEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        PortfolioEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(PortfolioEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: PortfolioActions.initPortfolio() });

      const expected = hot('-a-|', {
        a: PortfolioActions.loadPortfolioSuccess({ portfolio: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
