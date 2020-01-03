import { Component, OnInit } from '@angular/core';
import { StorageService }  from '../../services/storage.service'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

@Component({

})
export class TodolistComponent implements OnInit {
  public keyword:string;
  public todolist:any[] = []
  public saveStorageData:string='11'
  constructor( public storage:StorageService) {
    console.log("看一下this的指向")
    console.log(this.saveStorageData)
    this.saveStorageData = this.storage.get('name')
    
  }
  doAdd(e){
    console.log("zhixing")
    console.log(e)
    if(e.keyCode == 13){
      console.log("laile")
      this.todolist.push({
        title:this.keyword,
        status:false
      })
      this.keyword = ''
    }



  }
  deleteItem(key){
    this.todolist.splice(key,1)
  }
  todolisthaskeywork(todolist:any,keyword:any){
    

  }
  ngOnInit() {
  }

}
