import { IsMongoId } from 'class-validator';

export class OrderParamInput {
  @IsMongoId()
  restaurantId: string;

  @IsMongoId()
  orderId: string;
}