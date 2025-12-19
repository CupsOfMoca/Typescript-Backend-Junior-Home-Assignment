import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, model } from 'mongoose';
import { BaseEntity } from '../base_entity.schema';

export type ItemDocument = HydratedDocument<Item>;

const collection = 'items';

@Schema({ collection, versionKey: false })
export class Item extends BaseEntity {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  description: string;

  @Prop({
    required: true,
  })
  price: number;
}
export const ItemSchema = SchemaFactory.createForClass(Item);
export const ItemModel = model(collection, ItemSchema);
