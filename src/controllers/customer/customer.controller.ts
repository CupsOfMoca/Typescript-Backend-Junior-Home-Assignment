import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PlaceOrderInput } from 'src/models/dtos/order/place_order.input';
import { ResaurantParamInput } from 'src/models/dtos/restaurant/restaurant_param.input';
import { CustomerService } from 'src/services/customer/customer.service';

//I will most likely not have enough time to implement authentication

@ApiTags('Customer')
@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  //Added for testing purposes
  @Post('add')
  @ApiOperation({ summary: 'Add a test customer' })
  @ApiResponse({ status: 201, description: 'Customer added successfully' })
  async addCustomer() {
    return await this.customerService.addCustomer();
  }

  @Get('restaurants')
  @ApiOperation({ summary: 'Get list of all restaurants' })
  @ApiResponse({
    status: 200,
    description: 'List of restaurants retrieved successfully',
  })
  async getRestaurants() {
    return await this.customerService.getRestaurants();
  }

  @Get('restaurant/:restaurantId')
  @ApiOperation({ summary: 'Get details of a specific restaurant' })
  async getRestaurantDetails(@Param() params: ResaurantParamInput) {
    return await this.customerService.getRestaurantDetails(params.restaurantId);
  }

  @Get('restaurant/:restaurantId/menu')
  @ApiOperation({ summary: 'Get menu of a specific restaurant' })
  async getRestaurantMenu(@Param() params: ResaurantParamInput) {
    return await this.customerService.getRestaurantMenu(params.restaurantId);
  }

  @Post('orders')
  @ApiOperation({ summary: 'Place a new order' })
  async placeOrder(@Body() body: PlaceOrderInput) {
    return await this.customerService.placeOrder(body);
  }
}
