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
        console.log(event.url);
        if (event.url === '/team' || event.url.includes('/registration') || event.url === '/about-us' || event.url === '/event-details') {
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

  // @HostListener('window:scroll', ['$event']) 
  // doSomething(event) {
  //   if (window.pageYOffset > 5) {
  //     this.isMenuVisible = true;
  //   } else if (window.pageYOffset <= 5) {
  //     this.isMenuVisible = false;
  //   }
  // }

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
