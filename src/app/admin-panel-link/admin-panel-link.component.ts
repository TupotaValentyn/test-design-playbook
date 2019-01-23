import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel-link',
  templateUrl: './admin-panel-link.component.html',
  styleUrls: ['./admin-panel-link.component.css']
})
export class AdminPanelLinkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  //TEST ARR OF DATE
  usersDateInforArray = [
    {
      name: 'Mirek',
      surname: 'Sokol',
      secondName: 'Smth',
      email: 'smthverylognemail@ukr.net',
      created: new Date(),
      expires: new Date()
    },
    {
      name: 'Anton',
      surname: 'Olexanrovich',
      secondName: 'Olegiv',
      email: 'smthverylognemail@ukr.net',
      created: new Date(),
      expires: new Date()
    },
    {
      name: 'Boris',
      surname: 'Dmitrovich',
      secondName: 'Vorobeev',
      email: 'smthverylognemail@ukr.net',
      created: new Date(),
      expires: new Date()
    },
    {
      name: 'Boris',
      surname: 'Dmitrovich',
      secondName: 'Vorobeev',
      email: 'smthverylognemail@ukr.net',
      created: new Date(),
      expires: new Date()
    },
    {
      name: 'Boris',
      surname: 'Dmitrovich',
      secondName: 'Vorobeev',
      email: 'smthverylognemail@ukr.net',
      created: new Date(),
      expires: new Date()
    },
    {
      name: 'Boris',
      surname: 'Dmitrovich',
      secondName: 'Vorobeev',
      email: 'smthverylognemail@ukr.net',
      created: new Date(),
      expires: new Date()
    },
    {
      name: 'Boris',
      surname: 'Dmitrovich',
      secondName: 'Vorobeev',
      email: 'smthverylognemail@ukr.net',
      created: new Date(),
      expires: new Date()
    }
  ];
}
