import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public userInfo:any={
    name:'',
    sex:'',
    cityList:['南京','上海','北京'],
    city:'南京',
    hobby:[{
        title:'吃饭',
        checked:false
      },
      {
        title:'睡觉',
        checked:false
      },
      {
        title:'马代码',
        checked:true
      }
    ],
    mark:''
  }

  constructor() { }

  ngOnInit() {
  }
  doSubmit(){
    console.log("输入的姓名是"+this.userInfo.name)
  }

}
