import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ParamsTokenFactory } from '@nestjs/core/pipes';
import { getEnvironmentData } from 'worker_threads';
import { CreateProductDto } from './dto/create-produst.dto';
import { UpdateProductDto } from './dto/update-product.dto';

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
    return `Title: ${CreateProductDto.title} Price: ${CreateProductDto.price}`;
  };

@Put(':id')
update(@Body() UpdateProductDto: UpdateProductDto, @Param('id') id: string) {
  return 'Update' + id;
};

@Delete(':id')
  remove(@Param('id') id: string) {
    return 'remove' + id;
  };

};


