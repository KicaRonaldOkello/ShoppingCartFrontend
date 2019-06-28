import { Deserializable } from './deserializable.model';

export class Price implements Deserializable {
    from: number;
    to: number;

    deserialize(input: any): this {
      Object.assign(this, input);
      return this;
    }
  }
