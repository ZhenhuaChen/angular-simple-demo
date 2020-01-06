import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public showSelect:boolean=false
  public currentSelect:number = 1
  public productList:any[] = [{
      name:'AB FCP - AMERICAN INCOME PORTFOLIO AT-AUD(H)',
      cycle:'3 year annualised returns',
      rate:'2.94%',
    },
    {
      name:'AB FCP - AMERICAN INCOME PORTFOLIO AT-AUD(H)',
      cycle:'3 year annualised returns',
      rate:'2.94%',
    },
    {
      name:'AB FCP - AMERICAN INCOME PORTFOLIO AT-AUD(H)',
      cycle:'3 year annualised returns',
      rate:'2.94%',
    },
    {
      name:'AB FCP - AMERICAN INCOME PORTFOLIO AT-AUD(H)',
      cycle:'3 year annualised returns',
      rate:'2.94%',
    },
    {
      name:'AB FCP - AMERICAN INCOME PORTFOLIO AT-AUD(H)',
      cycle:'3 year annualised returns',
      rate:'2.94%',
    },
  ]
  constructor(public route:ActivatedRoute,public router:Router) {

  }

  ngOnInit() {
  }
  goBack(){
    this.router.navigateByUrl('help')
  }

}
