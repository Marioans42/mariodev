import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-event',
  template: `
  <div>
  <h1> Coming EVENTS</h1>
  <hr>
  <app-event-thumbnail [event]="event"></app-event-thumbnail>
  </div>`,
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2018',
    time: '10:00 am',
    price: 480.99,
    imageUrl: '/assets/image/angularconnect-shields.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };

  handleEventClicked(data) {
    console.log('received', data);
  }
  constructor() { }

  ngOnInit() {
  }

}
