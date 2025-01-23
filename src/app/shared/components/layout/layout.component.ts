import { BreadcrumbComponent } from './../breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './../side-menu/side-menu.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  imports: [SideMenuComponent, RouterModule, BreadcrumbComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: true,

})
export class LayoutComponent {

}
