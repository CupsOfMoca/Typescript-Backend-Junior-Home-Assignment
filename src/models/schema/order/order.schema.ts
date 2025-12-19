import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, model, Types } from 'mongoose';
import { BaseEntity } from '../base_entity.schema';
import { OrderStatus } from 'src/models/enums/order_status.enum';
import { Item } from '../item/item.schema';

export type OrderDocument = HydratedDocument<Order>;

const collection = 'orders';

@Schema({ collection, versionKey: false })
export class Order extends BaseEntity {
  
  @Prop({ type: Types.ObjectId, ref: 'Restaurant', required: true })
  restaurant: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Customer', required: true })
  customer: Types.ObjectId;

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
