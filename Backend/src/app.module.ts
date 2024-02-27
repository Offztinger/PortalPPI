import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { configRoot } from './core/config/configurations';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';

@Module({
  imports: [ConfigModule.forRoot(configRoot()), DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
