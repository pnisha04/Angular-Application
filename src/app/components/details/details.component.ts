import { Component, OnInit } from '@angular/core';
import { ApiServiceService} from '../../api-service.service';
import { Router,ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers : [ApiServiceService]
})
export class DetailsComponent implements OnInit {
index=null;food;array;
  constructor( private activatedRoute : ActivatedRoute,
               private router : Router,
               private apiservice: ApiServiceService,) { }

               data;arr;
  ngOnInit() {
  }

 

}
