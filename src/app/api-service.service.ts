import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor( public http : HttpClient,) { }
  catvalue;arr;

  //calling cateogry api
    getcat(){
    return this.http.get('http://mapi.trycatchtech.com/v1/food_catering/category_list').pipe(map(res => {
      return res;
    }))
  }

  //calling veg/non-veg api

  getSingleCat(category){
    console.log(category)
    let Httpparams = new HttpParams().set('category_id',category);
    return this.http.get(('http://mapi.trycatchtech.com/v1/food_catering/product_list'),{params:Httpparams}).pipe(map(res =>{
      return res;
    }))
  }

  //calling details api

  getListDetails(detail_id){
    console.log(detail_id);
    let Httpparams = new HttpParams().set('product_id', detail_id)
    return this.http.get(('http://mapi.trycatchtech.com/v1/food_catering/single_product'),{params:Httpparams}).pipe(map(res =>{
    return res;
    }))
  }

 



  // getCatData(){
  //   this.getcat().subscribe(res => {
  //     return this.arr =res;
  //     console.log(this.arr)
  //   })
  // }

  
  // getVeg(){
  //   console.log(this.catvalue)
  //   let Httpparams = new HttpParams().set('category_id','1');
  //   return this.http.get(('http://mapi.trycatchtech.com/v1/food_catering/product_list'),{params:Httpparams}).pipe(map(res =>{
  //     return res;
  //   }))
  // }
}
