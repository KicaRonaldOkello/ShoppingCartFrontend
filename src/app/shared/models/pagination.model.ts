import { Deserializable } from './deserializable.model';

export class Pagination implements Deserializable {
  totalItems: number;
  page: number;
  perPage: number;
  totalPages: number;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
