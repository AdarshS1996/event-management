import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavbarComponent {
  changeBackground: boolean = false;

  constructor(public router: Router) { 
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/team' || event.url === '/registration') {
          this.changeBackground = true;
        } else {
          this.changeBackground = false;
        }
      }
      window.scrollTo(0,0);
    });
  }

  ngOnInit() {
  }
}
