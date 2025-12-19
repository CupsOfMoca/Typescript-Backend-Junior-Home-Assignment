import { Controller } from '@nestjs/common';
import { CustomerService } from 'src/services/customer/customer.service';

@Controller()
export class CustomerController {
    constructor(private customerService: CustomerService) {}
}