import { Controller } from '@nestjs/common';
import { RestaurantService } from 'src/services/restaurant/restaurant.service';

@Controller()
export class RestaurantController {
    constructor(private restaurantService: RestaurantService) {}
}