import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  public frequentlyQuestion:any[]=[
    {
      title:'What are Multi Asset Funds',
      value:'Just add data-toggle="collapse" and a data-target to the element to automatically assign control of one or more collapsible elements. The data-target attribute accepts a CSS selector to apply the collapse to. Be sure to add the class collapse to the collapsible element. If you’d like it to default open, add the additional class show'
    },
    {
      title:'What are Citi Premier Funds',
      value:'To add accordion-like group management to a collapsible area, add the data attribute data-parent="#selector". Refer to the demo to see this in action'
    },
    {
      title:'What are the main benefits',
      value:'If parent is provided, then all collapsible elements under the specified parent will be closed when this collapsible item is shown. (similar to traditional accordion behavior - this is dependent on the card class). The attribute has to be set on the target collapsible area'
    },
    {
      title:'Asset Allocation, what does it mean?',
      value:'All API methods are asynchronous and start a transition. They return to the caller as soon as the transition is started but before it ends. In addition, a method call on a transitioning component will be ignored.'
    },
    {
      title:'How do I invest',
      value:'Toggles a collapsible element to shown or hidden. Returns to the caller before the collapsible element has actually been shown or hidden (i.e. before the shown.bs.collapse or hidden.bs.collapse event occurs).'
    }
  ]

  constructor(public route:ActivatedRoute) {

  }

  ngOnInit() {
    console.log("打印一下，看一下路由infomation")
    this.route.queryParams.subscribe((data)=>{
      console.log(data)

    })
  }

}
