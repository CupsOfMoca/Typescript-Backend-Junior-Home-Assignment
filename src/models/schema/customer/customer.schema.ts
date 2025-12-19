import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, model } from 'mongoose';
import { BaseEntity } from '../base_entity.schema';

export type CustomerDocument = HydratedDocument<Customer>;

const collection = 'customers';

@Schema({ collection, versionKey: false })
export class Customer extends BaseEntity {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  email: string;
}
export const CustomerSchema = SchemaFactory.createForClass(Customer);
export const CustomerModel = model(collection, CustomerSchema);
