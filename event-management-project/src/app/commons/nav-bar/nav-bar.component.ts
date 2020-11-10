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
  changeBackgroundOnRoute: boolean = false;
  isMenuVisible: boolean = false;

  constructor(public router: Router) { 
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/team' || event.url === '/registration') {
          this.changeBackgroundOnRoute = true;
        } else {
          this.changeBackgroundOnRoute = false;
        }
      }
      window.scrollTo(0,0);
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth <= 767) {
      this.isMenuVisible = true;
    } else {
      this.isMenuVisible = false;
    }
  }

  ngOnInit() {
  }

  openNav() {
    console.log(window.innerWidth);
    if (window.innerWidth <= 767) {
      this.isMenuVisible = true;
    }
  }

  closeNav() {
    if (window.innerWidth <= 767) {
      this.isMenuVisible = false;
    }
  }
}
