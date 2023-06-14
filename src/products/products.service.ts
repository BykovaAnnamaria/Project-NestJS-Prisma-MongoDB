import { Delete, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAll() {
    return await this.prismaService.product.findMany();
  }

  async getAllPricyGoods() {
    const whereClause = {
      size: 12,
    };

    return this.prismaService.product.findMany({
      where: whereClause,
    });
  }

  getById(id: string) {
    const whereClause = {
      id,
    };

    return this.prismaService.product.findUnique({
      where: whereClause,
    });

    // {
    //   id,
    // }
    // { "s": 432 }
    // => { "id": id }

    // ===
    // return this.prismaService.product.findUnique({
    //   where: {
    //     id
    //   },
    // });
  }

  async create(productDto: CreateProductDto) {
    const product = await this.prismaService.product.create({
      data: {
        name: productDto.name,
        size: 1,
        price: 1,
      },
    });

    return product;

    // return await this.prismaService.product.create({
    //   data: {
    //     name: productDto.name,
    //     size: 1,
    //     price: 1,
    //   },
    // });
  }

  async update(updateProductDto: UpdateProductDto) {
    return await this.prismaService.product.upsert({
      where: {
        id: updateProductDto.id,
      },
      update: {
        name: updateProductDto.name,
        price: updateProductDto.price,
      },
      create: {
        name: updateProductDto.name,
        price: updateProductDto.price,
        size: updateProductDto.size,
      },
    });
  }

  async delete(productId: string) {
    return await this.prismaService.product.delete({
      where: {
        id: productId,
      }
    });
  }
}
