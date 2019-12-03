import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule } from '@angular/common/http';
import { Router,ActivatedRoute} from '@angular/router'


import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LifestyleComponent } from './components/categories/lifestyle/lifestyle.component';
import { TravelsComponent } from './components/categories/travels/travels.component';
import { DetailsComponent } from './components/details/details.component'
import { VegComponent } from './components/cat/veg/veg.component';
import { ListDetailsComponent} from './components/list-details/list-details.component';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';




const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'categories/:id',component:VegComponent},
  {path:'categories/:id/:id2',component:ListDetailsComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration:'enabled',anchorScrolling:'enabled',}),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }


