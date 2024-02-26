import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { BookSchema } from './book.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerModule } from '../logger/logger.module';
import { LoggerService } from 'src/logger/logger.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }]),
    LoggerModule, // Include the LoggerModule here
  ],
  providers: [BookService, LoggerService],
  controllers: [BookController],
})
export class BookModule {}
