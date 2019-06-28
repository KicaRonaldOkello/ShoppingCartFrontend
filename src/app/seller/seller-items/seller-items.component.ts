import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-items',
  templateUrl: './seller-items.component.html',
  styleUrls: ['./seller-items.component.scss']
})
export class SellerItemsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToAddItemForm() {
    this.router.navigate(['/seller/add']);
  }
}
