import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiServiceService } from '../../api-service.service'

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {
  detail_id;details_arr:any = {};details_img={};
  details_obj;obj;details:any;
  constructor(private route: ActivatedRoute,
              private api : ApiServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params:ParamMap) =>{
        console.log(params);
        let id = params.get('id2');
        this.detail_id = id;
        console.log(this.detail_id)
      }
    )
    this.getListData();

  }


  getListData(){
    this.api.getListDetails(this.detail_id).subscribe(
      (res : any) =>{
        return this.details_arr = res;
        // console.log(this.details_arr)
    //  console.log(res)
    })
  }




}
