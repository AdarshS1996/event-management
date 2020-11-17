import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BreadcrumbsEnum } from './breadcrumbs.enum';

declare var $: any;

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {
  urls: string[];
  eventName: string;
  currentPageTitle: any;
  breadCrumbs: any[] = [{
    title: 'Home',
    url: '/home' 
  }];

  constructor(public router: Router,
    private activatedRoute: ActivatedRoute) { 
      this.activatedRoute.params.subscribe(params => {
        this.eventName = params['eventId'];
      });
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let roughUrls = event.url.split('/');
        this.urls = roughUrls.splice(1,);
      }
      window.scrollTo(0,0);
    });
  }

  ngOnInit() {
    this.urls.forEach(url => {
      this.breadCrumbs.push({
        title: BreadcrumbsEnum[url],
        url: `/${url}`
      });
    });
    if (this.eventName === undefined) {
      this.currentPageTitle = this.breadCrumbs[this.breadCrumbs.length - 1].title;
      this.breadCrumbs.pop();
    } else {
      this.breadCrumbs.pop();
      this.currentPageTitle = this.eventName + ' Registration';
    }
  }
}
