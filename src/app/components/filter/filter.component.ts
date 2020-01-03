import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  public chooseItem:any[] = ['Focus Region','Sector','Fund House']
  public filrterKeyword:any[] = [['All','Alternatives','Balanced'],['Equity','Fixed Income','Money Market']]
  public showCheckpanel:boolean = false
  constructor() { }

  ngOnInit() {
  }

}
