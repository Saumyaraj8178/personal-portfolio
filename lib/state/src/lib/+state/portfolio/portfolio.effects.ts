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
        of(
          PortfolioActions.loadPortfolioSuccess({
            portfolio: this.#mockPortfolio(),
          })
        )
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(PortfolioActions.loadPortfolioFailure({ error }));
      })
    )
  );

  #mockPortfolio() {
    return [
      {
        id: 'VikasPortfolio-123',
        email: 'vikastripathiofficial@gmail.com',
        phone: '',
        linkedin: '',
        github: '',
        summary: '',
        fullName: 'Vikas Mani Tripathi',
        experiences: [
          {
            company: '',
            duration: { start: '', end: '' },
            location: '',
            position: '',
            description: [''],
          },
        ],
        technicalSkills: [
          {
            category: '',
            skills: [],
          },
        ],
        educations: [
          {
            university: '',
            college: '',
            graduation: '',
            program: '',
          },
        ],
        projects: [
          {
            title: '',
            duration: { start: '', end: '' },
            keyHighlight: '',
            description: [],
          },
        ],
        otherWorkExperiences: [
          {
            company: '',
            duration: { start: '', end: '' },
            location: '',
            position: '',
            description: [],
          },
        ],
        activities: [
          {
            title: '',
            keyHighlight: '',
            duration: { start: '', end: '' },
            description: [],
          },
        ],
      },
    ];
  }
}
