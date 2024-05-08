import { Route } from '@angular/router';
import { AboutUsComponent, ContactUsComponent, MainComponent, ProjectsComponent } from '@portfolio/portfolio-ui';

export const appRoutes: Route[] = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,

  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  }
];
