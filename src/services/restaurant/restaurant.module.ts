import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Restaurant,
  RestaurantSchema,
} from 'src/models/schema/restaurant/restaurant.schema';
import { Order, OrderSchema } from 'src/models/schema/order/order.schema';
import { RestaurantController } from 'src/controllers/restaurant/restaurant.controller';

const mongooseImports = [
  MongooseModule.forFeature([
    {
      name: Restaurant.name,
      schema: RestaurantSchema,
    },
  ]),
  MongooseModule.forFeature([
    {
      name: Order.name,
      schema: OrderSchema,
    },
  ]),
];

@Module({
  imports: [...mongooseImports],
  providers: [RestaurantService],
  controllers: [RestaurantController],
  exports: [RestaurantService],
})
export class RestaurantModule {}
