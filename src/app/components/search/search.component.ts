import { Component, OnInit } from '@angular/core';
// 引入服务
import { StorageService } from '../../services/storage.service'
import { identifierModuleUrl } from '@angular/compiler';
// 不推荐这样写 var storage = new StorageService()
//  在组件中使用组件的时候
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public keyword:string=''
  public historyData:any = []
  constructor(public storange:StorageService) {
   }
  dosearch(){
    console.log("执行了吗")
    if(this.historyData.indexOf(this.keyword) == -1){
        this.historyData.push(this.keyword)

        this.storange.set('searchlist',this.historyData)
    }
    this.keyword = ''
  }
  deleteItem(key){
    console.log("输出key")
    console.log(key)
    this.historyData.splice(key,1)
  }

  ngOnInit() {
    // 页面刷新会触发这个生命周期函数
    var searchlist = this.storange.get('searchlist');
    if(searchlist){
      this.historyData = searchlist
    }
  }

}
