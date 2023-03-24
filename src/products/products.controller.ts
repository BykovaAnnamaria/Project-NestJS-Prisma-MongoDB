import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ParamsTokenFactory } from '@nestjs/core/pipes';
import { getEnvironmentData } from 'worker_threads';
import { CreateProductDto } from './dto/create-produst.dto';

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

  @Post()
  create(@Body() CreateProductDto: CreateProductDto): string {
    return `Title: ${CreateProductDto.title} Price: ${CreateProductDto.price}`
  };
};


