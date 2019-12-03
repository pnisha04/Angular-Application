import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiServiceService } from '../../../api-service.service'
import { EventEmitter } from 'events';
import { HttpClient, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-non-veg',
  templateUrl: './non-veg.component.html',
  styleUrls: ['./non-veg.component.css']
})
export class NonVegComponent implements OnInit {
  category_id;vegArr;category;
  constructor(private route : ActivatedRoute,
    private api : ApiServiceService,
    private http:HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params : ParamMap)=>{
       console.log(params)
       let id = params.get('id');
       this.category = id
       console.log(this.category)
      }
      )
      this.getNonVegData();
  }
  
  
  getNonVegData(){
    this.api.getSingleCat(this.category).subscribe(res =>{
      this.vegArr = res;
      console.log(this.vegArr)
    })
  }

}
