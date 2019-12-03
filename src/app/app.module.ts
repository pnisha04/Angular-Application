import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ContactComponent } from './components/contact/contact.component';
import { ArticlesSliderComponent } from './components/home/articles-slider/articles-slider.component';
import { LifestyleComponent } from './components/categories/lifestyle/lifestyle.component';
import { TravelsComponent } from './components/categories/travels/travels.component';
import { DetailsComponent } from './components/details/details.component';
import { VegComponent } from './components/cat/veg/veg.component';
import { NonVegComponent } from './components/cat/non-veg/non-veg.component';
import { ListDetailsComponent } from './components/list-details/list-details.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    CategoriesComponent,
    ContactComponent,
    ArticlesSliderComponent,
    LifestyleComponent,
    TravelsComponent,
    DetailsComponent,
    VegComponent,
    NonVegComponent,
    ListDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
