import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';

declare var $: any;		

@Component({
  selector: 'app-events',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventsComponent {
  isScrollToTopVisible: boolean = false;

  constructor(private viewPortScroller: ViewportScroller) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) 
    doSomething(event) {
      if (window.pageYOffset > 8) {
        this.isScrollToTopVisible = true;
      } else {
        this.isScrollToTopVisible = false;
    }
  }
  
  @HostListener('window:scroll', ['$event']) 
  stickyNavbarColor(e) {
    let element = document.querySelector('.navbar')
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse')
    } else {
      element.classList.remove('navbar-inverse')
    }
    }

  scrollToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  onClickScroll(elementId: string) {
    this.viewPortScroller.scrollToAnchor(elementId);
  }
}
