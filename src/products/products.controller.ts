import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Redirect } from '@nestjs/common';
import { ParamsTokenFactory } from '@nestjs/core/pipes';
import { getEnvironmentData } from 'worker_threads';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {
  }

  @Get()
  // @Redirect('https://google.com', 301)
  getAll() {
    return this.productsService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.productsService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Products', 'none')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Put(':id')
  update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string) {
    return 'Update ' + id;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'Remove ' + id;
  }
}
