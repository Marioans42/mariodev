import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
  <h2>{{event.name}}</h2>
  <div>Date: {{event.date}}</div>
  <div>Time: {{event.time}}</div>
  <div>Price: \£{{event.price}}</div>
  <div>
    <span>Location: {{event.location.address}}</span>
    <span>&nbsp;</span>
    <span>{{event.location.city}}</span>
  </div>
</div>`,
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;

  constructor() { }

  ngOnInit() {
  }

}
