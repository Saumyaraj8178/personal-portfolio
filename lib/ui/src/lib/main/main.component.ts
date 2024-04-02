import { Component } from '@angular/core';
import { Portfolio } from '@portfolio/portfolio-state';

@Component({
  selector: 'lib-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  portfolios: Portfolio[] = this.#getPortfolios();

  constructor() {}

  #getPortfolios() {
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
