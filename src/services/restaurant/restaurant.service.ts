import { NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { OrderUpdateStatusDTO } from 'src/models/dtos/order/order_update_status.dto';
import { OrderStatus } from 'src/models/enums/order_status.enum';
import { Order } from 'src/models/schema/order/order.schema';
import { Restaurant } from 'src/models/schema/restaurant/restaurant.schema';

export class RestaurantService {
  constructor(
    @InjectModel(Restaurant.name)
    private restaurantModel: Model<Restaurant>,
    @InjectModel(Order.name)
    private orderModel: Model<Order>,
  ) {}

  async getOrders(restaurantId: string): Promise<OrderUpdateStatusDTO[]> {
    const restaurant = await this.restaurantModel.findById(restaurantId);
    if (!restaurant) {
      throw new NotFoundException('error.no_restaurant_found', {
        description: 'No restaurant found with the provided id',
      });
    }
    return await this.orderModel.find({ restaurant: restaurant._id });
  }
  async changeOrderStatus({
    restaurantId,
    orderId,
    orderStatus,
  }: {
    restaurantId: string;
    orderId: string;
    orderStatus: OrderStatus;
  }): Promise<OrderUpdateStatusDTO> {
    const restaurant = await this.restaurantModel.findById(restaurantId);
    if (!restaurant) {
      throw new NotFoundException('error.no_restaurant_found', {
        description: 'No restaurant found with the provided id',
      });
    }
    const order = await this.orderModel.findOneAndUpdate(
      {
        _id: orderId,
        restaurant: restaurant._id,
      },
      { status: orderStatus },
      { new: true },
    );
    if (!order) {
      throw new NotFoundException('error.no_order_found', {
        description:
          'No order found with the provided id for the specified restaurant',
      });
    }

    return { orderId: order._id.toString(), orderStatus: order.status };
  }

  async getOrderDetails({
    restaurantId,
    orderId,
  }: {
    restaurantId: string;
    orderId: string;
  }) {
    const restaurant = await this.restaurantModel.findById(restaurantId);
    if (!restaurant) {
      throw new NotFoundException('error.no_restaurant_found', {
        description: 'No restaurant found with the provided id',
      });
    }
    const order = await this.orderModel.findOne({
      _id: orderId,
      restaurant: restaurant._id,
    });
    if (!order) {
      throw new NotFoundException('error.no_order_found', {
        description:
          'No order found with the provided id for the specified restaurant',
      });
    }
    return order;
  }

  async addRestaurant() {
    const newRestaurant = new this.restaurantModel({
      name: 'Test Restaurant',
      address: '123 Test St, Test City, TS 12345',
      phoneNumber: '123-456-7890',
      menu: [
        {
          _id: new Types.ObjectId(),
          name: 'testitem1',
          description: 'This is a test 123',
          price: 6,
        },
        {
          _id: new Types.ObjectId(),
          name: 'testitem2',
          description: 'This is a test ABC',
          price: 7,
        },

      ],
    });
    return await newRestaurant.save();
  }
}
