import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products:any
  constructor(public _productServices:ProductsService){}
  ngOnInit(): void {
    this._productServices.getAllProducts().subscribe({
      next:(data)=>{
        this.products=data;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  
  deleteProductHandler(id: any) {
this._productServices.deleteProduct(id).subscribe({
  next:(data)=>{
this.products=this.products.filter((product:any)=>product.id !=id)
  }
})
  }

  
}
