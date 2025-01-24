import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './../breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './../side-menu/side-menu.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  imports: [SideMenuComponent, RouterModule, BreadcrumbComponent, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: true,

})
export class LayoutComponent {

  sideMenuStatus: boolean = false

  openSideMenu(event: any) {
    this.sideMenuStatus = event;

    if (this.sideMenuStatus) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }

  toggleSideMenu() {
    this.sideMenuStatus = !this.sideMenuStatus
    document.body.classList.remove('overflow-hidden');

  }

}
