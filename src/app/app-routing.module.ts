import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NoticeComponent } from './components/notice/notice.component';
import { HelpComponent } from './components/help/help.component'
import { ProductComponent } from './components/product/product.component'
import { FilterComponent } from './components/filter/filter.component'
import { ChooseWayComponent } from './components/choose-way/choose-way.component'
import { OrderComponent } from './components/order/order.component'

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'notice',component:NoticeComponent},
  {path:'news',component:NewsComponent},
  {path:'search',component:SearchComponent},
  {path:'help',component:HelpComponent},
  {path:'product',component:ProductComponent},
  {path:'filter',component:FilterComponent},
  {path:'choose-way',component:ChooseWayComponent},
  {path:'order',component:OrderComponent},
  {path:'**',redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
