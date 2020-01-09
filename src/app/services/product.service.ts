import { Injectable } from '@angular/core';
import { Products } from '../product-list'
import { Product } from '../product'
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  constructor() { }
  gerProducts():Observable <Product[]>{
    return of(Products)
  }
  getProduct(id: number): Observable <Product>{
    return of(Products.find(product => product.id == id))
  } 
}
