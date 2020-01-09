import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product'
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService:ProductService) {
   
  }
  product : Product = {
    id:11,
    name:'dfasw',
    cycle:'d983hd',
    rate:'3.4',
    checked:false,
  }
  productList : Product[]
  


  getData(){
    this.productService.gerProducts()
        .subscribe(productList => this.productList = productList)
  }
  ngOnInit() {
    this.getData()
  }
  ngAfterViewInit(): void {
    console.log("看看闲杂呢")
    console.log(this.product)
    console.log(this.productList)
    
  }

}
