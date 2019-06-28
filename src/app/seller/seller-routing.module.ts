import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerItemsComponent } from './seller-items/seller-items.component';
import { AddItemComponent } from './add-item/add-item.component';

const routes: Routes = [
  { path: '', component: SellerItemsComponent },
  { path: 'add', component: AddItemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
