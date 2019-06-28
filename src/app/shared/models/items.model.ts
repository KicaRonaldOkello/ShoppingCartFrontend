import { Deserializable } from './deserializable.model';
import { Price } from './price.model';


export class ItemModel implements Deserializable {
  id: number;
  name: string;
  subTitle: string;
  sellerId: number;
  price: Price;
  image: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    this.price = new Price().deserialize(input.price);
    return this;
  }
}


