import { NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from 'src/models/schema/customer/customer.schema';
import { Item } from 'src/models/schema/item/item.schema';
import { Order } from 'src/models/schema/order/order.schema';
import { Restaurant } from 'src/models/schema/restaurant/restaurant.schema';

export class CustomerService {
  constructor(
    @InjectModel(Restaurant.name)
    private restaurantModel: Model<Restaurant>,
    @InjectModel(Order.name)
    private orderModel: Model<Order>,
    @InjectModel(Customer.name)
    private customerModel: Model<Customer>,
  ) {}

  async getRestaurants(): Promise<Restaurant[]> {
    return await this.restaurantModel.find();
  }

  async getRestaurantDetails(restaurantId: string): Promise<Restaurant> {
    const restaurant = await this.restaurantModel.findById({
      _id: restaurantId,
    });
    if (!restaurant) {
      throw new NotFoundException('error.no_restaurant_found', {
        description: 'No restaurant found with the provided id',
      });
    }
    return restaurant;
  }

  async getRestaurantMenu(restaurantId: string): Promise<Item[]> {
    const restaurant = await this.restaurantModel.findById({
      _id: restaurantId,
    });
    if (!restaurant) {
      throw new NotFoundException('error.no_restaurant_found', {
        description: 'No restaurant found with the provided id',
      });
    }
    return restaurant.menu;
  }

  async placeOrder({
    restaurantId,
    customerId,
    items,
  }: {
    customerId: string;
    restaurantId: string;
    items: Item[];
  }): Promise<Order> {
    //I commented this part out because I have now implemented user registration and authentication.
    /*
    const customer = await this.customerModel.findById(customerId);
     if (!customer) {
      throw new NotFoundException('error.no_customer_found', {
        description: 'No customer found with the provided id',
      });
    } */
    const restaurant = await this.restaurantModel.findById(restaurantId);
    if (!restaurant) {
      throw new NotFoundException('error.no_restaurant_found', {
        description: 'No restaurant found with the provided id',
      });
    }
    const newOrder = new this.orderModel({
      customer: customerId, //customer._id, //same reason as above
      restaurant: restaurant._id,
      items,
      status: 'PENDING',
    });
    return await newOrder.save();
  }
}
