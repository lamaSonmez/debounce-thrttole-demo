import { Component, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';


@Component({
  selector: 'app-debounce-throttle',
  templateUrl: './debounce-throttle.component.html',
  styleUrls: ['./debounce-throttle.component.scss']
})
export class DebounceThrottleComponent implements OnInit {

  searchQuery: string = '';
  private searchSubject = new Subject<string>();

  constructor() {
    // Debounce input changes (wait 500ms after typing)
    this.searchSubject.pipe(debounceTime(500)).subscribe((query) => {
      this.searchQuery = query;
      console.log('Debounced Search:', query);
    });
  }

  ngOnInit(): void {
 
  }

  // Debounced search function
  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchSubject.next(input.value);
  }


}
