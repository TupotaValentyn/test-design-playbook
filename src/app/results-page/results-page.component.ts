import { Component } from '@angular/core';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent {

  mainData = [
    {
      commentExternal: 'external - comment',
      surname: 'tupota',
      firstname: 'valintin',
      secondname: 'uriyovich',
      answers: 2,
      maxAnswers: 5,
      results: [
        {
          url: 'img.jpg',
          commentInto: 'some comment',
          mark: false,
          name: 'Some full-name'
        }
      ]
    },
    {
      commentExternal: 'external - comment',
      surname: 'bondar',
      firstname: 'oleksit',
      secondname: 'volodymirivich',
      answers: 4,
      maxAnswers: 5,
      results: [
        {
          url: 'img.jpg',
          commentInto: 'some comment',
          mark: false,
          name: 'Some full-name'
        }
      ]
    },
    {
      commentExternal: 'external - comment',
      surname: 'tupota',
      firstname: 'valintin',
      secondname: 'uriyovich',
      answers: 2,
      maxAnswers: 5,
      results: [
        {
          url: 'img.jpg',
          commentInto: 'some comment',
          mark: false,
          name: 'Some full-name'
        }
      ]
    },
    {
      commentExternal: 'external - comment',
      surname: 'tupota',
      firstname: 'valintin',
      secondname: 'uriyovich',
      answers: 2,
      maxAnswers: 5,
      results: [
        {
          url: 'img.jpg',
          commentInto: 'some comment',
          mark: false,
          name: 'Some full-name'
        }
      ]
    }
  ]
}
