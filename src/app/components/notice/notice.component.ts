import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
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

}
