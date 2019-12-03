import { Component, OnInit } from '@angular/core';
import {ApiServiceService } from '../../../api-service.service';

@Component({
  selector: 'app-articles-slider',
  templateUrl: './articles-slider.component.html',
  styleUrls: ['./articles-slider.component.css'],
  providers : [ApiServiceService]
})
export class ArticlesSliderComponent implements OnInit {
data;arr;
  constructor( private sharedService : ApiServiceService) { }

  ngOnInit() {
    // this.getData();
  }

  // getData(){
  //   this.sharedService.getFoodData().subscribe(res =>{
  //     this.data = res;
  //     this.arr = this.data.articles;
  //     // console.log(this.arr[0],this.arr[1])
  //   })
  // }
}
