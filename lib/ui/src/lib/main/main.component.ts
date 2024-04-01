import { Component, Inject, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  Portfolio,
  PortfolioFeature,
  PortfolioSelector,
} from '@portfolio/portfolio-state';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'lib-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  portfolios$: Observable<Portfolio[]> = EMPTY;
  readonly #store = Inject(Store<PortfolioFeature.PortfolioPartialState>);

  constructor() // private readonly store: Store<PortfolioFeature.PortfolioPartialState>
  {}

  ngOnInit(): void {
    this.portfolios$ = this.#store.select(PortfolioSelector.selectAllPortfolio);
  }
}
