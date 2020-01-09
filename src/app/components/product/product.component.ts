import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router'
import { Product } from '../../Product'
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public showSelect:boolean=false
  public currentSelect:number = 1

  constructor(
    public route:ActivatedRoute,
    public router:Router,
    private productService:ProductService) {

  }
  public productList:Product[];

  getData(){
    this.productService.gerProducts()
      .subscribe(productList => this.productList = productList)
  }
  ngOnInit() {
    this.getData()
  }
  goBack(){
    this.router.navigateByUrl('help')
  }
  goFilter(){
    this.router.navigateByUrl('filter')
  }
 }
