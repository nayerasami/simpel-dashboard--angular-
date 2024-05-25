import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/productlist/home/home.component';
import { ProductlistComponent } from './Components/productlist/productlist.component';
import { ProductDetailsComponent } from './Components/productlist/product-details/product-details.component';
import { ProductFormComponent } from './Components/productlist/product-form/product-form.component';
import { NotFoundComponent } from './Components/sharedComponents/not-found/not-found.component';

const routes: Routes = [
  {path:'' ,component:HomeComponent},
  { path: 'products', component: ProductlistComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'products/:id/edit', component: ProductFormComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
