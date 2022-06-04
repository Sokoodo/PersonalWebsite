import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {P2pLendingComponent} from './p2p-lending.component';

const routes: Routes = [
  {
    path: '',
    component: P2pLendingComponent,
    data: {
      breadcrumb: 'P2p lending',
      icon: 'icofont icofont-file-document bg-c-pink',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - P2p Lending Page',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class P2pLendingRoutingModule { }
