import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: './buyer/buyer.module#BuyerModule' },
  { path: 'auth', loadChildren: './authentication/authentication.module#AuthenticationModule'},
  { path: 'seller', loadChildren: './seller/seller.module#SellerModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
