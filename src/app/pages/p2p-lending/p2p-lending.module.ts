import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { P2pLendingRoutingModule } from './p2p-lending-routing.module';
import { P2pLendingComponent } from './p2p-lending.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    P2pLendingRoutingModule,
    SharedModule
  ],
  declarations: [P2pLendingComponent]
})
export class P2pLendingModule { }
