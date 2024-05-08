import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  Portfolio,
  PortfolioActions,
  PortfolioFeature,
  PortfolioSelectors,
} from '@portfolio/portfolio-state';
import { EMPTY, Observable } from 'rxjs';
@Component({
  selector: 'lib-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  portfolios$: Observable<Portfolio[]> = EMPTY;

  constructor(private store: Store<PortfolioFeature.PortfolioPartialState>) {}

  ngOnInit(): void {
    this.store.dispatch(PortfolioActions.initPortfolio());
    this.portfolios$ = this.store.select(PortfolioSelectors.selectAllPortfolio);
  }
}
