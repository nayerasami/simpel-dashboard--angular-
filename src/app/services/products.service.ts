import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
baseUrl:string ='http://localhost:3005/products'
constructor(public http: HttpClient) { }
getAllProducts(){
return this.http.get(this.baseUrl)
}
getProductById(id:any){
return this.http.get(`${this.baseUrl}/${id}`)
}
addProduct(product:any){
return this.http.post(this.baseUrl,product)
}

editProduct(id:any,product:any){
return this.http.patch(`${this.baseUrl}/${id}`,product)
}
deleteProduct(id:any){
return this.http.delete(`${this.baseUrl}/${id}`)
}

}
