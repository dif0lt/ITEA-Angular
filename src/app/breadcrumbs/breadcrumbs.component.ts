import { Component } from '@angular/core';
import { LocationStrategy, NgClass } from '@angular/common';
import { Router } from '@angular/router';

import {BreadcrumbsService} from '../services/breadcrumbs.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.styl']
})
export class BreadcrumbsComponent {

    private _urls: String[];
    private _activeUrl: String;

    constructor(
      private router: Router,
      private location: LocationStrategy,
      private breadcrumbsService: BreadcrumbsService
    ) {
        this._urls = new Array();
        this.router.events.subscribe(() => {
            this._urls.length = 0;
            this._activeUrl = this.location.path();
            this.generateBreadcrumbTrail(this.location.path());
        });
    }

    generateBreadcrumbTrail(url: string): void {
        this._urls.unshift(url);
        if (url.lastIndexOf('/') > url.lastIndexOf('%') && url.lastIndexOf('/') > 0) {
            this.generateBreadcrumbTrail(url.substr(0, url.lastIndexOf('/')));
            this.breadcrumbsService.addFriendlyNameForRoute(url, url.substr(url.lastIndexOf('/')+1, url.length))
        } else if (url.lastIndexOf('%') > url.lastIndexOf('/') && url.lastIndexOf('%') > 0) {
            this.generateBreadcrumbTrail(url.substr(0, url.lastIndexOf('%')));
            this.breadcrumbsService.addFriendlyNameForRoute(url, url.substr(url.lastIndexOf('%')+1, url.length))
        }
    }

    navigateTo(url: string): void {
        this.router.navigateByUrl(url);
    }

    friendlyName(url: string): string {
        return !url ? '' : this.breadcrumbsService.getFriendlyNameForRoute(url);
    }

    get urls() {
      return this._urls;
    }
}
