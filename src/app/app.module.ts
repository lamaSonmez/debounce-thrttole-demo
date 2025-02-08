import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DebounceThrottleComponent } from './debounce-throttle/debounce-throttle.component';
import { DemosWrapperComponent } from './demos-wrapper/demos-wrapper.component';
import { ScrollThrottleDemoComponent } from './scroll-throttle-demo/scroll-throttle-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DebounceThrottleComponent,
    DemosWrapperComponent,
    ScrollThrottleDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
