import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, model } from 'mongoose';
import { BaseEntity } from '../base_entity.schema';

export type RestaurantDocument = HydratedDocument<Restaurant>;

const collection = 'restaurants';

@Schema({ collection, versionKey: false })
export class Restaurant extends BaseEntity {
  @Prop({
    required: true,
  })
  name: string;
}
export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
export const RestaurantModel = model(collection, RestaurantSchema);
