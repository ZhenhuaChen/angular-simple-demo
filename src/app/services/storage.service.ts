import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  // 获取数据
  get(key:string){
    return JSON.parse(localStorage.getItem(key))
  }
  // 设置数据
  set(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value));
  }
  // 删除属性
  remove(key){
    localStorage.removeItem(key)
  }
}
