import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PortfolioUiModule } from '@portfolio/portfolio-ui';

@Component({
  standalone: true,
  imports: [RouterModule, PortfolioUiModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
}
