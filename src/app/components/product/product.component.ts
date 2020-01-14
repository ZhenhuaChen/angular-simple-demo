import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router'
import { Product } from '../../Product'
import { ProductService } from '../../services/product.service'
import { StorageService }  from '../../services/storage.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public title:string='Select up to 3 funds'
  public showBack:boolean = false
  public showClose:boolean = true
  public showSelect:boolean=false
  public currentSelect:number = 1

  constructor(
    public route:ActivatedRoute,
    public router:Router,
    private productService:ProductService,
    public storage:StorageService
    ) {

  }
  public productList:Product[];
  public filterId:string;

  getData(){
    this.productService.getProducts()
      .subscribe(productList => this.productList = productList)
  }
  ngOnInit() {
    this.getData()
    this.route.params.subscribe(params => { this.filterId =  params.filterId})
  }
  goBack(){
    this.router.navigateByUrl('help')
  }
  goFilter(){
    this.router.navigateByUrl('filter')
  }
  closeCurrent(){
    this.router.navigateByUrl('help')
  }
  chooseFund(id){
    this.storage.set('fundId',id)
    this.router.navigateByUrl('choose-way')
  }
 }
