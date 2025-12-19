import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantModule } from './services/restaurant/restaurant.module';
import { CustomerModule } from './services/customer/customer.module';

@Module({
  imports: [RestaurantModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
