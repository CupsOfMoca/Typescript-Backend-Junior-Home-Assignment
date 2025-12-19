import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, model } from 'mongoose';
import { BaseEntity } from '../base_entity.schema';
import { Item } from '../item/item.schema';

export type RestaurantDocument = HydratedDocument<Restaurant>;

const collection = 'restaurants';

@Schema({ collection, versionKey: false })
export class Restaurant extends BaseEntity {
  @Prop({
    required: true,
  })
  name: string;

  /*
  I only realized that menus were a thing when I got to implementing the customer service.
  There is no mention of it anywhere else, so I will assume at this point that it's a list of items
  that the restaurant offers and should be accesed like this.
  */
  @Prop({
    required: true,
  })
  menu: Item[];
}
export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
export const RestaurantModel = model(collection, RestaurantSchema);
