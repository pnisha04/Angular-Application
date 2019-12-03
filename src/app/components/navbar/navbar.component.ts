import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { ApiServiceService } from '../../api-service.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
arr;
  constructor( private api : ApiServiceService,
                private router : Router) { }

  ngOnInit() {
  this.getCatData()
  }
  getCatData(){
    this.api.getcat().subscribe(res => {
      return this.arr =res;
      // this.arrLength = this.arr.length
      // console.log(this.arrLength)
      console.log(this.arr)
      
    })
  }

  onSelect(event :any){
    // console.log(category.id)
    // console.log(category.cat_name)
    // this.router.navigate(['/categories',category.id])
    console.log(event.target.value)
    this.router.navigate(['/categories',event.target.value])
    // this.router.navigate([category.id], {relativeTo: this.activatedRoute})
  }

}
