import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dateTimeObj = null;
  date: string;
  year: string;

  constructor(private service: ApiService) {}

  ngOnInit() {
    // this.service.getDateTimeAPI().subscribe((data: any) => {
    //   this.dateTimeObj = JSON.parse(data._body);
    // });
    // assign API response to dateTimeObj on loading of application
  }

  getDateTime(event) {
    this.dateTimeObj = JSON.parse(event._body);
    // Use this function to parse the date returned by the API upon button click
  }
}
