import { Injectable } from '@angular/core';
import { Products } from '../product-list'
import { Accounts } from '../user-account'
import { Product } from '../product'
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  constructor() { }
  getProducts():Observable <Product[]>{
    return of(Products)
  }
  getProduct(id: number): Observable <Product>{
    return of(Products.find(product => product.id == id))
  } 
  getCounts(){
    return of(Accounts)
  }
}
