import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetBuyerItemsComponent } from './get-buyer-items/get-buyer-items.component';

const routes: Routes = [
  { path: '', component: GetBuyerItemsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
