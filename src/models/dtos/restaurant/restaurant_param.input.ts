import { IsMongoId } from 'class-validator';

export class ResaurantParamInput {
  @IsMongoId()
  restaurantId: string;
}