import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListEventComponent } from './events/list-event.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';




@NgModule({
  declarations: [
    AppComponent,
    ListEventComponent,
    EventThumbnailComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
