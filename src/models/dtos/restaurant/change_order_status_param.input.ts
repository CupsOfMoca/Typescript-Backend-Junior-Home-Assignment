import { IsMongoId } from 'class-validator';
import { OrderStatus } from 'src/models/enums/order_status.enum';

export class ChangeOrderStatusParam {
  @IsMongoId()
  restaurantId: string;

  @IsMongoId()
  orderId: string;

  orderStatus: OrderStatus;
}