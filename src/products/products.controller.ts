import { Controller, Get, Param } from '@nestjs/common';
import { ParamsTokenFactory } from '@nestjs/core/pipes';
import { getEnvironmentData } from 'worker_threads';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(): string {
    return 'getAll';
  };
  @Get(':id')
  getOne(@Param('id') id: string): string {
    return 'getOne' + id;
  };
};


