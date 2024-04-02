import { Component, Input } from '@angular/core';
import { Portfolio } from '@portfolio/portfolio-state';

@Component({
  selector: 'lib-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  @Input() userData : Portfolio | undefined;
}
