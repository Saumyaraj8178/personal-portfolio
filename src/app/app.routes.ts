import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {
    path: 'about-me',
    component: AboutMeComponent,
  },
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];
