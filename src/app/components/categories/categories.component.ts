import { Component, OnInit, Input, Output } from '@angular/core';
import { ApiServiceService} from '../../api-service.service';
import { ActivatedRoute,Router } from '@angular/router';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [ApiServiceService],
})
export class CategoriesComponent implements OnInit {


  constructor( private api : ApiServiceService,
               private activatedRoute : ActivatedRoute,
               private router : Router) { }
  data;arr;arrLength;value;id;
  ngOnInit() {
   this.getCatData();
  }

  getCatData(){
    this.api.getcat().subscribe(res => {
      return this.arr =res;
      this.arrLength = this.arr.length
      console.log(this.arrLength)
      
    })
  }

  onSelect(event :any){
    // console.log(category.id)
    // console.log(category.cat_name)
    // this.router.navigate(['/categories',category.id])
    console.log(event.target.value);
    this.router.navigate(['/categories',event.target.value])
    // this.router.navigate([category.id], {relativeTo: this.activatedRoute})
  }
}

