import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-choose-way',
  templateUrl: './choose-way.component.html',
  styleUrls: ['./choose-way.component.css']
})
export class ChooseWayComponent implements OnInit {
  public counts:any[]
  public initCount:string;
  constructor(
    public router:Router,
    public productService:ProductService
  ) { }

  ngOnInit() {
    this.getCounts()
  }
  getCounts(){
    this.productService.getCounts()
    .subscribe(counts => {
      this.counts = counts
      this.initCount=this.counts[0].id
    })
  }

  goNext(){
    this.router.navigateByUrl('')
  }

}
