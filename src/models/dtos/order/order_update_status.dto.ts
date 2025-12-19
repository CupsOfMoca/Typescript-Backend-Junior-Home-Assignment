import { OrderStatus } from 'src/models/enums/order_status.enum';

export class OrderUpdateStatusDTO {
  orderId: string;
  orderStatus: OrderStatus;
}
