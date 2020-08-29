import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() passDate = new EventEmitter<any>();

  constructor(private service: ApiService) { }

  ngOnInit() {
  }

  getDate() {
    this.service.getDateTimeAPI().subscribe((data) => {
      this.passDate.emit(data);
    });
  }

}
