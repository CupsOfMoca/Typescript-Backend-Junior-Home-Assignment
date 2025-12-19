import { IsMongoId } from 'class-validator';
import { Item } from 'src/models/schema/item/item.schema';

export class PlaceOrderInput {
    @IsMongoId()
    restaurantId: string;
  
    @IsMongoId()
    customerId: string;

    items: Item[];

}