// 这个文件是Angular根模块，告诉Angular如何组装应用
// BrowserModule浏览器解析的模块
import { BrowserModule } from '@angular/platform-browser';
// NgModule Angular 的核心模块
import { NgModule } from '@angular/core';
// AppRoutingModule路由模块
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms'
// AppComponent根组件
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';
// 引入并且配置服务
import { StorageService } from './services/storage.service';
import { NoticeComponent } from './components/notice/notice.component';
import { HelpComponent } from './components/help/help.component'
// @NgModule装饰器，@NgModule接收一个元数据对象，告诉Angular如何编译和启动应用
@NgModule({
  declarations: [ /* 配置当前项目运行的组件*/ 
    AppComponent, NewsComponent, HomeComponent, HeaderComponent, FooterComponent, SearchComponent, TodolistComponent, NoticeComponent, HelpComponent
  ],
  imports: [ /* 配置当前模块运行依赖的其他模块 */
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [StorageService],/* 配置项目所需要的服务 */
  bootstrap: [AppComponent] /* 指定应用的主视图（根组件）通过引导根AppModule来启动应用*/
})

// 根模块不需要导出任何东西， 因为其它组件不需要导入根模块
export class AppModule { }
