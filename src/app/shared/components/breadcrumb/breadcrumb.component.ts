import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map } from 'rxjs/operators';

interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  standalone: true,
  imports: [RouterLink, CommonModule]
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor (private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log('starttttt:');

    this.router.events.subscribe((event: any) => {
      console.log('Router Event:', event);
    });
    this.router.events
      .pipe(
        filter((event: any) => event instanceof NavigationEnd),
        map(() => this.buildBreadcrumb(this.activatedRoute.root))
      )
      .subscribe((breadcrumbs: any) => {
        console.log('Generated Breadcrumbs:', breadcrumbs);
        this.breadcrumbs = breadcrumbs;
      });
  }

  private buildBreadcrumb(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    const children: ActivatedRoute[] = route.children;

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map((segment: any) => segment.path).join('/');
      if (routeURL) {
        url += `/${ routeURL }`;
      }

      const label = child.snapshot.data['breadcrumb'];
      if (label) {
        breadcrumbs.push({ label, url });
      }

      // Recursively add breadcrumbs for child routes
      this.buildBreadcrumb(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
