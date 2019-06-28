import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from 'src/app/__services__/item.service';



@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  images = [];
  imageReceived = true;
  itemForm: FormGroup;
  constructor(private fb: FormBuilder, private itemService: ItemService) { }

  ngOnInit() {
    this.itemForm = this.fb.group({
      name: ['', Validators.required],
      subtitle: ['', Validators.required],
      description: ['', Validators.required],
      highestPrice: ['', Validators.required],
      lowestPrice: ['', Validators.required]
    });
  }

  receiveImageUrl(event) {
    this.images.push(...event);
    this.imageReceived = false;
  }

  send() {
    const { name, description, subtitle, highestPrice, lowestPrice } = this.itemForm.value;
    const { id } = JSON.parse(localStorage.getItem('userData'));
    const item  = {
      name,
      description,
      sub_title: subtitle,
      price: `${lowestPrice}-${highestPrice}`,
      images: this.images,
      sellerId: id,
    };
    this.itemService.addItem(item).subscribe((response) => {
      console.log(response, '>>>>>>');
    });
  }

}
