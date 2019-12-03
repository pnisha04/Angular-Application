import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService} from '../../../api-service.service';

@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.css'],
  providers : [ApiServiceService]
})
export class LifestyleComponent implements OnInit {
  data;arr;index;
  constructor(private sharedService : ApiServiceService) { }

  ngOnInit() {
    // this.getData();
  }

  // getData(){
  //   this.sharedService.getLifeData().subscribe(res =>{
  //     this.data = res;
  //     this.arr = this.data.articles;
  //     // console.log(this.arr[0],this.arr[1])
  //   })
  // }

}
