import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NoticeComponent } from './components/notice/notice.component';
import { HelpComponent } from './components/help/help.component'
import { ProductComponent } from './components/product/product.component'

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'notice',component:NoticeComponent},
  {path:'news',component:NewsComponent},
  {path:'search',component:SearchComponent},
  {path:'help',component:HelpComponent},
  {path:'product',component:ProductComponent},
  {path:'**',redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
