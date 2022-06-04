import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HardPageRoutingModule } from './hard-page-routing.module';
import { HardPageComponent } from './hard-page.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HardPageRoutingModule,
    SharedModule
  ],
  declarations: [HardPageComponent]
})
export class HardPageModule { }
