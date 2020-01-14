import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  public chooseItem:any[] = ['Focus Region','Sector','Fund House']
  public filrterKeyword:any[] = [{
    label:'All',
    checked:true
  },{
    label:'Alternatives',
    checked:false
  },
  {
    label:'Balanced',
    checked:false
  },
  {
    label:'Equity',
    checked:false
  },
  {
    label:'Fixed Income',
    checked:false
  },
  {
    label:'Money Market',
    checked:false
  }]
  public routeParam:any = {filterId:1}
  public currenciesList:any[] =[
    {
      label:'All',
      checked:false
    },
    {
      label:'AUD',
      checked:false
    },
    {
      label:'CAD',
      checked:false
    },
    {
      label:'CHF',
      checked:false
    },
    {
      label:'CNH',
      checked:false
    },
    {
      label:'CNY',
      checked:false
    },
    {
      label:'EUR',
      checked:false
    },
    {
      label:'GBP',
      checked:false
    },
    {
      label:'HKD',
      checked:false
    },
    {
      label:'INR',
      checked:false
    },
    {
      label:'JPY',
      checked:false
    },
    {
      label:'NOK',
      checked:false
    },
    {
      label:'NZD',
      checked:false
    },
    {
      label:'SEK',
      checked:false
    },
    {
      label:'SGD',
      checked:false
    },
    {
      label:'USD',
      checked:false
    },
    {
      label:'ZAR',
      checked:false
    },
  ]
  public distributionList:any[] = [
    {
      label:'All',
      checked:false
    },
    {
      label:'Dividend',
      checked:false
    },
    {
      label:'Accumulative',
      checked:false
    }
  ]
  public showCheckpanel:boolean = false
  public showCheckpanelSecond:boolean = false
  public showCheckpanelThird:boolean = false
  constructor() { }
  selectItem(item){
    item.checked = !item.checked
  }
  selectCurrency(item){
    item.checked = !item.checked
  }
  ngOnInit() {
  }

}
