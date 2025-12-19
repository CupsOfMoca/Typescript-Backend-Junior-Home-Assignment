import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, model } from 'mongoose';
import { BaseEntity } from '../base_entity.schema';
import { OrderStatus } from 'src/models/enums/order_status.enum';
import { Item } from '../item/item.schema';

export type OrderDocument = HydratedDocument<Order>;

const collection = 'orders';

@Schema({ collection, versionKey: false })
export class Order extends BaseEntity {
  @Prop({
    required: true,
  })
  customerId: string;

  @Prop({
    required: true,
  })
  restaurantId: string;

  @Prop({
    required: true,
  })
  status: OrderStatus;

  @Prop({
    required: true,
  })
  items: Item[];
}
export const OrderSchema = SchemaFactory.createForClass(Order);
export const OrderModel = model(collection, OrderSchema);

