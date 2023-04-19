import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma.module';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';
import { ProductsService } from './products/products.service';

@Module({
  imports: [ProductsModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
