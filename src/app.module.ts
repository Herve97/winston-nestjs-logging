import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from './logger/logger.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';
import { APP_FILTER } from '@nestjs/core';
import { NotFoundExceptionFilter } from './book/404';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017'),
    LoggerModule,
    BookModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: NotFoundExceptionFilter, // Register the custom filter for 404 errors
    },
    AppService,
  ],
})
export class AppModule {}
