import { Deserializable } from './deserializable.model';
import { Pagination } from './pagination.model';
import { ItemModel } from './items.model';
export class ItemsModel implements Deserializable {
  result: ItemModel[];
  pageData: Pagination;
  deserialize(input: any): this {
    Object.assign(this, input);
    this.result = input.result.map(item => new ItemModel().deserialize(item));
    this.pageData = new Pagination().deserialize(input.pageData);
    return this;
  }
}
