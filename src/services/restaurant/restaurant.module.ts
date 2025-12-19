import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';

@Module({
  imports: [],
  providers: [RestaurantService],
  exports: [RestaurantService],
})
export class RestaurantModule {}
