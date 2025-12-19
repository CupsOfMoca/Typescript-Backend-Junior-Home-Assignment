import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PlaceOrderInput } from 'src/models/dtos/order/place_order.input';
import { ResaurantParamInput } from 'src/models/dtos/restaurant/restaurant_param.input';
import { CustomerService } from 'src/services/customer/customer.service';

//I will most likely not have enough time to implement authentication,
//so I will exclude checks like "does this customer exist, and authorization."

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  //Added for testing purposes
  @Post('add')
  async addCustomer() {
    return await this.customerService.addCustomer();
  }

  @Get('restaurants')
  async getRestaurants() {
    return await this.customerService.getRestaurants();
  }

  @Get('restaurant/:restaurantId')
  async getRestaurantDetails(@Param() params: ResaurantParamInput) {
    return await this.customerService.getRestaurantDetails(params.restaurantId);
  }

  @Get('restaurant/:restaurantId/menu')
  async getRestaurantMenu(@Param() params: ResaurantParamInput) {
    return await this.customerService.getRestaurantMenu(params.restaurantId);
  }

  @Post('orders')
  async placeOrder(@Body() body: PlaceOrderInput) {
    return await this.customerService.placeOrder(body);
  }
}
