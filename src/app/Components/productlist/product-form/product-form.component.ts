import { Observable } from 'rxjs';
import { ProductsService } from './../../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { productsList } from 'src/app/services/productList';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

productId:any
product:any
  constructor(public activatedRoute: ActivatedRoute,
    public router :Router,
    public __productsService:ProductsService
    ) {

    }

  ngOnInit(): void {  
    this.activatedRoute.params.subscribe({
      next:(params)=>{
console.log(params['id'])
this.productId =params['id']
this.getName.setValue('')
this.getPrice.setValue(null)
this.getQuantity.setValue(null)
      }
      })

if(this.productId !==0){
this.__productsService.getProductById(this.productId).subscribe({
  next:(data)=>{
  console.log(data)
this.product=data;
this.getName.setValue(this.product.name)
this.getPrice.setValue(this.product.price)
this.getQuantity.setValue(this.product.quantity)
  }
})

    }
  }
  productForm =new FormGroup({
    name:new FormControl('',[
      Validators.required, 
      Validators.minLength(3)
    ]),
    price:new FormControl(null,[
      Validators.required
    ]),
    quantity:new FormControl(null,[
      Validators.required,
      Validators.min(2)
    ])
  })
  buttonFlag:boolean =false


  get getName(){
    return this.productForm.controls['name']
  }

  get getPrice(){
    return this.productForm.controls['price']
  }
  
  get getQuantity(){
    return this.productForm.controls['quantity']
  }


  formOperations(e:any){
    e.preventDefault()
    if(this.productForm.status=='VALID'){
if(this.productId ==0){
//add 

this.__productsService.addProduct(this.productForm.value).subscribe({
  next:()=>{
   this.router.navigate(['/products'])
  }
})
}else{
this.__productsService.editProduct(this.productId,this.productForm.value).subscribe({
  next:()=>{
    console.log("nono")
    this.router.navigate(['/products'])
  }
})
}
    }else{
      console.log(' fix errors ')
    }
  }

 
  
  
}
