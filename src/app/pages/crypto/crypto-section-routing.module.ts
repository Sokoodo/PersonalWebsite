import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CryptoSectionComponent} from './crypto-section.component';

const routes: Routes = [
  {
    path: '',
    component: CryptoSectionComponent,
    data: {
      breadcrumb: 'Sample Page Crypto',
      icon: 'icofont icofont-file-document bg-c-pink',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Crypto Page',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptoSectionRoutingModule { }
