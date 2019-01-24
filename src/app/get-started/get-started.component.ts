import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent {

  token: string;

  constructor(private route: ActivatedRoute) {
    this.token = this.route.snapshot.paramMap.get('token');
    if (this.token) {
      console.log(this.token);
    } else {
      console.error(`404 (auth error)`);
    }
  }

  userName = 'Мирослав';

}
