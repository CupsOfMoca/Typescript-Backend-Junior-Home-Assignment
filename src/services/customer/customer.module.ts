import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Restaurant,
  RestaurantSchema,
} from 'src/models/schema/restaurant/restaurant.schema';
import { Order, OrderSchema } from 'src/models/schema/order/order.schema';
import {
  Customer,
  CustomerSchema,
} from 'src/models/schema/customer/customer.schema';
import { CustomerController } from 'src/controllers/customer/customer.controller';

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
  MongooseModule.forFeature([
    {
      name: Customer.name,
      schema: CustomerSchema,
    },
  ]),
];

@Module({
  imports: [...mongooseImports],
  providers: [CustomerService],
  controllers:[CustomerController],
  exports: [CustomerService],
})
export class CustomerModule {}
