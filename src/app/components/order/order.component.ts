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
  public moblieContainer: HTMLDivElement = null
  public account:Object;
  constructor() { }
  ngOnInit() {
    console.log("这是个啥")
    console.log(this.moblieContainer)
    this.getFund()
  }
  getFund(){


  }
  goback(){

  }
}
