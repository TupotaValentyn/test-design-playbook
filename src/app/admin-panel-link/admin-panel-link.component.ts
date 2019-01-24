import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-panel-link',
  templateUrl: './admin-panel-link.component.html',
  styleUrls: ['./admin-panel-link.component.css']
})
export class AdminPanelLinkComponent {

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

  copyLink(target) {
    let textToClipboard = target.value;

    let selBox = document.createElement('textarea');
    selBox.style.cssText = `position: fixed;
      left: 0;
      top: 0;
      opacity: 0;`;

    selBox.value = textToClipboard;

    document.querySelector('.wrapper').append(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    selBox.remove();

    target.select();
  }
}
