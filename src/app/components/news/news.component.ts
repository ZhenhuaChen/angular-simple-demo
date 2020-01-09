import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  // 获取dom节点
  @ViewChild('myBox') myBox:any;


  // 获取一个组件
  @ViewChild('header') header:any;

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
  // viewChild 获取DOM节点
  // 1、模版中给dom起一个名字
  // <div #myBox>Hello world</div>
  // 2、在业务逻辑里面引入viewchild
  // 3、写在类里面  @viewChild('myBox') myBox:any;
  // 4、在ngAfterViewInit 生命周期里面获取dom节点
  //  this.myBox.nativeElement.style.width="100px"


  ngAfterViewInit(): void {
    console.log("what is")
    console.log(this.myBox)
    this.myBox.nativeElement.style.width="100px"
    this.myBox.nativeElement.style.height = "200px";
    this.myBox.nativeElement.style.background='red'
    console.log(this.myBox.nativeElement.innerHTML)

    
  }
  getChildRun(){
    this.header.run();
  }

}
