import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoSectionRoutingModule } from './crypto-section-routing.module';
import { CryptoSectionComponent } from './crypto-section.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CryptoSectionRoutingModule,
    SharedModule
  ],
  declarations: [CryptoSectionComponent]
})
export class CryptoSectionModule { }
