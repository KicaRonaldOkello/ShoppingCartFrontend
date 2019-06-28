import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BuyerGetItemsService } from 'src/app/__services__/buyer-get-items.service';

@Component({
  selector: 'app-get-buyer-items',
  templateUrl: './get-buyer-items.component.html',
  styleUrls: ['./get-buyer-items.component.scss']
})
export class GetBuyerItemsComponent implements OnInit {
  allItems: any = [];
  constructor(private sanitizer: DomSanitizer, private itemService: BuyerGetItemsService) { }

  ngOnInit() {
    this.getItems();
  }
  
  public getSantizeUrl(url: string) {
    if (!url) { return null; }
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  
  getItems() {
    this.itemService.get().subscribe(item => {
      console.log(item , '>>>>');
    this.allItems = item.result;
    });
  }
}

