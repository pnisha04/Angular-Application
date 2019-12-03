import { Component, OnInit, Input, Output } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { CategoriesComponent } from "../../categories/categories.component";
import { ApiServiceService } from "../../../api-service.service";
import { EventEmitter } from "events";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";

@Component({
  selector: "app-veg",
  templateUrl: "./veg.component.html",
  styleUrls: ["./veg.component.css"]
})
export class VegComponent implements OnInit {
  category;

  foodid;
  vegid;
  arrvalue;
  category_id;
  food;
  vegArr;
  constructor(
    private route: ActivatedRoute,
    private api: ApiServiceService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log(params);
      let id = params.get("id");
      this.category = id;
      console.log(this.category);
    });
    this.getCatList();
  }

  //  getVeg(){
  //   console.log(this.category)
  //   let Httpparams = new HttpParams().set('category_id',this.category);
  //   return this.http.get(('http://mapi.trycatchtech.com/v1/food_catering/product_list'),{params:Httpparams}).pipe(map(res =>{
  //     return res;
  //   }))
  // }

  getCatList() {
      this.api.getSingleCat(this.category).subscribe(res => {
        return (this.vegArr = res);
        console.log(this.vegArr);
      });
    
  }

  onSelect(event: any) {
    // console.log(category.id)
    // console.log(category.cat_name)
    // this.router.navigate(['/categories',category.id])
    console.log(event.target.vaue);
    this.router.navigate(["/categories", event.target.value]);
    // this.router.navigate([category.id], {relativeTo: this.activatedRoute})
  }
}
