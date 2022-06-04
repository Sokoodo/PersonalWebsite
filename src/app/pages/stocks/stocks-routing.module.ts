import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StocksComponent} from './stocks.component';

const routes: Routes = [
  {
    path: '',
    component: StocksComponent,
    data: {
      breadcrumb: 'Stocks',
      icon: 'icofont icofont-file-document bg-c-pink',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Stocks Page',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StocksRoutingModule { }
