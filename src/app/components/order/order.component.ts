import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  
  public title:string='Review investment order'
  public target_fund:Object={
    name:'dfsw'
  }
  public account:Object;
  constructor() { }
  ngOnInit() {
    this.getFund()
  }
  getFund(){


  }
  goback(){

  }
}
