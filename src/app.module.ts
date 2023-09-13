import { Module } from '@nestjs/common';
import { UserModule } from './User/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.database_uri),
    UserModule,
  ],
  providers: [],
})
export class AppModule {}
