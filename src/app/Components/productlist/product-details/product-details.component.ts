import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  product: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    public __productServices: ProductsService,
    public router: Router
  ) {}
  ngOnInit(): void {
      this.productId = this.activatedRoute.snapshot.params['id'];
      this.__productServices.getProductById(this.productId).subscribe({
  next:(data)=>{
    this.product=data;
  }
})

  }

  backToProduct() {
    this.router.navigate(['/products']);
  }
}
