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
    console.log(this.route.snapshot.paramMap);
    if (this.token) {
      localStorage.setItem('token', this.token);
    } else if (!localStorage.getItem('token')) {
      alert('You don`t have permission');
    }
  }

  userName = 'Myroslav';
}
