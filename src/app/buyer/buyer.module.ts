import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import bootstrap from 'bootstrap';
import { BuyerRoutingModule } from './buyer-routing.module';
import { GetBuyerItemsComponent } from './get-buyer-items/get-buyer-items.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    GetBuyerItemsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BuyerRoutingModule
  ],
  exports: [
    GetBuyerItemsComponent,
  ]
})
export class BuyerModule { }
