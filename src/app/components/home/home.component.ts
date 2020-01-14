import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public title = "我是HOME"
	msg = "我是一个test的样子"
	username:string = '张三'
	public message:any;
	// 定义数组
	public arr:Object = [1,2,3,4,5]
	// 推荐下面写法
	public student:string = '我是一个学生'
	public userinfo:object = {
		username:'张三',
		age:20
	}
	public score:Number = 3
	public content:string='<h2>我是一个html标签</h2>'
	public isRedcolor:boolean=true
	public today:any=new Date()
	public keywords:string;
	

  constructor() {
	  this.message = '这是改变属性的值'
   }

  ngOnInit() {
  }
	run(){
		alert("这是一个自定义方法")
		
	}
	// 获取数据
	getData(){
		alert(this.score)
	}
	// 改变数据
	setData(){
		this.score = 5

	}
	keyDown(e){
		console.log("keyDown")
		console.log(e.target.value)
		console.log(e)
		if(e.keyCode == 13){
			console.log("按下了ENter")
		}
	}
	changeAppearance(e){
		let dom:any= event.target
		dom.style.color = "red"
	}

}
