import { Component, Input } from '@angular/core';
import {Result} from '../models/result';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-full-result-container',
  templateUrl: './full-result-container.component.html',
  styleUrls: ['./full-result-container.component.css']
})
export class FullResultContainerComponent {

  resultItem: Result = {
    applicant: {
      surname: "Поліщук",
      first_name: "Володимир",
      second_name: "Павлович",
      email: "thevivalley@gmail.com",
      token: "come key",
      status: "Is solved",
      created: new Date(),
      comment: "Nice men",
      expired: new Date()
    },
    solved_models: [{
      model: {
        _id: "id",
        url: "../../assets/models/bad_template_1.svg",
        answer: true,
        name: "Bad template #1"
      },
      mark: false,
      comment: "Nice picture. Minimalism"
    }],
    solved_date: new Date()
  };

  constructor(private route: ActivatedRoute, private http: HttpClient) {
   let token = route.snapshot.paramMap.get('token');
   if (token) {
     http.post('http://localhost:8000/results/one', {token: token})
       .subscribe((data: Result) => {
         this.resultItem = data;
       });
   }
  }
}
