import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { SellerRoutingModule } from './seller-routing.module';
import { AddItemComponent } from './add-item/add-item.component';
import { SellerItemsComponent } from './seller-items/seller-items.component';
import { UploadImageComponent } from './add-item/upload-image/upload-image.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddItemComponent, SellerItemsComponent, UploadImageComponent],
  imports: [
    CommonModule,
    SellerRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyA8T7Cr2qWmO4yK1R3ZXGMA1oWntRz0wso',
      projectId: 'shopping-cart-75519',
      storageBucket: 'gs://shopping-cart-75519.appspot.com/',
      authDomain: 'shopping-cart-75519.firebaseapp.com'
    }),
    AngularFireStorageModule,
  ]
})
export class SellerModule { }
