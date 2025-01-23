import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',

})
export class SideMenuComponent {
  constructor (private router: Router) {
    console.log('Current route:', this.router.url);
  }
}
