import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
	public title:string = 'Before we start'
	public showBack:boolean = true
	public showClose:boolean = true
	public documentList:any[] = [{
		name:'General disclaimer',
		url:'../../../assets/File/disclaimer.pdf'
	},
	{
		name:'Investment agreement',
		url:'../../../assets/File/disclaimer.pdf'
	},
	{
		name:'Risk disclosure statement',
		url:'../../../assets/File/disclaimer.pdf'
	},
	{
		name:'Important Invertment Notification',
		url:'../../../assets/File/disclaimer.pdf'
	}
	]
  constructor() { }

  ngOnInit() {
  }
  closeCurrent(){
	  console.log("zhixinglema")
  }
  goback(){
	  console.log("返回上一页")

  }
  testClick(){
	  console.log("输出一些信息")

  }
//   after view onload
  ngAfterViewInit(): void {
  }

}
