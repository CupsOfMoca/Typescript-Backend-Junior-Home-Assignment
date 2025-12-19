import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Module({
  imports: [],
  providers: [CustomerService],
  exports: [CustomerService],
})
export class CustomerModule {}
