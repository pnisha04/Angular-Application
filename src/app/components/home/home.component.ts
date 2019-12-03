import { Component, OnInit } from '@angular/core';
import { ApiServiceService} from '../../api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
data;arr;
  constructor(private sharedService : ApiServiceService) { }

  ngOnInit() {
  }



}
