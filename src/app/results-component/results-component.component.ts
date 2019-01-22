import { Component } from '@angular/core';

@Component({
  selector: 'app-results-component',
  templateUrl: './results-component.component.html',
  styleUrls: ['./results-component.component.css']
})
export class ResultsComponentComponent {

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
