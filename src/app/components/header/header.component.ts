import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Input() showClose:boolean
  @Input() showBack: boolean
  @Input() title:string
  @Input() closeCurrent:any
  @Input() goBack:any
  ngOnInit() {
  }
  close(){
    this.closeCurrent()
  }
  back(){
    this.goBack()
  }

}
