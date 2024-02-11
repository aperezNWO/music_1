import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  pages =[
    {
      'url' : 'library',
      'text': 'Library',
    },
    {
      'url': 'about',
      'text': 'About',
    },
    {
      'url': 'new album', 
      'text': 'New Album',
    }
  ];
}

