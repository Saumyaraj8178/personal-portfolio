import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as PortfolioActions from './portfolio.actions';
import * as PortfolioFeature from './portfolio.reducer';

@Injectable()
export class PortfolioEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PortfolioActions.initPortfolio),
      switchMap(() =>
        of(PortfolioActions.loadPortfolioSuccess({ portfolio: [] }))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(PortfolioActions.loadPortfolioFailure({ error }));
      })
    )
  );
}
