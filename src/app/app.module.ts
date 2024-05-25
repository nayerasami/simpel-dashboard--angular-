import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './Components/productlist/productlist.component';
import { NavbarComponent } from './Components/sharedComponents/navbar/navbar.component';
import { NotFoundComponent } from './Components/sharedComponents/not-found/not-found.component';
import { ProductDetailsComponent } from './Components/productlist/product-details/product-details.component';
import { ProductItemComponent } from './Components/productlist/product-item/product-item.component';
import { ProductFormComponent } from './Components/productlist/product-form/product-form.component';
import { HomeComponent } from './Components/productlist/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    NavbarComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    ProductItemComponent,
    ProductFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
