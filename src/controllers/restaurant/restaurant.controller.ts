import { Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { OrderParamInput } from 'src/models/dtos/order/order_param.input';
import { OrderUpdateStatusDTO } from 'src/models/dtos/order/order_update_status.dto';
import { ChangeOrderStatusParam } from 'src/models/dtos/restaurant/change_order_status_param.input';
import { ResaurantParamInput } from 'src/models/dtos/restaurant/restaurant_param.input';
import { RestaurantService } from 'src/services/restaurant/restaurant.service';

@Controller('restaurant')
export class RestaurantController {
  constructor(private restaurantService: RestaurantService) {}

  //I interpreted the task in a way in which this seemed like the logical way to name the endpoints
  @Get(':restaurantId/orders')
  async getOrders(@Param() params: ResaurantParamInput) {
    return await this.restaurantService.getOrders(params.restaurantId);
  }

  @Patch(':restaurantId/order/:orderId')
  async changeOrderStatus(
    @Param() params: ChangeOrderStatusParam,
  ): Promise<OrderUpdateStatusDTO> {
    return await this.restaurantService.changeOrderStatus(params);
  }

  @Get(':restaurantId/order/:orderId')
  async getOrderDetails(@Param() params: OrderParamInput) {
    return await this.restaurantService.getOrderDetails(params);
  }

  @Post('add')
    async addRestaurant() {
        return await this.restaurantService.addRestaurant();
    }
}
