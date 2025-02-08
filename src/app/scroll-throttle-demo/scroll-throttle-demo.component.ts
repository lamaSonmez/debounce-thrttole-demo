import { Component, OnInit } from '@angular/core';
import { throttle } from 'lodash';

@Component({
  selector: 'app-scroll-throttle-demo',
  templateUrl: './scroll-throttle-demo.component.html',
  styleUrls: ['./scroll-throttle-demo.component.scss'],
})
export class ScrollThrottleDemoComponent implements OnInit {
  scrollPosition = 0;
  scrollPositionThrottled = 0;
  eventCountWithoutThrottle = 0;
  eventCountWithThrottle = 0;

  constructor() {
    // Throttled version of scroll handler
    this.handleScrollThrottled = throttle(this.handleScrollThrottled.bind(this), 300);
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    window.addEventListener('scroll', this.handleScrollThrottled);
  }

  // Regular (Unthrottled) Scroll Handler
  handleScroll() {
    this.scrollPosition = window.scrollY;
    this.eventCountWithoutThrottle++;
  }

  // Throttled Scroll Handler
  handleScrollThrottled() {
    this.scrollPositionThrottled = window.scrollY;
    this.eventCountWithThrottle++;
  }
}
