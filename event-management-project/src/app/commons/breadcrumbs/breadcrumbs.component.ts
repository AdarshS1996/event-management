import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BreadcrumbsEnum } from './breadcrumbs.enum';

declare var $: any;

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {
  urls: string[];
  breadCrumbs: any[] = [{
    title: 'Home',
    url: '/home' 
  }];

  constructor(public router: Router) { 
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
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
  }
}
