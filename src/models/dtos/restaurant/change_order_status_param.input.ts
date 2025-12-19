import { IsMongoId } from 'class-validator';

export class ChangeOrderStatusParam {
  @IsMongoId()
  restaurantId: string;

  @IsMongoId()
  orderId: string;

}